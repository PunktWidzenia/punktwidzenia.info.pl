const articles = [
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