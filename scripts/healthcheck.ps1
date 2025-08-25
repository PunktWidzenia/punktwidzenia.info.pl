Param(
  [string]$BaseUrl = "https://punktwidzenia.info.pl",
  [string]$Output = "./healthcheck.csv",
  [switch]$Fast,                 # tylko HEAD (bez meta/canonical)
  [int]$Throttle = 1,            # >1 = równolegle (wymaga PS7/pwsh)
  [int]$ConnectTimeout = 5,      # sek
  [int]$MaxTime = 15,            # sek
  [switch]$SkipStatic            # pomiń / i /polityka-prywatnosci
)

$UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

function NormalizeUrl([string]$url) {
  if (-not $url) { return "" }
  try {
    $u = [Uri]$url
    $scheme = $u.Scheme.ToLower()
    $host   = $u.Host.ToLower()
    $path   = $u.AbsolutePath.TrimEnd("/")
    return ("{0}://{1}{2}" -f $scheme, $host, $path)
  } catch {
    return ($url.TrimEnd("/"))
  }
}

# Regexy jako here-stringi (literalne)
$LocPattern = @'
<loc>([^<]+)</loc>
'@

$MetaRobotsPattern = @'
<meta[^>]+name=["'']robots["''][^>]*content=["'']([^"'']+)["'']
'@

$CanonicalPattern = @'
<link[^>]+rel=["'']canonical["''][^>]*href=["'']([^"'']+)["'']
'@

# 1) Pobierz listę części sitemapy
try {
  $index = Invoke-WebRequest -UseBasicParsing "$BaseUrl/sitemap.xml"
} catch {
  Write-Error "Nie udało się pobrać indexu sitemapy: $BaseUrl/sitemap.xml"
  exit 1
}

$parts = [regex]::Matches($index.Content, $LocPattern) |
  ForEach-Object { $_.Groups[1].Value } |
  Where-Object { $_ -match 'sitemap-\d+\.xml$' }

if (-not $parts -or $parts.Count -eq 0) {
  Write-Warning "Nie znaleziono shardów sitemapy w indexie. Próba: $BaseUrl/sitemap-0.xml"
  $parts = @("$BaseUrl/sitemap-0.xml")
}

# 2) Zbierz wszystkie URL-e z każdej części
$urls = @()
foreach ($p in $parts) {
  try {
    $xml = Invoke-WebRequest -UseBasicParsing $p
    $urls += [regex]::Matches($xml.Content, $LocPattern) |
             ForEach-Object { $_.Groups[1].Value }
  } catch {
    Write-Warning "Pominięto shard: $p ($($_.Exception.Message))"
  }
}

# Deduplikacja URL-i
$urls = $urls | Sort-Object -Unique

# (opcjonalnie) pomiń strony statyczne
if ($SkipStatic) {
  $urls = $urls | Where-Object { (NormalizeUrl $_) -notin @((NormalizeUrl "$BaseUrl/"), (NormalizeUrl "$BaseUrl/polityka-prywatnosci")) }
}

# 3) Właściwy health-check
$isPS7 = $PSVersionTable.PSVersion.Major -ge 7
$results = $null

if ($isPS7 -and $Throttle -gt 1) {
  # Równolegle (PS7/pwsh)
  $results = $urls | ForEach-Object -Parallel {
    param($UA,$Fast,$MetaRobotsPattern,$CanonicalPattern,$ConnectTimeout,$MaxTime)

    $u = $_
    $headers = & curl.exe -s -L -I --connect-timeout $ConnectTimeout --max-time $MaxTime -A $UA $u 2>$null
    $statusMatches = [regex]::Matches($headers, 'HTTP/\d\.\d\s+(\d{3})')
    $status = if ($statusMatches.Count) { $statusMatches[$statusMatches.Count-1].Groups[1].Value } else { "" }

    $xrMatch = [regex]::Matches($headers, '(?im)^x-robots-tag:\s*(.+)$')
    $xrobots = if ($xrMatch.Count) { $xrMatch[$xrMatch.Count-1].Groups[1].Value.Trim() } else { "" }

    $meta=""; $canonical=""; $ok=""
    if (-not $Fast -and $status -eq "200") {
      $html = & curl.exe -s -L --connect-timeout $ConnectTimeout --max-time $MaxTime -A $UA $u 2>$null
      $m=[regex]::Match($html,$using:MetaRobotsPattern,[Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if($m.Success){ $meta=$m.Groups[1].Value }
      $c=[regex]::Match($html,$using:CanonicalPattern,[Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if($c.Success){ $canonical=$c.Groups[1].Value }
      function Norm([string]$uu){ try{ $uri=[Uri]$uu; "{0}://{1}{2}" -f $uri.Scheme.ToLower(),$uri.Host.ToLower(),$uri.AbsolutePath.TrimEnd('/') } catch { $uu.TrimEnd('/') } }
      $ok = if((Norm $canonical) -eq (Norm $u)){"true"} else {"false"}
    }

    [pscustomobject]@{ url=$u; status=$status; x_robots=$xrobots; meta_robots=$meta; canonical=$canonical; canonical_ok=$ok }
  } -ThrottleLimit $Throttle -ArgumentList $UA,$Fast,$MetaRobotsPattern,$CanonicalPattern,$ConnectTimeout,$MaxTime
}
else {
  # Sekwencyjnie (PS 5.1+) z paskiem postępu
  $results = @()
  $i = 0; $n = $urls.Count
  foreach ($u in $urls) {
    $i++
    Write-Progress -Activity "Health-check" -Status "$i / $n" -PercentComplete ([int](100*$i/$n))

    $headers = & curl.exe -s -L -I --connect-timeout $ConnectTimeout --max-time $MaxTime -A $UA $u 2>$null
    $statusMatches = [regex]::Matches($headers, 'HTTP/\d\.\d\s+(\d{3})')
    $status = if ($statusMatches.Count) { $statusMatches[$statusMatches.Count-1].Groups[1].Value } else { "" }

    $xrMatch = [regex]::Matches($headers, '(?im)^x-robots-tag:\s*(.+)$')
    $xrobots = if ($xrMatch.Count) { $xrMatch[$xrMatch.Count-1].Groups[1].Value.Trim() } else { "" }

    $meta=""; $canonical=""; $ok=""
    if (-not $Fast -and $status -eq "200") {
      $html = & curl.exe -s -L --connect-timeout $ConnectTimeout --max-time $MaxTime -A $UA $u 2>$null
      $m=[regex]::Match($html,$MetaRobotsPattern,[Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if($m.Success){ $meta=$m.Groups[1].Value }
      $c=[regex]::Match($html,$CanonicalPattern,[Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if($c.Success){ $canonical=$c.Groups[1].Value }
      function Norm([string]$uu){ try{ $uri=[Uri]$uu; "{0}://{1}{2}" -f $uri.Scheme.ToLower(),$uri.Host.ToLower(),$uri.AbsolutePath.TrimEnd('/') } catch { $uu.TrimEnd('/') } }
      $ok = if((Norm $canonical) -eq (Norm $u)){"true"} else {"false"}
    }

    $results += [pscustomobject]@{ url=$u; status=$status; x_robots=$xrobots; meta_robots=$meta; canonical=$canonical; canonical_ok=$ok }
  }
  Write-Progress -Activity "Health-check" -Completed
}

# 4) Zapis i podsumowanie
$results | Export-Csv -NoTypeInformation -Encoding UTF8 $Output
Write-Host "Zapisano: $Output"

$results | Group-Object status | Sort-Object Name | Format-Table -AutoSize

"`nPodejrzane:" | Write-Host
$results |
  Where-Object {
    $_.status -notmatch '^200$' -or
    $_.x_robots -match 'noindex' -or
    $_.meta_robots -match 'noindex' -or
    $_.canonical_ok -eq 'false'
  } |
  Select-Object url, status, x_robots, meta_robots, canonical_ok |
  Format-Table -AutoSize
