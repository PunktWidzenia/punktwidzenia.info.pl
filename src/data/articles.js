const articles = [
  {
  id: 102,
  link: "/tragiczny-wypadek-w-lizbonie-zderzenie-tramwaju-z-samochodem-sa-ofiary-smiertelne",
  img: "/tragiczny-wypadek-w-lizbonie-zderzenie-tramwaju-z-samochodem-sa-ofiary-smiertelne.webp",
  title: "🚋 Tragiczny wypadek w Lizbonie – zderzenie tramwaju z samochodem, są ofiary śmiertelne",
  description: "Co najmniej 15 ofiar śmiertelnych po zderzeniu tramwaju z samochodem w Lizbonie. Władze ogłosiły żałobę, trwa dochodzenie w sprawie przyczyn.",
  date: "2025-09-04",
  component: "Articletragicznywypadekwlizboniezderzenietramwajuzsamochodemsaofiarysmiertelne"
},
  {
  id: 101,
  link: "/orlen-sprzedaje-polska-press-koniec-eksperymentu-z-panstwowym-wlascicielem-mediow",
  img: "/orlen-sprzedaje-polska-press-koniec-eksperymentu-z-panstwowym-wlascicielem-mediow.webp",
  title: "📰 Orlen sprzedaje Polska Press – koniec eksperymentu z państwowym właścicielem mediów?",
  description: "Orlen przygotowuje się do sprzedaży Polska Press – medialnej grupy przejętej w czasach rządu PiS. To symboliczny ruch na rynku informacji i wolności słowa.",
  date: "2025-09-03",
  component: "Articleorlensprzedajepolskapresskonieceksperymentuzpanstwowymwlascicielemmediow"
},
  {
  id: 100,
  link: "/ai-w-lodowce-i-na-biurku-przyszlosc-wlasnie-sie-zaczela",
  img: "/ai-w-lodowce-i-na-biurku-przyszlosc-wlasnie-sie-zaczela.webp",
  title: "🤖 AI w lodówce i na biurku — przyszłość właśnie się zaczęła",
  description: "Czy Twoja lodówka wie, co lubisz jeść? AI w sprzęcie domowym i biurowym to już nie przyszłość. To standard, który działa tu i teraz.",
  date: "2025-09-03",
  component: "Articleaiwlodowceinabiurkuprzyszloscwlasniesiezaczela"
},
  {
  id: 99,
  link: "/polska-zbozem-stoi-stabilne-zbiory-ale-wyzwania-rosna",
  img: "/polska-zbozem-stoi-stabilne-zbiory-ale-wyzwania-rosna.webp",
  title: "🌾 Polska zbożem stoi – stabilne zbiory, ale wyzwania rosną",
  description: "Komisja Europejska szacuje, że Polska zbierze ok. 35 mln ton zbóż w 2025 roku. To wynik zbliżony do średniej, ale rynek nadal pozostaje niestabilny.",
  date: "2025-09-02",
  component: "Articlepolskazbozemstoistabilnezbioryalewyzwaniarosna"
},
  {
  id: 98,
  link: "/polska-stawia-na-energetyke-wiatrowa-na-baltyku-miliardowe-inwestycje-i-ambitne-cele",
  img: "/polska-stawia-na-energetyke-wiatrowa-na-baltyku-miliardowe-inwestycje-i-ambitne-cele.webp",
  title: "🌊 Polska stawia na energetykę wiatrową na Bałtyku – miliardowe inwestycje i ambitne cele",
  description: "Polska inwestuje w morską energetykę wiatrową. Projekt Baltic Power i kolejne farmy mają dać nawet 18 GW mocy do 2040 roku.",
  date: "2025-09-02",
  component: "Articlepolskastawianaenergetykewiatrowanabaltykumiliardoweinwestycjeiambitnecele"
},
  {
  id: 97,
  link: "/tragiczne-trzesienie-ziemi-w-afganistanie-setki-ofiar-i-tysiace-rannych",
  img: "/tragiczne-trzesienie-ziemi-w-afganistanie-setki-ofiar-i-tysiace-rannych.webp",
  title: "🌍 Tragiczne trzęsienie ziemi w Afganistanie – setki ofiar i tysiące rannych",
  description: "Silne trzęsienie ziemi we wschodnim Afganistanie spowodowało około 800 ofiar śmiertelnych i 2 500 rannych. Trwają akcje ratunkowe wśród gruzów domów i meczetów.",
  date: "2025-09-01",
  component: "Articletragicznetrzesienieziemiwafganistaniesetkiofiaritysiacerannych"
},
  {
  id: 96,
  link: "/prezydent-polski-zada-reparacji-od-niemiec-w-rocznice-wybuchu-ii-wojny-swiatowej",
  img: "/prezydent-polski-zada-reparacji-od-niemiec-w-rocznice-wybuchu-ii-wojny-swiatowej.webp",
  title: "🇵🇱 Prezydent Polski żąda reparacji od Niemiec w rocznicę wybuchu II wojny światowej",
  description: "Prezydent Karol Nawrocki zaapelował o reparacje wojenne od Niemiec w 86. rocznicę wybuchu II wojny światowej.",
  date: "2025-09-01",
  component: "Articleprezydentpolskizadareparacjiodniemiecwrocznicewybuchuiiwojnyswiatowej"
},
  {
  id: 95,
  link: "/krwawy-ksiezyc-juz-7-wrzesnia-jedno-z-najdluzszych-zacmien-w-ostatnich-latach",
  img: "/krwawy-ksiezyc-juz-7-wrzesnia-jedno-z-najdluzszych-zacmien-w-ostatnich-latach.webp",
  title: "🌕 „Krwawy księżyc” już 7 września – jedno z najdłuższych zaćmień w ostatnich latach",
  description: "7 września 2025 r. zobaczymy całkowite zaćmienie Księżyca zwane „krwawym księżycem”. Zjawisko potrwa ponad 80 minut i będzie widoczne na dużych obszarach świata",
  date: "2025-09-01",
  component: "Articlekrwawyksiezycjuz7wrzesniajednoznajdluzszychzacmienwostatnichlatach"
},
  {
  id: 94,
  link: "/ue-dziekuje-polsce-za-ochrone-wschodniej-granicy",
  img: "/ue-dziekuje-polsce-za-ochrone-wschodniej-granicy.webp",
  title: "🛡️ UE dziękuje Polsce za ochronę wschodniej granicy",
  description: "Szefowa Komisji Europejskiej odwiedziła polsko-białoruską granicę i podkreśliła rolę Polski w ochronie całej Europy przed presją ze strony Rosji i Białorusi.",
  date: "2025-08-31",
  component: "Articleuedziekujepolscezaochronewschodniejgranicy"
},
  {
  id: 93,
  link: "/czy-dzis-jest-niedziela-handlowa-sprawdz-31-sierpnia-2025",
  img: "/czy-dzis-jest-niedziela-handlowa-sprawdz-31-sierpnia-2025.webp",
  title: "🛒 Czy dziś jest niedziela handlowa? Sprawdź 31 sierpnia 2025",
  description: "31 sierpnia 2025 przypada niedziela handlowa. Sklepy, galerie i markety są dziś otwarte — to ostatnia taka okazja przed grudniem.",
  date: "2025-08-31",
  component: "Articleczydzisjestniedzielahandlowasprawdz31sierpnia2025"
},
  {
  id: 92,
  link: "/status-uchodzcow-z-ukrainy-w-polsce-pod-znakiem-zapytania",
  img: "/status-uchodzcow-z-ukrainy-w-polsce-pod-znakiem-zapytania.webp",
  title: "🛑 Status uchodźców z Ukrainy w Polsce pod znakiem zapytania",
  description: "Prezydent zablokował ustawę o ochronie dla Ukraińców. Przyszłość uchodźców w Polsce pozostaje niepewna.",
  date: "2025-08-30",
  component: "Articlestatusuchodzcowzukrainywpolscepodznakiemzapytania"
},
  {
  id: 91,
  link: "/polska-kupuje-rekordowe-ilosci-zlota-swiatowy-lider-w-2025-roku",
  img: "/polska-kupuje-rekordowe-ilosci-zlota-swiatowy-lider-w-2025-roku.webp",
  title: "🪙 Polska kupuje rekordowe ilości złota – światowy lider w 2025 roku",
  description: "Polska w pierwszym kwartale 2025 roku zakupiła najwięcej złota na świecie – 48,6 ton. To element strategii wzmocnienia rezerw i bezpieczeństwa finansowego.",
  date: "2025-08-30",
  component: "Articlepolskakupujerekordoweiloscizlotaswiatowyliderw2025roku"
},
  {
  id: 90,
  link: "/katastrofa-f-16-w-radomiu-air-show-2025-przerwane-po-tragicznym-wypadku",
  img: "/katastrofa-f-16-w-radomiu-air-show-2025-przerwane-po-tragicznym-wypadku.webp",
  title: "✈️ Katastrofa F-16 w Radomiu – Air Show 2025 przerwane po tragicznym wypadku",
  description: "Katastrofa F-16 w Radomiu zakończyła Air Show 2025. Pilot zginął, trwa dochodzenie wojska.",
  date: "2025-08-29",
  component: "Articlekatastrofaf16wradomiuairshow2025przerwanepotragicznymwypadku"
},
  {
  id: 89,
  link: "/rosyjski-nalot-na-kijow-ofiary-i-zniszczenia-w-stolicy-ukrainy",
  img: "/rosyjski-nalot-na-kijow-ofiary-i-zniszczenia-w-stolicy-ukrainy.webp",
  title: "💥 Rosyjski nalot na Kijów – ofiary i zniszczenia w stolicy Ukrainy",
  description: "Rosyjski nalot na Kijów – są ofiary i ranni, zniszczone budynki mieszkalne.",
  date: "2025-08-28",
  component: "Articlerosyjskinalotnakijowofiaryizniszczeniawstolicyukrainy"
},
  {
  id: 88,
  link: "/czy-polacy-sa-gotowi-na-zycie-bez-alkoholu",
  img: "/czy-polacy-sa-gotowi-na-zycie-bez-alkoholu.webp",
  title: "🍷 Czy Polacy są gotowi na życie bez alkoholu?",
  description: "Alkohol to tradycja i jednocześnie problem społeczny. Czy Polska mogłaby funkcjonować całkowicie bez niego?",
  date: "2025-08-27",
  component: "Articleczypolacysagotowinazyciebezalkoholu"
},
  {
  id: 87,
  link: "/wroclaw-walczy-z-komarami-przy-uzyciu-dronow-pierwsze-takie-rozwiazanie-w-polsce",
  img: "/wroclaw-walczy-z-komarami-przy-uzyciu-dronow-pierwsze-takie-rozwiazanie-w-polsce.webp",
  title: "🛰️ Wrocław walczy z komarami przy użyciu dronów – pierwsze takie rozwiązanie w Polsce",
  description: "Wrocław jako pierwsze miasto w Polsce wdrożył drony do walki z komarami. Nowa metoda ma ograniczyć uciążliwe owady w ekologiczny i skuteczny sposób.",
  date: "2025-08-27",
  component: "Articlewroclawwalczyzkomaramiprzyuzyciudronowpierwszetakierozwiazaniewpolsce"
},
  {
  id: 86,
  link: "/kosiniak-kamysz-wolyn-warunkiem-akcesji-ukrainy-do-ue",
  img: "/kosiniak-kamysz-wolyn-warunkiem-akcesji-ukrainy-do-ue.webp",
  title: "🌍 Kosiniak-Kamysz: Wołyń warunkiem akcesji Ukrainy do UE",
  description: "Kosiniak-Kamysz oświadczył, że bez uznania zbrodni wołyńskiej za ludobójstwo Ukraina nie ma szans na wejście do Unii Europejskiej.",
  date: "2025-08-26",
  component: "Articlekosiniakkamyszwolynwarunkiemakcesjiukrainydoue"
},
  {
  id: 85,
  link: "/zolnierz-ranny-przy-granicy-z-bialorusia-napieta-sytuacja-w-rejonie-czeremchy",
  img: "/zolnierz-ranny-przy-granicy-z-bialorusia-napieta-sytuacja-w-rejonie-czeremchy.webp",
  title: "🚨 Żołnierz ranny przy granicy z Białorusią – napięta sytuacja w rejonie Czeremchy",
  description: "Polski żołnierz został ranny przy granicy w rejonie Czeremchy. Minister obrony Kosiniak-Kamysz potwierdził zdarzenie i zapowiedział działania.",
  date: "2025-08-26",
  component: "Articlezolnierzrannyprzygranicyzbialorusianapietasytuacjawrejonieczeremchy"
},
  {
  id: 84,
  link: "/prezydent-nawrocki-zawetowal-trzy-ustawy-najwiekszy-kryzys-legislacyjny-kadencji",
  img: "/prezydent-nawrocki-zawetowal-trzy-ustawy-najwiekszy-kryzys-legislacyjny-kadencji.webp",
  title: "🇵🇱 Prezydent Nawrocki zawetował trzy ustawy – największy kryzys legislacyjny kadencji",
  description: "Prezydent Karol Nawrocki zawetował trzy ustawy, w tym o pomocy Ukraińcom. Decyzja wywołała spór polityczny i zapowiedź nowego projektu.",
  date: "2025-08-26",
  component: "Articleprezydentnawrockizawetowaltrzyustawynajwiekszykryzyslegislacyjnykadencji"
},
  {
  id: 83,
  link: "/polacy-uciekaja-na-workation-praca-zdalna-i-urlop-w-jednym",
  img: "/polacy-uciekaja-na-workation-praca-zdalna-i-urlop-w-jednym.webp",
  title: "✈️ Polacy uciekają na „workation” – praca zdalna i urlop w jednym",
  description: "Coraz więcej Polaków wybiera „workation” – łączenie pracy zdalnej i podróży, a hitem stał się Dubaj.",
  date: "2025-08-25",
  component: "Articlepolacyuciekajanaworkationpracazdalnaiurlopwjednym"
},
  {
  id: 82,
  link: "/tragiczny-wypadek-na-autostradzie-a2-ciezarowka-stanela-w-ogniu",
  img: "/tragiczny-wypadek-na-autostradzie-a2-ciezarowka-stanela-w-ogniu.webp",
  title: "🚨 Tragiczny wypadek na autostradzie A2 – ciężarówka stanęła w ogniu",
  description: "Na autostradzie A2 doszło do tragicznego wypadku. Ciężarówka stanęła w ogniu, a kierowca poniósł śmierć na miejscu.",
  date: "2025-08-25",
  component: "Articletragicznywypadeknaautostradziea2ciezarowkastanelawogniu"
},
  {
  id: 81,
  link: "/wisla-na-rekordowo-niskim-poziomie-historyczne-ostrzezenie-dla-polski",
  img: "/wisla-na-rekordowo-niskim-poziomie-historyczne-ostrzezenie-dla-polski.webp",
  title: "💧 Wisła na rekordowo niskim poziomie – historyczne ostrzeżenie dla Polski",
  description: "Wisła osiągnęła najniższy poziom w historii pomiarów, co rodzi pytania o skutki suszy, zmiany klimatu i przyszłość zasobów wodnych w Polsce.",
  date: "2025-08-24",
  component: "Articlewislanarekordowoniskimpoziomiehistoryczneostrzezeniedlapolski"
},
  {
  id: 80,
  link: "/rocznica-paktu-ribbentropmolotow-ostrzezenie-prezydenta-nawrockiego",
  img: "/rocznica-paktu-ribbentropmolotow-ostrzezenie-prezydenta-nawrockiego.webp",
  title: "📜 Rocznica Paktu Ribbentrop–Mołotow – ostrzeżenie prezydenta Nawrockiego",
  description: "Prezydent Karol Nawrocki upamiętnił rocznicę Paktu Ribbentrop–Mołotow, ostrzegając przed odradzającymi się imperialnymi ambicjami Rosji.",
  date: "2025-08-24",
  component: "Articlerocznicapakturibbentropmolotowostrzezenieprezydentanawrockiego"
},
  {
  id: 79,
  link: "/polsko-irlandzka-akcja-rozbija-gangi-narkotykowe-warte-240-mln",
  img: "/polsko-irlandzka-akcja-rozbija-gangi-narkotykowe-warte-240-mln.webp",
  title: "🚔 Polsko-irlandzka akcja rozbija gangi narkotykowe warte 240 mln €",
  description: "Irlandzka Garda i polska policja rozbiły szlak narkotykowy wart 240 mln euro. Zatrzymano kilkanaście osób i zabezpieczono setki kilogramów narkotyków.",
  date: "2025-08-24",
  component: "Articlepolskoirlandzkaakcjarozbijaganginarkotykowewarte240mln"
},
  {
  id: 78,
  link: "/mark-carney-w-polsce-kanadyjski-premier-zaciesnia-strategiczne-wiezi",
  img: "/mark-carney-w-polsce-kanadyjski-premier-zaciesnia-strategiczne-wiezi.webp",
  title: "🤝 Mark Carney w Polsce – kanadyjski premier zacieśnia strategiczne więzi",
  description: "Premier Kanady Mark Carney rozpoczął wizytę w Polsce, Niemczech i na Łotwie. Główne tematy to bezpieczeństwo, energetyka i współpraca przemysłowa.",
  date: "2025-08-24",
  component: "Articlemarkcarneywpolscekanadyjskipremierzaciesniastrategicznewiezi"
},
  {
  id: 77,
  link: "/prokuratura-zleca-sekcje-zwlok-stanislawa-soyki",
  img: "/prokuratura-zleca-sekcje-zwlok-stanislawa-soyki.webp",
  title: "🎶 Prokuratura zleca sekcję zwłok Stanisława Soyki",
  description: "Prokuratura zdecydowała o przeprowadzeniu sekcji zwłok Stanisława Soyki w celu ustalenia przyczyny śmierci artysty.",
  date: "2025-08-24",
  component: "Articleprokuraturazlecasekcjezwlokstanislawasoyki"
},
  {
  id: 76,
  link: "/wroclaw-na-liscie-najpiekniejszych-miast-europy",
  img: "/wroclaw-na-liscie-najpiekniejszych-miast-europy.webp",
  title: "🏙️ Wrocław na liście najpiękniejszych miast Europy",
  description: "Wrocław, nazywany „Wenecją Polski”, został doceniony jako jedno z najbardziej urokliwych miast Europy, zachwycając turystów kanałami, zabytkami i atmosferą.",
  date: "2025-08-23",
  component: "Articlewroclawnaliscienajpiekniejszychmiasteuropy"
},
  {
  id: 75,
  link: "/pierwsza-kobieta-kapitan-w-polskiej-sluzbie-sar",
  img: "/pierwsza-kobieta-kapitan-w-polskiej-sluzbie-sar.webp",
  title: "🚤 Pierwsza kobieta kapitan w polskiej służbie SAR",
  description: "Paulina Pacuła została pierwszą kobietą-kapitanem w historii Morskiej Służby Poszukiwania i Ratownictwa, obejmując dowództwo jednostki „Sztorm” na Helu.",
  date: "2025-08-23",
  component: "Articlepierwszakobietakapitanwpolskiejsluzbiesar"
},
  {
  id: 74,
  link: "/rzadkie-zjawisko-nad-baltykiem-az-osiem-trab-wodnych-jednoczesnie",
  img: "/rzadkie-zjawisko-nad-baltykiem-az-osiem-trab-wodnych-jednoczesnie.webp",
  title: "🌪️ Rzadkie zjawisko nad Bałtykiem – aż osiem trąb wodnych jednocześnie",
  description: "Nad Bałtykiem pojawiło się niezwykle rzadkie zjawisko – osiem trąb wodnych jednocześnie.",
  date: "2025-08-23",
  component: "Articlerzadkiezjawiskonadbaltykiemazosiemtrabwodnychjednoczesnie"
},
  {
  id: 73,
  link: "/manewry-zapad-2025-ukraina-ostrzega-przed-prowokacjami",
  img: "/manewry-zapad-2025-ukraina-ostrzega-przed-prowokacjami.webp",
  title: "⚔️ Manewry „Zapad-2025” – Ukraina ostrzega przed prowokacjami",
  description: "Ukraina ostrzegła Białoruś przed prowokacjami podczas wrześniowych ćwiczeń wojskowych „Zapad-2025”, wskazując na ryzyko eskalacji konfliktu w regionie.",
  date: "2025-08-23",
  component: "Articlemanewryzapad2025ukrainaostrzegaprzedprowokacjami"
},
  {
  id: 72,
  link: "/masowy-atak-rosji-na-ukraine-polska-w-stanie-czujnosci",
  img: "/masowy-atak-rosji-na-ukraine-polska-w-stanie-czujnosci.webp",
  title: "💥 Masowy atak Rosji na Ukrainę – Polska w stanie czujności",
  description: "Rosja przeprowadziła największy atak powietrzny na Ukrainę, Polska poderwała myśliwce w obronie granic.",
  date: "2025-08-22",
  component: "Articlemasowyatakrosjinaukrainepolskawstanieczujnosci"
},
  {
  id: 71,
  link: "/rzad-rezygnuje-z-podatku-od-rezerw-bankowych",
  img: "/rzad-rezygnuje-z-podatku-od-rezerw-bankowych.webp",
  title: "💰 Rząd rezygnuje z podatku od rezerw bankowych",
  description: "Ministerstwo Finansów wycofało się z planu podatku od rezerw bankowych po gwałtownej reakcji rynku.",
  date: "2025-08-22",
  component: "Articlerzadrezygnujezpodatkuodrezerwbankowych"
},
  {
  id: 70,
  link: "/sensacyjne-odkrycie-w-gdansku-grob-rycerza-pod-lodziarnia",
  img: "/sensacyjne-odkrycie-w-gdansku-grob-rycerza-pod-lodziarnia.webp",
  title: "⚔️ Sensacyjne odkrycie w Gdańsku – grób rycerza pod lodziarnią",
  description: "W Gdańsku odkryto grób średniowiecznego rycerza pod lodziarnią. Płyta nagrobna sprzed ponad 700 lat zachowała się w świetnym stanie.",
  date: "2025-08-22",
  component: "Articlesensacyjneodkryciewgdanskugrobrycerzapodlodziarnia"
},
  {
  id: 69,
  link: "/rzad-podnosi-podatek-dla-bankow-dodatkowe-65-mld-zl-na-obrone",
  img: "/rzad-podnosi-podatek-dla-bankow-dodatkowe-65-mld-zl-na-obrone.webp",
  title: "💰 Rząd podnosi podatek dla banków – dodatkowe 6,5 mld zł na obronę",
  description: "Rząd planuje podwyższyć CIT dla banków z 19% do 30%, by sfinansować wydatki obronne. Zmiana ma przynieść 6,5 mld zł w 2026 roku.",
  date: "2025-08-21",
  component: "Articlerzadpodnosipodatekdlabankowdodatkowe65mldzlnaobrone"
},
  {
  id: 68,
  link: "/polska-modernizuje-flote-f-16-kontrakt-wart-38-mld-usd",
  img: "/polska-modernizuje-flote-f-16-kontrakt-wart-38-mld-usd.webp",
  title: "✈️ Polska modernizuje flotę F-16 – kontrakt wart 3,8 mld USD",
  description: "Polska przeznaczy 3,8 mld USD na modernizację 48 myśliwców F-16C/D. To największy kontrakt serwisowy w historii Sił Powietrznych RP.",
  date: "2025-08-21",
  component: "Articlepolskamodernizujeflotef16kontraktwart38mldusd"
},
  {
  id: 67,
  link: "/inflacja-spada-ale-ceny-w-sklepach-wciaz-wysokie-gdzie-tkwi-problem",
  img: "/inflacja-spada-ale-ceny-w-sklepach-wciaz-wysokie-gdzie-tkwi-problem.webp",
  title: "💸 Inflacja spada, ale ceny w sklepach wciąż wysokie – gdzie tkwi problem?",
  description: "Inflacja spada, ale ceny w sklepach pozostają wysokie. Eksperci wyjaśniają przyczyny tej różnicy.",
  date: "2025-08-21",
  component: "Articleinflacjaspadaalecenywsklepachwciazwysokiegdzietkwiproblem"
},
  {
  id: 66,
  link: "/holandia-wysyla-zolnierzy-i-system-patriot-do-polski-solidarnosc-nato-w-praktyce",
  img: "/holandia-wysyla-zolnierzy-i-system-patriot-do-polski-solidarnosc-nato-w-praktyce.webp",
  title: "🛡️ Holandia wysyła żołnierzy i system Patriot do Polski – solidarność NATO w praktyce",
  description: "Holandia ogłosiła wysłanie 300 żołnierzy i systemu Patriot do Polski. To element wsparcia NATO i odpowiedź na rosnące zagrożenie ze strony Rosji.",
  date: "2025-08-21",
  component: "Articleholandiawysylazolnierzyisystempatriotdopolskisolidarnoscnatowpraktyce"
},
  {
  id: 65,
  link: "/wystawa-our-boys-w-gdansku-wywolala-polityczna-burze",
  img: "/wystawa-our-boys-w-gdansku-wywolala-polityczna-burze.webp",
  title: "🏛️ Wystawa „Our Boys” w Gdańsku wywołała polityczną burzę",
  description: "Wystawa w Muzeum Gdańska o Polakach wcielanych do Wehrmachtu wywołała ostre spory polityczne i historyczne.",
  date: "2025-08-20",
  component: "Articlewystawaourboyswgdanskuwywolalapolitycznaburze"
},
  {
  id: 64,
  link: "/eksplozja-drona-na-wschodzie-polski-rosnace-napiecia-przy-granicy",
  img: "/eksplozja-drona-na-wschodzie-polski-rosnace-napiecia-przy-granicy.webp",
  title: "🚨 Eksplozja drona na wschodzie Polski – rosnące napięcia przy granicy",
  description: "Na polu w woj. lubelskim doszło do eksplozji drona. Nikt nie został ranny, ale zdarzenie zwiększa obawy o bezpieczeństwo na wschodniej granicy Polski.",
  date: "2025-08-20",
  component: "Articleeksplozjadronanawschodziepolskirosnacenapieciaprzygranicy"
},
  {
  id: 63,
  link: "/ukraincy-ratuja-polski-rynek-pracy-fitch-ostrzega-przed-rosnacym-deficytem",
  img: "/ukraincy-ratuja-polski-rynek-pracy-fitch-ostrzega-przed-rosnacym-deficytem.webp",
  title: "💼 Ukraińcy ratują polski rynek pracy – Fitch ostrzega przed rosnącym deficytem",
  description: "Fitch prognozuje wzrost polskiej gospodarki dzięki pracownikom z Ukrainy, ale ostrzega przed rosnącym deficytem budżetowym.",
  date: "2025-08-20",
  component: "Articleukraincyratujapolskirynekpracyfitchostrzegaprzedrosnacymdeficytem"
},
  {
  id: 62,
  link: "/smierc-podczas-polowania-na-lubelszczyznie-tragedia-w-lesie",
  img: "/smierc-podczas-polowania-na-lubelszczyznie-tragedia-w-lesie.webp",
  title: "🎯 Śmierć podczas polowania na Lubelszczyźnie – tragedia w lesie",
  description: "Tragedia na polowaniu w Lubelskiem. 60-letni mężczyzna zginął od strzału oddanego przez 40-letniego myśliwego, który usłyszał zarzut zabójstwa.",
  date: "2025-08-19",
  component: "Articlesmiercpodczaspolowanianalubelszczyznietragediawlesie"
},
  {
  id: 61,
  link: "/zarzut-dla-roberta-bakiewicza-zniewazenie-sluzb-na-moscie-w-slubicach",
  img: "/zarzut-dla-roberta-bakiewicza-zniewazenie-sluzb-na-moscie-w-slubicach.webp",
  title: "⚠️ Zarzut dla Roberta Bąkiewicza: znieważenie służb na moście w Słubicach",
  description: "Robert Bąkiewicz usłyszał zarzut znieważenia funkcjonariuszy Straży Granicznej i Żandarmerii Wojskowej podczas incydentu w Słubicach.",
  date: "2025-08-19",
  component: "Articlezarzutdlarobertabakiewiczazniewazeniesluzbnamosciewslubicach"
},
  {
  id: 60,
  link: "/katowicka-kwk-wieczorek-zmienia-sie-w-nowoczesny-hub-technologiczny",
  img: "/katowicka-kwk-wieczorek-zmienia-sie-w-nowoczesny-hub-technologiczny.webp",
  title: "✨ Katowicka KWK Wieczorek zmienia się w nowoczesny hub technologiczny",
  description: "Katowicka KWK Wieczorek po zamknięciu w 2018 roku przechodzi metamorfozę. W miejscu kopalni powstanie hub technologiczny – symbol transformacji Śląska.",
  date: "2025-08-18",
  component: "Articlekatowickakwkwieczorekzmieniasiewnowoczesnyhubtechnologiczny"
},
  {
  id: 59,
  link: "/tragedia-w-stegnie-ojciec-utonal-ratujac-corki",
  img: "/tragedia-w-stegnie-ojciec-utonal-ratujac-corki.webp",
  title: "🚨 Tragedia w Stegnie: ojciec utonął ratując córki",
  description: "W Stegnie 48-letni ojciec utonął, ratując dwie córki porwane przez fale. Dziewczynki dopłynęły do brzegu, ale mimo reanimacji mężczyzny nie udało się uratować.",
  date: "2025-08-18",
  component: "Articletragediawstegnieojciecutonalratujaccorki"
},
  {
  id: 58,
  link: "/chopin-a-sonata-in-paris-polska-superprodukcja-o-legendzie-muzyki",
  img: "/chopin-a-sonata-in-paris-polska-superprodukcja-o-legendzie-muzyki.webp",
  title: "🎬 „Chopin, a Sonata in Paris” – polska superprodukcja o legendzie muzyki",
  description: "Jesienią 2025 roku do kin trafi „Chopin, a Sonata in Paris” – biograficzny film o Fryderyku Chopinie. Superprodukcja z budżetem 72 mln zł.",
  date: "2025-08-17",
  component: "Articlechopinasonatainparispolskasuperprodukcjaolegendziemuzyki"
},
  {
  id: 57,
  link: "/polska-z-medalami-na-igrzyskach-swiatowych-2025-imponujacy-dorobek-w-chinach",
  img: "/polska-z-medalami-na-igrzyskach-swiatowych-2025-imponujacy-dorobek-w-chinach.webp",
  title: "🥇 Polska z medalami na Igrzyskach Światowych 2025 – imponujący dorobek w Chinach",
  description: "Polska reprezentacja zdobyła aż 13 medali na Igrzyskach Światowych 2025 w Chinach. Złoto, srebro i brąz w różnych dyscyplinach pokazują siłę i wszechstronność p",
  date: "2025-08-17",
  component: "Articlepolskazmedalaminaigrzyskachswiatowych2025imponujacydorobekwchinach"
},
  {
  id: 56,
  link: "/spotkanie-trumpputin-w-anchorage-wielkie-oczekiwania-brak-przelomu",
  img: "/spotkanie-trumpputin-w-anchorage-wielkie-oczekiwania-brak-przelomu.webp",
  title: "🌍 Spotkanie Trump–Putin w Anchorage – wielkie oczekiwania, brak przełomu",
  description: "Donald Trump i Władimir Putin spotkali się w Anchorage, by rozmawiać o wojnie w Ukrainie. Po wielogodzinnych rozmowach nie ogłoszono zawieszenia broni ani konkr",
  date: "2025-08-16",
  component: "Articlespotkanietrumpputinwanchoragewielkieoczekiwaniabrakprzelomu"
},
  {
  id: 55,
  link: "/gpt-5-bez-rewolucji-czy-sztuczna-inteligencja-utknela-w-miejscu",
  img: "/gpt-5-bez-rewolucji-czy-sztuczna-inteligencja-utknela-w-miejscu.webp",
  title: "🤖 GPT-5 bez rewolucji – czy sztuczna inteligencja utknęła w miejscu?",
  description: "GPT-5 nie przyniósł przełomu. Zamiast rewolucji mamy drobne ulepszenia i rosnący sceptycyzm. Czy rozwój AI faktycznie spowolnił?",
  date: "2025-08-16",
  component: "Articlegpt5bezrewolucjiczysztucznainteligencjautknelawmiejscu"
},
  {
  id: 54,
  link: "/obowiazkowe-badania-psychologiczne-dla-kierowcow-co-5-lat-bezpieczenstwo-czy-przesada",
  img: "/obowiazkowe-badania-psychologiczne-dla-kierowcow-co-5-lat-bezpieczenstwo-czy-przesada.webp",
  title: "🚗 Obowiązkowe badania psychologiczne dla kierowców co 5 lat – bezpieczeństwo czy przesada?",
  description: "Pomysł badań psychologicznych dla wszystkich kierowców co pięć lat dzieli opinię publiczną. Czy to poprawi bezpieczeństwo, czy będzie tylko kosztowną przesadą?",
  date: "2025-08-15",
  component: "Articleobowiazkowebadaniapsychologicznedlakierowcowco5latbezpieczenstwoczyprzesada"
},
  {
  id: 53,
  link: "/15-sierpnia-a-jedzenie-miesa-rozwiewamy-watpliwosci",
  img: "/15-sierpnia-a-jedzenie-miesa-rozwiewamy-watpliwosci.webp",
  title: "🥩 15 sierpnia a jedzenie mięsa – rozwiewamy wątpliwości",
  description: "15 sierpnia to święto Wniebowzięcia NMP. Wyjaśniamy, czy w ten dzień można jeść mięso, gdy wypada w piątek.",
  date: "2025-08-15",
  component: "Article15sierpniaajedzeniemiesarozwiewamywatpliwosci"
},
  {
  id: 52,
  link: "/mcdonalds-polska-ukarany-rekordowa-grzywna-4-mln-za-wyciek-danych-pracownikow",
  img: "/mcdonalds-polska-ukarany-rekordowa-grzywna-4-mln-za-wyciek-danych-pracownikow.webp",
  title: "⚠️ McDonald’s Polska ukarany rekordową grzywną – 4 mln € za wyciek danych pracowników",
  description: "Urząd Ochrony Danych Osobowych nałożył na McDonald’s Polska karę 4 mln € za ujawnienie danych pracowników w internecie. Analizujemy przyczyny, skutki i konsekwencje tej decyzji.",
  date: "2025-08-14",
  component: "Articlemcdonaldspolskaukaranyrekordowagrzywna4mlnzawyciekdanychpracownikow"
},
  {
  id: 51,
  link: "/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje",
  img: "/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje.webp",
  title: "🚨 Uczeń w rękach służb – nastolatek z Ukrainy zwerbowany przez Rosję",
  description: "Polska policja zatrzymała 17-letniego obywatela Ukrainy podejrzanego o planowany akt wandalizmu na zlecenie rosyjskich służb.",
  date: "2025-08-14",
  component: "Articleuczenwrekachsluzbnastolatekzukrainyzwerbowanyprzezrosje"
},
  {
  id: 50,
  link: "/alkoholowa-plaga-czy-polska-traci-kontrole-nad-narodowym-nalogiem",
  img: "/alkoholowa-plaga-czy-polska-traci-kontrole-nad-narodowym-nalogiem.webp",
  title: "🍺 Alkoholowa plaga – czy Polska traci kontrolę nad narodowym nałogiem?",
  description: "Polska ma drugie miejsce w UE pod względem zgonów spowodowanych alkoholem. Skala problemu, przyczyny i brak skutecznej reakcji państwa.",
  date: "2025-08-13",
  component: "Articlealkoholowaplagaczypolskatracikontrolenadnarodowymnalogiem"
},
  {
  id: 49,
  link: "/bron-w-rekach-obywateli-co-oznacza-lawinowy-wzrost-pozwolen-na-bron-w-polsce",
  img: "/bron-w-rekach-obywateli-co-oznacza-lawinowy-wzrost-pozwolen-na-bron-w-polsce.webp",
  title: "📈 Broń w rękach obywateli – co oznacza lawinowy wzrost pozwoleń na broń w Polsce?",
  description: "W Polsce od 2020 roku liczba pozwoleń na broń wzrosła czterokrotnie. Analiza przyczyn, skutków i możliwych scenariuszy.",
  date: "2025-08-13",
  component: "Articlebronwrekachobywatelicooznaczalawinowywzrostpozwolennabronwpolsce"
},
  {
  id: 48,
  link: "/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai",
  img: "/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai.webp",
  title: "🛑 Autonomiczna taksówka Baidu wpada do wykopu w Chongqingu – poważne pytania o bezpieczeństwo AI",
  description: "Awaria autonomicznej taksówki Baidu z pasażerką na pokładzie wywołała debatę o bezpieczeństwie robotaxi i konieczności zaostrzenia przepisów w Chinach.",
  date: "2025-08-12",
  component: "Articleautonomicznataksowkabaiduwpadadowykopuwchongqingupowaznepytaniaobezpieczenstwoai"
},
  {
  id: 47,
  link: "/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce",
  img: "/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce.webp",
  title: "📰 Ukraiński obywatel oskarżony o próbę zamachu paczką-bombą w Polsce",
  description: "ABW zatrzymała obywatela Ukrainy podejrzanego o wysłanie paczki-bomby. Grozi mu dożywocie. Trwają ustalenia motywów i powiązań.",
  date: "2025-08-11",
  component: "Articleukrainskiobywateloskarzonyoprobezamachupaczkabombawpolsce"
},
  {
  id: 46,
  link: "/kosiniak-kamysz-zelenski-powinien-dolaczyc-do-szczytu-trumpputin",
  img: "/kosiniak-kamysz-zelenski-powinien-dolaczyc-do-szczytu-trumpputin.webp",
  title: "📰 Kosiniak-Kamysz: Zełenski powinien dołączyć do szczytu Trump–Putin",
  description: "Kosiniak-Kamysz chce, by Zełenski dołączył do szczytu Trump–Putin. Ma to zagwarantować uwzględnienie interesów Ukrainy w rozmowach.",
  date: "2025-08-11",
  component: "Articlekosiniakkamyszzelenskipowiniendolaczycdoszczytutrumpputin"
},
  {
  id: 45,
  link: "/paca-minimalna-w-2026-roku-rzad-ujawnia-propozycje",
  img: "/paca-minimalna-w-2026-roku-rzad-ujawnia-propozycje.webp",
  title: "💰 Płaca minimalna w 2026 roku – rząd ujawnia propozycję",
  description: "Rząd zaproponował wzrost płacy minimalnej w Polsce od stycznia 2026 roku do 4 806 zł brutto miesięcznie oraz 31,40 zł brutto za godzinę. To podwyżka o 140 zł względem 2025 roku, która ma objąć setki tysięcy pracowników w całym kraju.",
  date: "2025-08-08",
  component: "Articlepacaminimalnaw2026rokurzadujawniapropozycje"
},
  {
  id: 44,
  link: "/masowy-stop-drive-dla-citroenow-kierowcy-bez-aut-serwisy-sparalizowane",
  img: "/masowy-stop-drive-dla-citroenow-kierowcy-bez-aut-serwisy-sparalizowane.webp",
  title: "🛑 Masowy „stop-drive” dla Citroënów – kierowcy bez aut, serwisy sparaliżowane",
  description: "Citroën wzywa właścicieli C3 i DS3 do natychmiastowego zaprzestania jazdy z powodu wadliwych poduszek Takata. Problem dotyczy setek tysięcy aut w Europie.",
  date: "2025-08-08",
  component: "Articlemasowystopdrivedlacitroenowkierowcybezautserwisysparalizowane"
},
  {
  id: 43,
  link: "/polska-rozwaza-przywrocenie-wiz-dla-ukraincow-powrot-granic-czy-koniecznosc",
  img: "/polska-rozwaza-przywrocenie-wiz-dla-ukraincow-powrot-granic-czy-koniecznosc.webp",
  title: "🛂 Polska rozważa przywrócenie wiz dla Ukraińców – powrót granic czy konieczność?",
  description: "Polski rząd analizuje możliwość przywrócenia obowiązku wizowego dla obywateli Ukrainy. Czy to decyzja podyktowana bezpieczeństwem i migracją, czy polityczny zwrot w relacjach między krajami?",
  date: "2025-08-07",
  component: "Articlepolskarozwazaprzywroceniewizdlaukraincowpowrotgranicczykoniecznosc"
},
  {
  id: 42,
  link: "/trzy-niedzwiedzie-do-odstrzau-ochrona-ludzi-czy-skandal-ekologiczny",
  img: "/trzy-niedzwiedzie-do-odstrzau-ochrona-ludzi-czy-skandal-ekologiczny.webp",
  title: "🐻 Trzy niedźwiedzie do odstrzału — ochrona ludzi czy skandal ekologiczny?",
  description: "Decyzja polskich władz o odstrzale trzech dzikich niedźwiedzi wywołała falę oburzenia wśród organizacji ekologicznych. Czy bezpieczeństwo ludzi usprawiedliwia eliminację zagrożonych gatunków? Oto szczegóły tej bulwersującej sprawy.",
  date: "2025-08-06",
  component: "Articletrzyniedzwiedziedoodstrzauochronaludziczyskandalekologiczny"
},
  {
  id: 41,
  link: "/moj-pies-pije-wode-z-kranu-hit-czy-obciach-weterynarze-podzieleni",
  img: "/moj-pies-pije-wode-z-kranu-hit-czy-obciach-weterynarze-podzieleni.webp",
  title: "🐶 Mój pies pije wodę z kranu – hit czy obciach? Weterynarze podzieleni",
  description: "Czy podawanie psu wody z kranu to przejaw odpowiedzialności, czy lekkomyślność? Weterynarze nie są zgodni, a właściciele dzielą się na dwa obozy. Oto fakty, mity i kontrowersje wokół kranówki dla zwierząt.",
  date: "2025-08-06",
  component: "Articlemojpiespijewodezkranuhitczyobciachweterynarzepodzieleni"
},
  {
  id: 40,
  link: "/80-lat-po-hiroszimie-swiat-znow-igra-z-ogniem-atomu",
  img: "/80-lat-po-hiroszimie-swiat-znow-igra-z-ogniem-atomu.webp",
  title: "🕯️ 80 lat po Hiroszimie – świat znów igra z ogniem atomu",
  description: "W 80. rocznicę zrzucenia bomby atomowej na Hiroszimę prezydent miasta Kazumi Matsui zaapelował o globalne rozbrojenie. W swoim przemówieniu odniósł się do zagrożeń nuklearnych we współczesnych konfliktach – od Ukrainy po Bliski Wschód.",
  date: "2025-08-06",
  component: "Article80latpohiroszimieswiatznowigrazogniematomu"
},
  {
  id: 39,
  link: "/polityczny-klincz-przed-zaprzysiezeniem-nawrocki-kontra-tusk",
  img: "/polityczny-klincz-przed-zaprzysiezeniem-nawrocki-kontra-tusk.webp",
  title: "⚰️ Polityczny klincz przed zaprzysiężeniem – Nawrocki kontra Tusk",
  description: "Nowo wybrany prezydent Karol Nawrocki ma zostać zaprzysiężony 6 sierpnia. Wszystko wskazuje na to, że już na starcie dojdzie do ostrego sporu z premierem Tuskiem. Polityczne napięcie może sparaliżować prace Sejmu i rządu.",
  date: "2025-08-05",
  component: "Articlepolitycznyklinczprzedzaprzysiezeniemnawrockikontratusk"
},
  {
  id: 38,
  link: "/trzesienie-ziemi-na-dolnym-slasku-polkowice-obudzi-wstrzas-o-312",
  img: "/trzesienie-ziemi-na-dolnym-slasku-polkowice-obudzi-wstrzas-o-312.webp",
  title: "🌍 Trzęsienie ziemi na Dolnym Śląsku – Polkowice obudził wstrząs o 3:12",
  description: "W nocy z 4 na 5 sierpnia doszło do trzęsienia ziemi w okolicach Polkowic. Magnituda wyniosła 3,0. Choć wstrząs był odczuwalny w regionie, nie odnotowano szkód ani poszkodowanych. To kolejny incydent sejsmiczny w tej części Dolnego Śląska.",
  date: "2025-08-05",
  component: "Articletrzesieniezieminadolnymslaskupolkowiceobudziwstrzaso312"
},
  {
  id: 37,
  link: "/fim-enduro-vintage-trophy-2025-klasyczne-motocykle-wracaja-na-szlaki-piekoszowa",
  img: "/fim-enduro-vintage-trophy-2025-klasyczne-motocykle-wracaja-na-szlaki-piekoszowa.webp",
  title: "🏍️ FIM Enduro Vintage Trophy 2025: klasyczne motocykle wracają na szlaki Piekoszowa",
  description: "Od 6 do 9 sierpnia 2025 roku Piekoszów gości 9. edycję FIM Enduro Vintage Trophy – prestiżowej imprezy dla fanów klasycznych motocykli terenowych. Udział biorą zawodnicy z całego świata, a wydarzeniu towarzyszy wyjątkowa retro atmosfera.",
  date: "2025-08-04",
  component: "Articlefimendurovintagetrophy2025klasycznemotocyklewracajanaszlakipiekoszowa"
},
  {
  id: 36,
  link: "/6-dni-pod-lupa-drogowki-ruszya-ogolnoeuropejska-akcja-roadpol",
  img: "/6-dni-pod-lupa-drogowki-ruszya-ogolnoeuropejska-akcja-roadpol.webp",
  title: "🚔 6 dni pod lupą drogówki – ruszyła ogólnoeuropejska akcja ROADPOL",
  description: "Rozpoczęła się szeroko zakrojona akcja kontrolna ROADPOL. W całej Europie, w tym w Polsce, przez sześć dni kierowcy będą sprawdzani pod kątem najpoważniejszych wykroczeń. Mandaty mogą sięgać nawet 5 000 zł. Sprawdź, czego się spodziewać na drogach.",
  date: "2025-08-04",
  component: "Article6dnipodlupadrogowkiruszyaogolnoeuropejskaakcjaroadpol"
},
  {
  id: 35,
  link: "/dziaka-to-nowe-mieszkanie-polacy-zmieniaja-styl-zycia-na-zielony",
  img: "/dziaka-to-nowe-mieszkanie-polacy-zmieniaja-styl-zycia-na-zielony.webp",
  title: "🪴 Działka to nowe mieszkanie? Polacy zmieniają styl życia na zielony",
  description: "Wzrost popularności działek rekreacyjnych w Polsce to nie chwilowa moda, lecz świadomy styl życia. Coraz więcej osób traktuje ROD jako miejsce pracy, odpoczynku i inwestycję. Co stoi za tym trendem i jakie są ograniczenia?",
  date: "2025-08-04",
  component: "Articledziakatonowemieszkaniepolacyzmieniajastylzycianazielony"
},
  {
  id: 34,
  link: "/100-tysiecy-ludzi-na-moscie-w-sydney-ogromny-protest-w-sprawie-gazy",
  img: "/100-tysiecy-ludzi-na-moscie-w-sydney-ogromny-protest-w-sprawie-gazy.webp",
  title: "🌉 100 tysięcy ludzi na moście w Sydney – ogromny protest w sprawie Gazy",
  description: "Ponad 100 tysięcy osób przemaszerowało dziś przez most Harbour Bridge w Sydney, domagając się zawieszenia broni w Strefie Gazy i zapewnienia pomocy humanitarnej. Protest odbył się mimo fatalnej pogody.",
  date: "2025-08-03",
  component: "Article100tysiecyludzinamosciewsydneyogromnyprotestwsprawiegazy"
},
{
  id: 33,
  link: "/hamas-publikuje-nagranie-zakadnika-przerazajace-wideo-porusza-swiat",
  img: "/hamas-publikuje-nagranie-zakadnika-przerazajace-wideo-porusza-swiat.webp",
  title: "🎥 Hamas publikuje nagranie zakładnika – przerażające wideo porusza świat",
  description: "Hamas opublikował kolejne szokujące nagranie z izraelskim zakładnikiem Evyatrem Davidem. Mężczyzna w skrajnym stanie fizycznym kopie grób i błaga o życie. Wideo wywołało międzynarodowe oburzenie i ponownie rozpaliło debatę o losie porwanych oraz warunkach w Strefie Gazy.",
  date: "2025-08-03",
  component: "Articlehamaspublikujenagraniezakadnikaprzerazajacewideoporuszaswiat"
},
  {
  id: 32,
  link: "/grozne-burze-i-upa-nad-polska-imgw-ostrzega-niemal-poowe-kraju",
  img: "/grozne-burze-i-upa-nad-polska-imgw-ostrzega-niemal-poowe-kraju.webp",
  title: "🌩️ Groźne burze i upał nad Polską – IMGW ostrzega niemal połowę kraju",
  description: "Instytut Meteorologii i Gospodarki Wodnej ostrzega przed silnymi burzami, intensywnym deszczem, gradem i upałem. Alerty obowiązują dziś w kilkunastu województwach – miejscami może dojść do podtopień.",
  date: "2025-08-03",
  component: "Articlegrozneburzeiupanadpolskaimgwostrzeganiemalpoowekraju"
},
  {
  id: 31,
  link: "/demolka-w-izbie-przyjec-w-sosnowcu-36-latek-wtargna-do-szpitala-i-zdewastowa-wnetrze",
  img: "/demolka-w-izbie-przyjec-w-sosnowcu-36-latek-wtargna-do-szpitala-i-zdewastowa-wnetrze.webp",
  title: "🧨 Demolka w izbie przyjęć w Sosnowcu – 36-latek wtargnął do szpitala i zdewastował wnętrze",
  description: "W izbie przyjęć Sosnowieckiego Szpitala Miejskiego doszło do aktu agresji – 36-letni mężczyzna wtargnął do środka i zdemolował pomieszczenie. Zatrzymany nie był pod wpływem alkoholu i nie figurował jako pacjent.",
  date: "2025-08-02",
  component: "Articledemolkawizbieprzyjecwsosnowcu36latekwtargnadoszpitalaizdewastowawnetrze"
},
  {
  id: 30,
  link: "/65-miliarda-dolarow-za-czogi-z-korei-czy-polska-zbroi-sie-na-powaznie",
  img: "/65-miliarda-dolarow-za-czogi-z-korei-czy-polska-zbroi-sie-na-powaznie.webp",
  title: "🛡️ 6,5 miliarda dolarów za czołgi z Korei – czy Polska zbroi się na poważnie?",
  description: "Polska podpisała ogromny kontrakt na zakup czołgów K2 z Korei Południowej. Czy inwestycje zbrojeniowe są odpowiedzią na realne zagrożenie, czy politycznym ruchem przed wyborami?",
  date: "2025-08-02",
  component: "Article65miliardadolarowzaczogizkoreiczypolskazbroisienapowaznie"
},
  {
  id: 29,
  link: "/800-tylko-dla-wybranych-wyciek-propozycji-reformy-oburzy-opinie-publiczna",
  img: "/800-tylko-dla-wybranych-wyciek-propozycji-reformy-oburzy-opinie-publiczna.webp",
  title: "🧨 800+ tylko dla wybranych? Wyciek propozycji reformy oburzył opinię publiczną",
  description: "Do mediów trafił przeciek projektu, który zakłada ograniczenie świadczenia Rodzina 800+ tylko dla rodzin spełniających określone kryteria. Pomysł wzbudził skrajne reakcje i wywołał falę komentarzy w sieci.",
  date: "2025-08-01",
  component: "Article800tylkodlawybranychwyciekpropozycjireformyoburzyopiniepubliczna"
},
{
  id: 28,
  link: "/bryan-adams-z-gwiazda-w-krakowie-tumy-fanow-i-wyprzedany-koncert",
  img: "/bryan-adams-z-gwiazda-w-krakowie-tumy-fanow-i-wyprzedany-koncert.webp",
  title: "🎸 Bryan Adams z gwiazdą w Krakowie! Tłumy fanów i wyprzedany koncert",
  description: "Legenda muzyki rockowej odsłoniła swoją gwiazdę pod Wawelem i zagrała w Tauron Arenie. Publiczność nie zawiodła, a emocje sięgnęły zenitu.",
  date: "2025-07-31",
  component: "Articlebryanadamszgwiazdawkrakowietumyfanowiwyprzedanykoncert"
},
{
  id: 27,
  link: "/ukrainski-w-kazdej-szkole-rzad-analizuje-kontrowersyjny-projekt-ustawy",
  img: "/ukrainski-w-kazdej-szkole-rzad-analizuje-kontrowersyjny-projekt-ustawy.webp",
  title: "📚 Ukraiński w każdej szkole? Rząd analizuje kontrowersyjny projekt ustawy",
  description: "W ramach nowej strategii integracyjnej Ministerstwo Edukacji rozważa naukę języka ukraińskiego jako obowiązkowego przedmiotu. Społeczeństwo jest podzielone.",
  date: "2025-07-31",
  component: "Articleukrainskiwkazdejszkolerzadanalizujekontrowersyjnyprojektustawy"
},
{
  id: 26,
  link: "/dramat-w-kirgistanie-pacjenci-umieraja-przez-brak-lekow",
  img: "/dramat-w-kirgistanie-pacjenci-umieraja-przez-brak-lekow.webp",
  title: "💊 Dramat w Kirgistanie – pacjenci umierają przez brak leków",
  description: "System zdrowia w Kirgistanie załamuje się pod ciężarem niedoborów leków. Chorzy walczą nie tylko z chorobą, ale i z państwową bezsilnością.",
  date: "2025-07-30",
  component: "Articledramatwkirgistaniepacjenciumierajaprzezbraklekow"
},
{
  id: 25,
  link: "/mauritius-pod-woda-ostrzezenie-przed-silnymi-falami-na-wybrzezu",
  img: "/mauritius-pod-woda-ostrzezenie-przed-silnymi-falami-na-wybrzezu.webp",
  title: "🌊 Mauritius pod wodą? Ostrzeżenie przed silnymi falami na wybrzeżu",
  description: "Mieszkańcy i turyści na Mauritiusie otrzymali pilne ostrzeżenie pogodowe. Służby apelują o unikanie plaż i zachowanie maksymalnej ostrożności.",
  date: "2025-07-30",
  component: "Articlemauritiuspodwodaostrzezenieprzedsilnymifalaminawybrzezu"
},
{
  id: 24,
  link: "/andrzej-duda-odebra-odznaczenie-jolancie-lange-powod-wspopraca-z-sb",
  img: "/andrzej-duda-odebra-odznaczenie-jolancie-lange-powod-wspopraca-z-sb.webp",
  title: "🎖️ Andrzej Duda odebrał odznaczenie Jolancie Lange – powód: współpraca z SB",
  description: "Prezydent RP unieważnił przyznanie Krzyża Zasługi znanej aktywistce. Powodem były ujawnione materiały dotyczące jej działalności agenturalnej w czasach PRL.",
  date: "2025-08-30",
  component: "Articleandrzejdudaodebraodznaczeniejolancielangepowodwspopracazsb"
},
{
  id: 23,
  link: "/laura-dahlmeier-nie-zyje-tragiczny-fina-wyprawy-w-karakorum",
  img: "/laura-dahlmeier-nie-zyje-tragiczny-fina-wyprawy-w-karakorum.webp",
  title: "🏔️ Laura Dahlmeier nie żyje – tragiczny finał wyprawy w Karakorum",
  description: "Po trzech dniach od wypadku wspinaczkowego potwierdzono śmierć niemieckiej mistrzyni olimpijskiej. Jej ciało pozostanie w górach – zgodnie z wolą sportowczyni.",
  date: "2025-07-30",
  component: "Articlelauradahlmeierniezyjetragicznyfinawyprawywkarakorum"
},
{
  id: 22,
  link: "/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi",
  img: "/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi.webp",
  title: "🆘 Tragedia w Dziwnówku: 16-latek zaginął w Bałtyku mimo czerwonej flagi",
  description: "Mimo wyraźnego zakazu kąpieli, dwóch nastolatków weszło do wzburzonego morza. Jeden z nich nie wrócił – trwają poszukiwania, a ratownicy walczą z żywiołem.",
  date: "2025-07-30",
  component: "Articletragediawdziwnowku16latekzaginawbatykumimoczerwonejflagi"
},
{
  id: 21,
  link: "/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci",
  img: "/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci.webp",
  title: "🚨 Tragiczny wypadek w Egipcie – zginęli polscy turyści",
  description: "Polska matka i dziecko zginęli w wypadku autokaru w okolicach Marsa Alam. Ministerstwo Spraw Zagranicznych potwierdza tragedię.",
  date: "2025-07-29",
  component: "Articletragicznywypadekwegipciezginelipolscyturysci"
},
{
  id: 20,
  link: "/tyrolskie-ograniczenia-moga-sparalizowac-transport-przez-alpy",
  img: "/tyrolskie-ograniczenia-moga-sparalizowac-transport-przez-alpy.webp",
  title: "🚛 Tyrolskie ograniczenia mogą sparaliżować transport przez Alpy",
  description: "Austria planuje roczny limit ciężarówek w Tyrolu. Zmiany mogą uderzyć w polskich przewoźników. Sprawdź szczegóły!",
  date: "2025-07-29",
  component: "Articletyrolskieograniczeniamogasparalizowactransportprzezalpy"
},
{
  id: 19,
  link: "/laura-dahlmeier-ciezko-ranna-po-wypadku-w-pakistanie-dramatyczna-akcja-ratunkowa-w-karakorum",
  img: "/laura-dahlmeier-ciezko-ranna-po-wypadku-w-pakistanie-dramatyczna-akcja-ratunkowa-w-karakorum.webp",
  title: "🧗 Laura Dahlmeier ciężko ranna po wypadku w Pakistanie – dramatyczna akcja ratunkowa w Karakorum",
  description: "Laura Dahlmeier doznała poważnych obrażeń podczas wyprawy wysokogórskiej w Karakorum. Trwa akcja ratunkowa, sytuacja jest dramatyczna.",
  date: "2025-07-29",
  component: "Articlelauradahlmeierciezkorannapowypadkuwpakistaniedramatycznaakcjaratunkowawkarakorum"
},

{
  id: 18,
  link: "/inpost-pod-ostrzaem-rekordowy-podatek-ekspansja-w-hiszpanii-i-bunt-kurierow",
  img: "/inpost-pod-ostrzaem-rekordowy-podatek-ekspansja-w-hiszpanii-i-bunt-kurierow.webp",
  title: "📦 InPost pod ostrzałem: rekordowy podatek, ekspansja w Hiszpanii i bunt kurierów",
  description: "InPost zapłacił rekordowy podatek i rozwija się w Hiszpanii, ale jednocześnie zmaga się z falą niezadowolenia wśród kurierów. Sprawdź szczegóły.",
  date: "2025-07-29",
  component: "Articleinpostpodostrzaemrekordowypodatekekspansjawhiszpaniiibuntkurierow"
},
{
  id: 17,
  link: "/prezydent-podnosi-wiek-emerytalny-podpis-zozony",
  img: "/prezydent-podnosi-wiek-emerytalny-podpis-zozony.webp",
  title: "💥 Prezydent podnosi wiek emerytalny! Podpis złożony",
  description: "Andrzej Duda podpisał ustawę zmieniającą górną granicę wieku emerytalnego. Nowe przepisy wzbudzają kontrowersje.",
  date: "2025-07-28",
  component: "Articleprezydentpodnosiwiekemerytalnypodpiszozony"
},
{
  id: 16,
  link: "/intel-rezygnuje-z-inwestycji-w-polsce-co-dalej-z-rynkiem-poprzewodnikow",
  img: "/intel-rezygnuje-z-inwestycji-w-polsce-co-dalej-z-rynkiem-poprzewodnikow.webp",
  title: "⚠️ Intel rezygnuje z inwestycji w Polsce – co dalej z rynkiem półprzewodników?",
  description: "Intel wycofuje się z wielomiliardowej inwestycji pod Wrocławiem. Powodem są globalne cięcia kosztów i zmiana strategii koncernu.",
  date: "2025-07-25",
  component: "Articleintelrezygnujezinwestycjiwpolscecodalejzrynkiempoprzewodnikow"
},
{
  id: 15,
  link: "/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji",
  img: "/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji.webp",
  title: "💥 Nowa tablica alimentacyjna. Ojciec z dwójką dzieci zostaje z niewielką częścią pensji!",
  description: "Ministerstwo wprowadza tablicę alimentacyjną. Przykład ojca z dwójką dzieci pokazuje, że po alimentach może mu zostać mniej niż 2500 zł miesięcznie. Zobacz szczegóły!",
  date: "2025-07-24",
  component: "Articlenowatablicaalimentacyjnaojcieczdwojkadziecizostajezniewielkaczesciapensji"
},
{
  id: 14,
  link: "/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami",
  img: "/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami.webp",
  title: "☠️ Ozzy Osbourne nie żyje – legenda rocka pożegnała się z fanami",
  description: "Ozzy Osbourne zmarł w wieku 76 lat. Ostatni koncert zagrał 5 lipca w Birmingham. Świat muzyki w żałobie.",
  date: "2025-07-23",
  component: "Articleozzyosbourneniezyjelegendarockapozegnaasiezfanami"
},
{
  id: 13,
  link: "/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci",
  img: "/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci.webp",
  title: "⚖️ Waldemar Żurek nowym faworytem do teki ministra sprawiedliwości?",
  description: "Waldemar Żurek może zastąpić Adama Bodnara na stanowisku ministra sprawiedliwości. Kim jest niezależny sędzia, który pojawił się w politycznych spekulacjach?",
  date: "2025-07-22",
  component: "Articlewaldemarzureknowymfaworytemdotekiministrasprawiedliwosci"
},
{
  id: 12,
  link: "/sinice-atakuja-batyk-plaze-zamkniete-gis-bije-na-alarm",
  img: "/sinice-atakuja-batyk-plaze-zamkniete-gis-bije-na-alarm.webp",
  title: "🌊 Sinice atakują Bałtyk! Plaże zamknięte, GIS bije na alarm",
  description: "Masowe zakwity sinic zamknęły dziesiątki kąpielisk nad Bałtykiem. GIS ostrzega: kontakt z wodą może być groźny dla zdrowia – zwłaszcza dla dzieci!",
  date: "2025-07-21",
  component: "Articlesiniceatakujabatykplazezamknietegisbijenaalarm"
},
{
  id: 11,
  link: "/usyk-znokautowa-duboisa-wembley-widziao-dominacje",
  img: "/usyk-znokautowa-duboisa-wembley-widziao-dominacje.webp",
  title: "💥 Usyk znokautował Duboisa! Wembley widziało dominację",
  description: "Oleksandr Usyk pokonał Daniela Dubois przez nokaut techniczny na Wembley, zdobywając tytuł niekwestionowanego mistrza świata wagi ciężkiej. Zobacz nagranie decydującego momentu!",
  date: "2025-07-20",
  component: "Articleusykznokautowaduboisawembleywidziaodominacje"
},
{
  id: 10,
  link: "/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej",
  img: "/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej.webp",
  title: "🔥 Usyk vs Dubois II. Dziś wieczorem walka o cztery pasy wagi ciężkiej!",
  description: "19 lipca 2025 na Wembley dojdzie do długo wyczekiwanego rewanżu: Oleksandr Usyk zmierzy się z Danielem Duboisem o niedyskusyjne mistrzostwo świata wagi ciężkiej. Emocje gwarantowane!",
  date: "2025-07-19",
  component: "Articleusykvsduboisiidziswieczoremwalkaoczterypasywagiciezkiej"
},
{
  id: 9,
  link: "/coldplay-i-korporacyjna-burza-kamera-uchwycia-ceo-i-szefowa-hr",
  img: "/coldplay-i-korporacyjna-burza-kamera-uchwycia-ceo-i-szefowa-hr.webp",
  title: "🎥 Coldplay i korporacyjna burza. Kamera uchwyciła CEO i szefową HR",
  description: "Podczas koncertu Coldplay w Monachium kamera pokazała Andy'ego Byrona, CEO firmy Astronomer, i Kristin Cabot, szefową działu HR. Ich obecność wywołała dyskusję o relacjach służbowych i etyce korporacyjnej.",
  date: "2025-07-18",
  component: "Articlecoldplayikorporacyjnaburzakamerauchwyciaceoiszefowahr"
},
{
  id: 8,
  link: "/jan-urban-nowym-selekcjonerem-reprezentacji-polski",
  img: "/jan-urban-nowym-selekcjonerem-reprezentacji-polski.webp",
  title: "⚽ Jan Urban nowym selekcjonerem reprezentacji Polski!",
  description: "Zaskoczenie w świecie futbolu: Jan Urban objął stanowisko selekcjonera reprezentacji Polski! Czy to nowy rozdział dla naszej kadry?",
  date: "2025-07-17",
  component: "Articlejanurbannowymselekcjoneremreprezentacjipolski"
},
{
  id: 7,
  link: "/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie",
  img: "/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie.webp",
  title: "Polski astronauta Sławosz Uznański bezpiecznie wrócił na Ziemię!",
  description: "Sławosz Uznański, uczestnik misji Axiom Mission 4, bezpiecznie wrócił na Ziemię po pobycie na Międzynarodowej Stacji Kosmicznej.",
  date: "2025-07-16",
  component: "Articlepolskiastronautasawoszuznanskibezpieczniewrocinaziemie"
},
{
  id: 6,
  link: "/panika-na-tomorrowland-scena-w-ogniu-ewakuacja-tysiecy-osob",
  img: "/panika-na-tomorrowland-scena-w-ogniu-ewakuacja-tysiecy-osob.webp",
  title: "🔥 Panika na Tomorrowland! Scena w ogniu, ewakuacja tysięcy osób",
  description: "Dramatyczne sceny na Tomorrowland – pożar na głównej scenie doprowadził do ewakuacji tysięcy uczestników.",
  date: "2025-07-15",
  component: "Articlepanikanatomorrowlandscenawogniuewakuacjatysiecyosob"
},
{
  id: 5,
  link: "/burze-paralizuja-polske-imgw-ostrzega-a-warszawa-tonie",
  img: "/burze-paralizuja-polske-imgw-ostrzega-a-warszawa-tonie.webp",
  title: "Burze paraliżują Polskę. IMGW ostrzega, a Warszawa tonie ⛈️",
  description: "Silne burze przetaczają się przez Polskę. Warszawa zalana, gradobicie na południu, chaos w komunikacji. IMGW wydaje ostrzeżenia.",
  date: "2025-07-14",
  component: "Articleburzeparalizujapolskeimgwostrzegaawarszawatonie"
},
{
  id: 4,
  link: "/prezydent-duda-w-ogniu-krytyki-po-wypowiedzi-o-nato",
  img: "/prezydent-duda-w-ogniu-krytyki-po-wypowiedzi-o-nato.webp",
  title: "🧸 Prezydent Duda w ogniu krytyki po wypowiedzi o NATO!",
  description: "Internauci ostro komentują słowa głowy państwa. 'To kompromitacja!' – Sprawdź szczegóły wypowiedzi prezydenta Andrzeja Dudy.",
  date: "2025-07-13",
  component: "Articleprezydentdudawogniukrytykipowypowiedzionato"
},
{
  id: 3,
  link: "/polska-wstrzymaa-schengen-co-sie-dzieje-na-granicach-z-niemcami-i-litwa",
  img: "/polska-wstrzymaa-schengen-co-sie-dzieje-na-granicach-z-niemcami-i-litwa.webp",
  title: "🚨 POLSKA WSTRZYMAŁA SCHENGEN! Co się dzieje na granicach z Niemcami i Litwą?",
  description: "Polska tymczasowo wprowadziła kontrole graniczne z Niemcami i Litwą. Sprawdź, co to oznacza dla podróżujących i jak reagują Berlin oraz UE.",
  date: "2025-07-12",
  component: "Articlepolskawstrzymaaschengencosiedziejenagranicachzniemcamiilitwa"
},
{
  id: 2,
  link: "/jo-sem-netoperek-mezczyzna-rozebra-sie-na-dachu-restauracji-hel-nie-zapomni-tej-nocy",
  img: "/jo-sem-netoperek-mezczyzna-rozebra-sie-na-dachu-restauracji-hel-nie-zapomni-tej-nocy.webp",
  title: "🦇 „Jo sem netoperek!” – Mężczyzna rozebrał się na dachu restauracji. Hel nie zapomni tej nocy",
  description: "Nietypowa scena w Helu: pijany mężczyzna krzyczał „Jo sem netoperek!” z dachu restauracji. Interweniowała policja i straż.",
  date: "2025-07-11",
  component: "Articlejosemnetoperekmezczyznarozebrasienadachurestauracjihelniezapomnitejnocy"
},
    {
  id: 1,
  link: "/jackowski-przewiduje-pozar-i-fale-uchodzcow-w-polsce",
  img: "/jackowski-przewiduje-pozar-i-fale-uchodzcow-w-polsce.webp",
  title: "🔥 Jackowski przewiduje pożar i falę uchodźców w Polsce!",
  description: "Zobacz, co zobaczył najpopularniejszy jasnowidz w Polsce…",
  date: "2025-07-10",
  component: "Articlejackowskiprzewidujepozarifaleuchodzcowwpolsce"
},
  ];

  export default articles;