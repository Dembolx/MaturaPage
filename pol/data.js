// ================================================================
//  pol/data.js  –  Język Polski – pełna rozbudowana baza danych
// ================================================================

// ── EPOKI LITERACKIE (rozbudowane) ──────────────────────────────
const epokaData = [
  {
    name: "Antyk",
    dates: "VIII w. p.n.e. – V w. n.e.",
    color: "#f0c040",
    cechy: `Główne idee: harmonia (kalos kagathos – piękny i dobry), paideia (wychowanie przez sztukę),
    mimesis (naśladowanie natury), katharsis (oczyszczenie emocji przez tragedię).
    Gatunki: epopeja, tragedia, komedia, oda, elegia, epigramat, dialog filozoficzny.
    Filozofia: Sokrates (maieutyka), Platon (świat idei), Arystoteles (empiryzm, złoty środek).
    Religia: politeizm grecki i rzymski, mit jako wyjaśnienie świata.
    Architektura: porządki: dorycki, joński, koryncki. Świątynie, amfiteatry.`,
    autorzy:
      "Homer, Sofokles, Eurypides, Arystofanes, Platon, Arystoteles, Horacy, Wergiliusz, Owidiusz",
    lektury:
      "Iliada i Odyseja (Homer), Antygona/Król Edyp (Sofokles), Mitologia (Parandowski), Ody (Horacy)",
    pojecia:
      "hybris, nemezis, fatum, katharsis, mimesis, arete, kalokagatia, dike, paideia",
  },
  {
    name: "Średniowiecze",
    dates: "V – XV w.",
    color: "#aaaaaa",
    cechy: `Teocentryzm – Bóg w centrum wszechświata i kultury. Hierarchia stanowa: duchowieństwo,
    rycerstwo, chłopstwo. Uniwersalizm – łacina jako język kultury europejskiej.
    Ascetyzm – wyrzeczenie się dóbr materialnych na rzecz Boga. Alegoria – każdy element
    rzeczywistości ma znaczenie religijne. Gatunki: kronika, hagiografia (żywot świętego),
    pieśń religijna, epos rycerski, moralitet, misterium.
    Wzorce osobowe: święty (asceta), rycerz (miles christianus), władca (rex iustus).
    Architektura: romańska (grube mury, półkoliste łuki), gotycka (łuki ostre, witraże, strzeliste wieże).
    Motyw vanitas – przemijanie, danse macabre – taniec śmierci.`,
    autorzy:
      "Anonim (Gall), Jan Długosz, Wincenty Kadłubek, Dante Alighieri, Geoffrey Chaucer",
    lektury:
      "Lament świętokrzyski, Rozmowa Mistrza Polikarpa ze Śmiercią, Pieśń o Rolandzie, Bogurodzica",
    pojecia:
      "teocentryzm, universalizm, ascetyzm, danse macabre, vanitas, alegoria, hagiografia, miles christianus",
  },
  {
    name: "Renesans (Odrodzenie)",
    dates: "XIV – XVI w.",
    color: "#5ae0a0",
    cechy: `Humanizm – człowiek w centrum (antropocentryzm). Powrót do antyku (ad fontes).
    Carpe diem – korzystaj z chwili. Horacjańskie "złoty środek" (aurea mediocritas).
    Harmonia duszy i ciała. Reformacja (Luter, Kalwin) – krytyka Kościoła.
    Gatunki: sonet, fraszka, pieśń, tren, dramat szekspirowski (tragikomedia).
    Renesans polski = "złoty wiek" literatury polskiej. Kochanowski pisał po polsku i łacinie.
    Wynalazek druku (Gutenberg, ok. 1450) – rewolucja w obiegu wiedzy.
    Postawy: stoicyzm (spokój wobec losów), epikureizm (umiarkowana przyjemność).`,
    autorzy:
      "Jan Kochanowski, Mikołaj Rej, William Szekspir, Molier (bariera stylu), Erazm z Rotterdamu, Machiavelli",
    lektury: "Treny, Pieśni, Fraszki (Kochanowski), Makbet, Hamlet (Szekspir)",
    pojecia:
      "humanizm, antropocentryzm, carpe diem, aurea mediocritas, stoicyzm, epikureizm, reformacja",
  },
  {
    name: "Barok",
    dates: "koniec XVI – XVIII w.",
    color: "#e05a5a",
    cechy: `Kontrast i dynamika – sprzeczności: życie/śmierć, piękno/brzydota, niebo/piekło.
    Vanitas vanitatum – marność wszystkiego. Marinizm (od Marina) – wyszukane metafory, konceptyzm.
    Antyteza i oksymoron jako ulubione figury. Kontreformacja – Kościół odpowiada Reformacji.
    Teatralizacja życia (theatrum mundi). Barok literacki w Polsce: Morsztyn, Potocki, Pasek.
    Architektura: bogactwo zdobień, iluzjonizm, ruch, pathos – kościoły jezuickie.
    Muzyka: Bach, Vivaldi, Haendel. Malarstwo: Rubens, Rembrandt, Caravaggio.`,
    autorzy:
      "Jan Andrzej Morsztyn, Wacław Potocki, Jan Chryzostom Pasek, Blaise Pascal, Cervantes",
    lektury:
      'Sonet IV ("Do trupa"), Cuda (Morsztyn), Pan Tadeusz – liczne barokowe reminiscencje',
    pojecia:
      "vanitas, konceptyzm, marinizm, antyteza, oksymoron, theatrum mundi, kontreformacja",
  },
  {
    name: "Oświecenie",
    dates: "XVII – koniec XVIII w.",
    color: "#5a9cf0",
    cechy: `Racjonalizm – rozum jako najwyższe narzędzie poznania (Kartezjusz: cogito ergo sum).
    Empiryzm – wiedza pochodzi z doświadczenia (Locke, Hume). Encyklopedyzm (Diderot, d'Alembert).
    Krytyka absolutyzmu i Kościoła (Voltaire). Umowa społeczna (Rousseau, Locke, Hobbes).
    W Polsce: Stanisław August Poniatowski, Komisja Edukacji Narodowej (1773, pierwsza w Europie),
    Konstytucja 3 maja 1791. Satyra jako narzędzie naprawy obyczajów.
    Gatunki: satyra, bajka, powieść (Robinson Crusoe, Podróże Guliwera), komedia klasyczna.
    Klasycyzm – wzorowanie na antyku, ład, porządek, jasność.`,
    autorzy:
      "Ignacy Krasicki, Adam Naruszewicz, Julian Ursyn Niemcewicz, Voltaire, Rousseau, Locke",
    lektury:
      "Satyry (Krasicki): Żona modna, Pijaństwo, Do króla. Bajki (Krasicki).",
    pojecia:
      "racjonalizm, empiryzm, encyklopedyzm, umowa społeczna, klasycyzm, satyra, deizm",
  },
  {
    name: "Romantyzm",
    dates: "koniec XVIII – poł. XIX w.",
    color: "#b45af0",
    cechy: `Bunt przeciw racjonalizmowi oświecenia. Irracjonalizm – uczucie, intuicja, wiara ponad rozum.
    Bohater romantyczny: buntownik, samotnik, geniusz, patriota (prometeizm, bajronizm, faustyzm).
    Mesjanizm – idea zbawcza narodu (Polska = Chrystus narodów). Ludowość – wzorowanie na kulturze ludu.
    Historyzm – fascynacja przeszłością i legendą. Fantastyka – duchy, upiory, zjawiska nadnaturalne.
    Polski romantyzm zdominowany przez problematykę narodową (walka o niepodległość, trzy zabory).
    Pokolenie Mickiewicza, Słowackiego, Krasińskiego = "wieszczowie". Norwid = "czwarty wieszcz".
    Wielka emigracja po powstaniu listopadowym (1830–31).
    Gatunki: ballada, powieść poetycka, dramat romantyczny (niesceniczny), sonety.`,
    autorzy:
      "Adam Mickiewicz, Juliusz Słowacki, Zygmunt Krasiński, Cyprian Kamil Norwid, Byron, Goethe, Schiller",
    lektury:
      "Dziady II i III, Pan Tadeusz, Ballady, Romantyczność (Mickiewicz); Kordian (Słowacki)",
    pojecia:
      "mesjanizm, prometeizm, bajronizm, faustyzm, irracjonalizm, ludowość, wielka emigracja, wieszcz",
  },
  {
    name: "Pozytywizm",
    dates: "poł. XIX – koniec XIX w.",
    color: "#ff9f40",
    cechy: `Scjentyzm – nauka jako droga do postępu. Utylitaryzm (J.S. Mill) – maksymalizacja dobra społecznego.
    Praca organiczna – każdy pracuje dla dobra społeczeństwa jak narząd w organizmie.
    Praca u podstaw – edukacja i wychowanie najniższych warstw społecznych.
    Emancypacja kobiet (Orzeszkowa). Realizm – wierne odwzorowanie rzeczywistości.
    Naturalizm (Zola) – determinizm środowiskowy i biologiczny. Kronika – Prus w prasie warszawskiej.
    W Polsce: asymilacja Żydów, walka z rusyfikacją, motyw poświęcenia dla narodu.
    Powieść realistyczna jako dominujący gatunek. Lalka – encyklopedia Warszawy lat 80. XIX w.`,
    autorzy:
      "Bolesław Prus, Eliza Orzeszkowa, Henryk Sienkiewicz, Władysław Reymont, Émile Zola, Fiodor Dostojewski",
    lektury:
      "Lalka, Faraon (Prus), Nad Niemnem (Orzeszkowa), Potop, Quo vadis (Sienkiewicz), Zbrodnia i kara (Dostojewski)",
    pojecia:
      "scjentyzm, utylitaryzm, praca organiczna, praca u podstaw, realizm, naturalizm, determinizm",
  },
  {
    name: "Młoda Polska (Modernizm)",
    dates: "1890 – 1918",
    color: "#e05a5a",
    cechy: `Dekadentyzm – poczucie schyłku epoki, pesymizm, bierność (mal du siècle).
    Impresjonizm – uchwycenie ulotnych wrażeń, nastroju. Symbolizm – ukryte znaczenia (Verlaine, Mallarmé).
    Ekspresjonizm – silne przeżycia wewnętrzne. "Sztuka dla sztuki" (l'art pour l'art).
    Filozofia: Schopenhauer (wola jako źródło cierpienia), Nietzsche (nadczłowiek, przewartościowanie wartości),
    Bergson (intuicja, élan vital). Kazimiera Zawistowska, Tetmajer, Kasprowicz – różne postawy.
    Secesja (Art Nouveau) – organiczne motywy w sztuce i architekturze.
    Dramat symboliczny (Wyspiański), proza modernistyczna (Żeromski, Berent).`,
    autorzy:
      "Stanisław Wyspiański, Stefan Żeromski, Władysław Reymont, Kazimierz Przerwa-Tetmajer, Jan Kasprowicz, Leopold Staff",
    lektury:
      "Wesele, Wyzwolenie (Wyspiański), Przedwiośnie, Ludzie bezdomni (Żeromski), Chłopi (Reymont)",
    pojecia:
      "dekadentyzm, impresjonizm, symbolizm, ekspresjonizm, secesja, nietzscheizm, schopenhauryzm",
  },
  {
    name: "Dwudziestolecie międzywojenne",
    dates: "1918 – 1939",
    color: "#5ae0a0",
    cechy: `Wielka radość z odzyskanej niepodległości. Awangarda – zerwanie z tradycją: futuryzm, dadaizm,
    ekspresjonizm, nadrealizm (surrealizm). Skamander – ugrupowanie poetyckie (Tuwim, Staff, Lechoń,
    Wierzyński, Słonimski) – poezja codzienna, optymizm. Awangarda Krakowska (Peiper, Przyboś) –
    nowe formy, urbanizm. Katastrofizm lat 30. (Czechowicz, "Żagary") – przeczucie zagłady.
    Proza psychologiczna (Dąbrowska, Nałkowska). Groteska filozoficzna (Gombrowicz).
    Kabaret, jazz, kino nieme i dźwiękowe.`,
    autorzy:
      "Witold Gombrowicz, Julian Tuwim, Bolesław Leśmian, Bruno Schulz, Maria Dąbrowska, Zofia Nałkowska, Leopold Staff",
    lektury:
      "Ferdydurke (Gombrowicz), Sklepy cynamonowe (Schulz), Noce i dnie (Dąbrowska)",
    pojecia:
      "awangarda, futuryzm, Skamander, katastrofizm, surrealizm, groteskа, psychologizm",
  },
  {
    name: "Literatura po 1945",
    dates: "1945 – dziś",
    color: "#5a9cf0",
    cechy: `Literatura obozowa i wojenna – świadectwa Holokaustu i łagrów (Borowski, Herling-Grudziński).
    Socrealizm 1949–1956 – literatura na usługach partii. Odwilż 1956 – powrót do swobody twórczej.
    Teatr Absurdu (Beckett, Ionesco, Mrożek). Egzystencjalizm (Sartre, Camus, de Beauvoir).
    Nowa Fala (Barańczak, Herbert, Szymborska) – poezja zaangażowana, ironia wobec PRL.
    Postmodernizm – intertekstualność, gra z czytelnikiem. Reportaż artystyczny (Kapuściński).
    Proza środka europejskiego (Tokarczuk, Stasiuk). Nobel: Miłosz 1980, Szymborska 1996, Tokarczuk 2018.`,
    autorzy:
      "Tadeusz Borowski, Gustaw Herling-Grudziński, Czesław Miłosz, Wisława Szymborska, Zbigniew Herbert, Sławomir Mrożek, Ryszard Kapuściński, Olga Tokarczuk",
    lektury:
      "Proszę państwa do gazu, Inny świat, Dżuma (Camus), Rok 1984 (Orwell), Tango (Mrożek), Podróże z Herodotem (Kapuściński)",
    pojecia:
      "egzystencjalizm, literatura obozowa, socrealizm, Nowa Fala, postmodernizm, reportaż, teatr absurdu",
  },
];

// ── PISARZE (rozbudowana baza) ───────────────────────────────────
const pisarzeData = [
  {
    name: "Adam Mickiewicz",
    dates: "1798–1855",
    epoka: "Romantyzm",
    info: `Największy polski poeta romantyczny. Urodzony w Zaosiu na Nowogródczyźnie (dziś Białoruś).
    Studiował w Wilnie, gdzie zawiązał Towarzystwo Filomatów. Związek z Marylą Wereszczakówną
    (pierwowzór Marii z Dziadów) był źródłem licznych wierszy miłosnych. Wygnany za działalność
    patriotyczną w głąb Rosji (1824–29), gdzie poznał dekabrystów. Tworzył w Petersburgu, Dreźnie
    (Dziady III), Paryżu. Wykładał w Collège de France. Idee mesjanizmu – Polska jako Chrystus
    narodów. Uważany za najwybitniejszego poetę słowiańskiego. Zm. w Konstantynopolu, gdzie
    organizował legion do walki z Rosją.`,
    dziela: `Ballady i romanse (1822) – manifest romantyzmu polskiego.
    Dziady cz. II (1823) – obrzęd ludowy, duchy nieodpokutowane.
    Dziady cz. III (1832, Drezno) – dramat więzienno-martyrologiczny, Wielka Improwizacja, Widzenie ks. Piotra.
    Sonety krymskie (1826) – cykl 18 sonetów z podróży na Krym.
    Konrad Wallenrod (1828) – bohater podstępem niszczy wrogów.
    Pan Tadeusz (1834) – epopeja narodowa, "ostatni zajazd na Litwie".
    Romantyczność (1823) – wiersz programowy: czucie i wiara vs. rozum.`,
    motyw:
      "Mesjanizm, patriotyzm, miłość, natura, świat duchów, bunt prometejski",
  },
  {
    name: "Bolesław Prus",
    dates: "1847–1912",
    epoka: "Pozytywizm",
    info: `Właśc. Aleksander Głowacki. Kronikarz Warszawy – przez lata pisał cotygodniowe Kroniki
    dla prasy warszawskiej. Uczestnik powstania styczniowego (1863). Pozytywista z przekonania –
    wierzył w pracę organiczną i pracę u podstaw. Znakomity obserwator rzeczywistości społecznej.
    Lalka (1890) to jego arcydzieło – powieść uważana za najdoskonalszą polską powieść realistyczną.
    Miał skomplikowaną osobowość: nerwicę, poczucie absurdu (odzwierciedlone w Faraonie).`,
    dziela: `Lalka (1890) – historia miłości Wokulskiego do Izabeli Łęckiej, obraz Warszawy lat 80. XIX w.
    Faraon (1897) – powieść historyczna, walka faraona Ramzesa XIII z kapłanami.
    Placówka (1886) – obrona ziemi przez chłopa Ślimaka.
    Anielka, Katarynka, Kamizelka – nowele (Kamizelka: wzruszająca historia małżeństwa).
    Kroniki tygodniowe – publicystyka o Warszawie i społeczeństwie.`,
    motyw:
      "Miłość destrukcyjna, klasy społeczne, marzenia vs. rzeczywistość, praca i nauka, miasto",
  },
  {
    name: "Stanisław Wyspiański",
    dates: "1869–1907",
    epoka: "Młoda Polska",
    info: `"Czwarty wieszcz" polskiego romantyzmu. Artysta totalny – poeta, dramaturg, malarz, grafik,
    projektant wnętrz. Studiował malarstwo w Krakowie i Paryżu. Twórca witraży w kościele
    Franciszkanów w Krakowie (m.in. "Bóg Ojciec – Stań się"). Zmienił polską dramaturgie –
    porzucił realizm na rzecz symbolizmu i synteza sztuk. Inspirowany Ajschylosem, Szekspirem,
    romantycznymi wieszczami. Choroba (gruźlica) wykańczała go od lat. Zm. w wieku 38 lat.
    Wesele (1901) – napisane po wizycie na weselu Lucjana Rydla – to rozrachunek z polskim
    narodem, krytyka inteligencji i chłopstwa.`,
    dziela: `Wesele (1901) – dramat symboliczny, goście weselni i ich widma z przeszłości.
    Wyzwolenie (1903) – polemika z mesjanizmem, Konrad vs. "Polska".
    Klątwa (1899) – dramat o konflikcie między wiarą a winą.
    Akropolis (1904) – ożywienie figur z katedry wawelskiej.
    Noc listopadowa (1904) – dramat o powstaniu.
    Witraże w kościele Franciszkanów w Krakowie (dzieła plastyczne).`,
    motyw:
      "Marazm narodu, konflikt inteligencji z chłopstwem, symbolika historyczna, sztuka jako zbawienie",
  },
  {
    name: "Stefan Żeromski",
    dates: "1864–1925",
    epoka: "Młoda Polska",
    info: `"Sumienie literatury polskiej" – tak nazywano Żeromskiego za zaangażowanie społeczne.
    Syn ubogiej szlachty, obserwował nędzę ludu. Uczył dzieci chłopskie, był bibliotekarzem.
    Twórczość pełna empatii dla cierpiących. Styl impresjonistyczny, liryczne opisy natury.
    Przedwiośnie (1924) – jego ostatnia wielka powieść, rozrachunek z Polską po odzyskaniu
    niepodległości. Był nominowany do Nagrody Nobla.`,
    dziela: `Rozdzióbią nas kruki, wrony (1895) – nowela o klęsce powstania.
    Ludzie bezdomni (1899) – doktor Tomasz Judym poświęca szczęście osobiste dla chorych.
    Syzyfowe prace (1898) – rusyfikacja polskich dzieci w szkole.
    Przedwiośnie (1924) – losy Cezarego Baryki, wizje odbudowy Polski.
    Wierna rzeka (1912) – powstanie 1863, miłość polskiej szlachcianki do rannego powstańca.`,
    motyw:
      "Sprawiedliwość społeczna, poświęcenie, miłość a obowiązek, niepodległość, ideały vs. rzeczywistość",
  },
  {
    name: "Fiodor Dostojewski",
    dates: "1821–1881",
    epoka: "Realizm (Rosja)",
    info: `Jeden z największych pisarzy wszech czasów. Syn lekarza, wychowany w ubóstwie petersburskim.
    Skazany na śmierć (1849, za działalność rewolucyjną), ułaskawiony w ostatniej chwili –
    to doświadczenie graniczne ukształtowało całą jego filozofię. 4 lata katorgi w Omsku (Syberia).
    Epilepsja towarzyszyła mu całe życie. Pisał w nędzy, zadłużony. Jego powieści to dramaty
    psychologiczne i filozoficzne – poszukiwanie Boga, wina i odkupienie, cierpienie jako
    droga do zbawienia. Polemizował z nihilizmem i racjonalizmem.`,
    dziela: `Zbrodnia i kara (1866) – Raskolnikow zabija dla teorii; wyrzuty sumienia i odkupienie.
    Idiota (1869) – książę Myszkin jako "Chrystus naszych czasów".
    Biesy (1872) – analiza nihilizmu rewolucyjnego.
    Bracia Karamazow (1880) – pytanie o istnienie Boga, rodzina jako miniatura ludzkości.
    Gracz (1867) – nałóg hazardu, napisana w 26 dni pod presją finansową.
    Dom umarłych (1862) – wspomnienia z katorgi (wpływ na Inny świat Herlinga).`,
    motyw:
      "Wina i kara, odkupienie, pycha, wiara vs. ateizm, cierpienie, miłość agape, Petersburg",
  },
  {
    name: "William Szekspir",
    dates: "1564–1616",
    epoka: "Renesans (Anglia)",
    info: `Największy dramaturg wszech czasów. Urodzony w Stratford-upon-Avon. Aktor i współwłaściciel
    teatru Globe w Londynie. Napisał 37 sztuk i 154 sonety. Jego dramaty łączą tragizm z komizmem,
    filozofię z polityką. Badał naturę władzy, zazdrości, zemsty, miłości i lojalności.
    Makbet (1606) – powstał prawdopodobnie na cześć króla Jakuba I (zainteresowanego czarownicami).
    Język Szekspira stworzył wiele zwrotów, które weszły do angielskiego na stałe.`,
    dziela: `Makbet (1606) – ambicja i zbrodnia prowadzą do upadku.
    Hamlet (1601) – pytanie o sens zemsty, "być albo nie być".
    Romeo i Julia (1597) – tragedia miłosna, konflikt rodów.
    Otello (1603) – zazdrość niszczy miłość.
    Król Lear (1606) – starość, wdzięczność i zdrada.
    Burza (1611) – sztuka o magii, władzy i przebaczeniu.
    Sonety (154) – cykl poetycki o miłości i czasie.`,
    motyw:
      "Władza i korupcja, ambicja, zazdrość, zemsta, miłość, fatum vs. wolna wola, teatralność życia",
  },
  {
    name: "Albert Camus",
    dates: "1913–1960",
    epoka: "Egzystencjalizm/Absurdyzm (Francja)",
    info: `Urodzony w Algierii, w ubogiej rodzinie pied-noir (Francuz algierski). Filozofia absurdu:
    człowiek szuka sensu w świecie, który sensu nie ma – i musi zbuntować się, nie poddawać.
    "Trzeba wyobrazić sobie Syzyfa szczęśliwym." Nagroda Nobla 1957. Zginął w wypadku samochodowym
    w 1960. Dżuma (1947) – alegoria nazizmu i każdego totalitaryzmu, ale też każdego zła.
    Kluczowe pojęcia: absurd, bunt, solidarność, "człowiek buntownik".`,
    dziela: `Dżuma (1947) – epidemia jako alegoria zła; solidarność vs. ucieczka.
    Obcy (1942) – Meursault nie odczuwa emocji, zostaje skazany za "obojętność".
    Mit Syzyfa (1942) – esej filozoficzny o absurdzie istnienia.
    Bunt człowieka (1951) – filozofia buntu wobec niesprawiedliwości.
    Kaligula (1944) – dramat o władzy absolutnej.`,
    motyw:
      "Absurd, bunt, solidarność, śmierć, obojętność, sens istnienia, totalitaryzm",
  },
  {
    name: "George Orwell",
    dates: "1903–1950",
    epoka: "Dwudziestolecie/Współczesność (Anglia)",
    info: `Właśc. Eric Arthur Blair. Urodzony w Indiach (ojciec urzędnik kolonialny). Studiował w Eton,
    służył w policji kolonialnej w Birmie (skąd Birmańskie dni). Walczył w wojnie domowej w Hiszpanii
    po stronie republikanów – doświadczenia z totalitaryzmem faszystowskim i stalinowskim ukształtowały
    jego twórczość. Gruźlica towarzyszyła mu całe życie. Rok 1984 pisał umierając na wyspie Jura.
    Przepowiednia o społeczeństwie nadzoru, nowomowie i kontroli myśli.`,
    dziela: `Rok 1984 (1949) – Oceania, Wielki Brat, Ministerstwo Prawdy, Newspeak, Pokój 101.
    Folwark zwierzęcy (1945) – alegoria rewolucji bolszewickiej i stalinizmu.
    Birmańskie dni (1934) – krytyka kolonializmu.
    Na dnie w Paryżu i Londynie (1933) – reportaż o ubóstwie.
    Hołd dla Katalonii (1938) – relacja z wojny domowej w Hiszpanii.`,
    motyw:
      "Totalitaryzm, język jako narzędzie władzy, wolność myśli, nadzór, manipulacja historią",
  },
  {
    name: "Tadeusz Borowski",
    dates: "1922–1951",
    epoka: "Literatura powojenna (Polska)",
    info: `Urodzony w Żytomierzu, dorastał w Warszawie. Studiował filologię na tajnych kompletach.
    Debiutował tomikiem poezji (1942). Aresztowany przez Niemców (1943), więzień Auschwitz
    i Dachau. Po wojnie wrócił do pisania – opowiadania obozowe przyniosły mu natychmiastową sławę.
    Nihilistyczny realizm – narrator Tadek nie heroizuje, nie moralizuje. Zderzenie z realizmem
    socjalistycznym i rozczarowanie komunizmem doprowadziły do samobójstwa. Zm. w wieku 29 lat,
    3 dni po urodzeniu córki.`,
    dziela: `Proszę państwa do gazu (1948) – kluczowe opowiadanie obozowe.
    Pożegnanie z Marią (1948) – zbiór opowiadań, życie w Warszawie pod okupacją.
    U nas, w Auschwitzu (1946) – reportaż-opowiadanie z obozu.
    Gdziekolwiek ziemia (1942) – tom poezji.`,
    motyw:
      "Dehumanizacja, człowiek zlagrowany, mechanizm zbrodni, obojętność, przetrwanie",
  },
  {
    name: "Gustaw Herling-Grudziński",
    dates: "1919–2000",
    epoka: "Literatura powojenna (Polska)",
    info: `Więziony przez NKWD, przeszedł przez łagier w Jercewie (1940–1942). Uwolniony wraz
    z armią Andersa, walczył pod Monte Cassino. Po wojnie emigracja – żył w Neapolu, pisał
    dla emigracyjnej "Kultury" (Giedroycia). Inny świat (1951) – jedno z najważniejszych
    świadectw literatury łagrowej – poprzedza Sołżenicyna. Podtytuł: "Zapiski sowieckie".
    Pamiętnik pisany nocą – dziennik esej pisany przez 30 lat.`,
    dziela: `Inny świat (1951) – relacja z łagru sowieckiego, analiza mechanizmów zniewolenia.
    Pamiętnik pisany nocą (od 1971) – dziennik, eseje, opowiadania, refleksje.
    Skrzydła ołtarza (1960) – opowiadania o doświadczeniu granicznym.`,
    motyw:
      "Zniewolenie totalitarne, godność ludzka, przetrwanie, moralność w ekstremalnych warunkach",
  },
  {
    name: "Wisława Szymborska",
    dates: "1923–2012",
    epoka: "Literatura współczesna (Polska)",
    info: `Poetka, eseistka. Całe życie związana z Krakowem. Początkowo tworzyła w duchu socrealizmu,
    od lat 50. wypracowała własny, ironiczny styl. Nobel 1996 – "za poezję, która z ironiczną
    precyzją pozwala historycznemu i biologicznemu kontekstowi ujawnić się we fragmentach ludzkiej
    rzeczywistości". Nieduże tomy, rzadko pisała. Filozofia w codzienności, humor i paradoks.
    Znana z felietonów "Lektury nadobowiązkowe".`,
    dziela: `Nic dwa razy (1957) – "Nic dwa razy się nie zdarza / i nie zdarzy..."
    Rozmowa z kamieniem, Tarsjusz (z tomu Sól, 1962).
    Wielka liczba (1976) – refleksja nad statystyką i ludzkim losem.
    Ludzie na moście (1986) – wiersz o obrazie Hiroshige.
    Widok z ziarnkiem piasku (1996) – wybór wierszy nagrodzony Noblem.
    Tutaj (2009) – ostatni tom za życia poetki.`,
    motyw:
      "Ironia, paradoks, ulotność życia, codzienność, natura, historia, śmierć, piękno zwykłości",
  },
  {
    name: "Zbigniew Herbert",
    dates: "1924–1998",
    epoka: "Literatura współczesna (Polska)",
    info: `Poeta, eseista. Uczestnik AK (Armia Krajowa). Odmówił pisania w duchu socrealizmu –
    debiutował późno (1956). Pan Cogito – alter ego Herberta, myśliciel stawiający opór złu.
    Nawiązania do antyku i historii jako komentarz do współczesności. Etyka oporu i godności.
    Wielokrotnie nominowany do Nobla. Eseje z podróży (Barbarzyńca w ogrodzie, Martwa natura z wędzidłem).`,
    dziela: `Struna światła (1956) – debiut.
    Pan Cogito (1974) – kluczowy tom, "Przesłanie Pana Cogito".
    Barbarzyńca w ogrodzie (1962) – eseje o sztuce i historii.
    Raport z oblężonego miasta (1983) – o stanie wojennym.
    Przesłanie Pana Cogito: "idź wyprostowany wśród tych co na kolanach".`,
    motyw:
      "Godność, opór wobec zła, etyka, antyk jako wzorzec, historia jako lekcja, ironia intelektualna",
  },
  {
    name: "Sławomir Mrożek",
    dates: "1930–2013",
    epoka: "Literatura współczesna (Polska)",
    info: `Dramaturg, satyryk, rysownik. Twórca groteski politycznej i filozoficznej.
    Emigrował z PRL (1963), żył we Francji i Meksyku. Tango (1964) – jego największy sukces –
    wystawiane na całym świecie. Absurd jako narzędzie demaskowania totalitaryzmu, konformizmu,
    ludzkiej głupoty. Rysunki satyryczne w "Przekroju". Styl wyciszony, minimalistyczny.`,
    dziela: `Tango (1964) – konflikt pokoleń, bunt i jego pułapka, zwycięstwo brutalności.
    Policja (1958) – absurd systemu biurokratycznego.
    Słoń (1957) – zbiór opowiadań satyrycznych.
    Emigranci (1974) – dwóch Polaków za granicą, intelektualista i robotnik.
    Strip-tease (1961) – jednoaktówka, symbolika władzy i bierności.`,
    motyw:
      "Groteska, absurd, totalitaryzm, konformizm, konflikt pokoleń, władza, wolność",
  },
  {
    name: "Jan Kochanowski",
    dates: "1530–1584",
    epoka: "Renesans",
    info: `Największy poeta polskiego renesansu i jeden z najważniejszych w historii polskiej literatury.
    Studiował w Krakowie, Królewcu i Padwie. Powrócił do rodzinnego Czarnolasu (wieś), gdzie spędził
    dojrzałe lata. Tworzył po polsku i łacinie. Treny (1580) – po śmierci ukochanej córeczki Urszulki –
    to arcydzieło polskiej poezji funeralnej. Fraszki – liryczne miniaturki. Pieśni – oda do cnoty.`,
    dziela: `Treny (1580) – cykl 19 trenów po śmierci córki Urszulki; żałoba, zwątpienie, poszukiwanie sensu.
    Fraszki (1584) – epigramaty: "Na lipę", "Na zdrowie", "O żywocie ludzkim".
    Pieśni (1586) – pieśń "Czego chcesz od nas, Panie" (pieśń pochwalna), "Niezwykłym i nie leda piórem".
    Odprawa posłów greckich (1578) – pierwsza polska tragedia renesansowa.
    Psałterz Dawidów (1579) – parafraza psalmów.`,
    motyw:
      "Żałoba, przemijanie, stoicyzm, cnota, Bóg jako opatrzność, natura, mądrość",
  },
  {
    name: "Ryszard Kapuściński",
    dates: "1932–2007",
    epoka: "Literatura współczesna (Polska)",
    info: `Reportażysta, pisarz, poeta. Korespondent PAP w Afryce, Azji, Ameryce Łacińskiej –
    obserwował 27 rewolucji. Twórca literackiego reportażu: łączy dziennikarstwo z literaturą.
    Cesarz, Szachinszach, Heban – to nie tylko reportaże, ale dzieła literackie. Podróże z Herodotem
    to piękna refleksja o poznaniu Innego. Wielokrotnie nominowany do Nobla.`,
    dziela: `Cesarz (1978) – upadek Hajle Sellasjego, alegoria każdej dyktatury.
    Szachinszach (1982) – rewolucja irańska 1979.
    Heban (1998) – Afryka jako kontynent, zbiór reportaży.
    Podróże z Herodotem (2004) – refleksja nad podróżą, historią i poznaniem.
    Imperium (1993) – rozpad ZSRR.`,
    motyw:
      "Inność kulturowa, władza, rewolucja, podróż jako poznanie, dziennikarstwo i literatura",
  },
];

// ── PYTANIA JAWNE CKE (rozbudowane, pełne odpowiedzi) ───────────
const jawneData = [
  {
    num: 1,
    book: "Biblia (Księga Hioba)",
    priority: "high",
    q: "Motyw cierpienia niezawinionego. Omów zagadnienie na podstawie znanych Ci fragmentów Księgi Hioba. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – temat i kontekst lektury:</strong><br>
    Księga Hioba to jedna z najbardziej poruszających ksiąg Biblii, podejmująca fundamentalne pytanie
    filozofii i teologii: dlaczego cierpi człowiek niewinny? Problem ten – zwany theodiceum –
    zadawali sobie myśliciele od tysiącleci.<br><br>
    <strong>Charakterystyka Hioba i jego cierpienia:</strong><br>
    Hiob jest "człowiekiem doskonałym i prawym, bogobojnym i unikającym zła". Bóg pozwala szatanowi
    wypróbować jego wiarę – Hiob traci majątek, dzieci, zdrowie (pokrywa się wrzodami). Przyjaciele
    (Elifaz, Bildad, Sofar) przekonują, że cierpienie jest karą za grzechy – Hiob odrzuca ten argument,
    bo wie, że jest niewinny. Zwraca się wprost do Boga, żądając wyjaśnienia.<br><br>
    <strong>Postawa Hioba wobec cierpienia:</strong><br>
    Hiob nie przyjmuje cierpienia biernie – buntuje się, zadaje pytania, oskarża Boga o niesprawiedliwość.
    Mimo to nie wyrzeka się wiary: <em>"Pan dał, Pan wziął, niech będzie imię Pańskie błogosławione."</em>
    To wzorzec heroicznego cierpienia – protest połączony z zachowaniem wiary.<br><br>
    <strong>Rozwiązanie – Bóg odpowiada z wichru:</strong><br>
    Bóg pojawia się i przemawia do Hioba – ale nie daje logicznego wyjaśnienia cierpienia. Zamiast tego
    ukazuje swą potęgę i tajemnicę stworzenia: "Gdzie byłeś, gdy zakładałem ziemię?" Cierpienie
    pozostaje tajemnicą, ale Bóg nagradza Hioba za szczerość.<br><br>
    <strong>Kontekst – Dżuma Camusa:</strong><br>
    Camus w Dżumie podejmuje ten sam problem. Scena śmierci syna sędziego Othona jest dla księdza Paneloux
    i dla doktora Rieux najsilniejszym argumentem przeciw teodycei. Rieux – jak Hiob – buntuje się przeciw
    cierpieniu niewinnych. Jego bunt nie niszczy go – owszem, mobilizuje do działania. W tym sensie obaj
    bohaterowie reprezentują postawę czynnego oporu wobec zła.<br><br>
    <strong>Podsumowanie:</strong><br>
    Hiob to ponadczasowy wzorzec człowieka, który cierpi niezasłużenie, a mimo to zachowuje godność
    i wiarę. Pytanie o sens cierpienia pozostaje otwarte – ale literatura pokazuje, że odpowiedzią
    może być solidarność, działanie i miłość.`,
  },
  {
    num: 5,
    book: "Mitologia (Parandowski)",
    priority: "high",
    q: "Problematyka winy i kary. Omów zagadnienie na podstawie Mitologii Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – wina i kara jako porządek świata:</strong><br>
    W mitologii greckiej wina i kara stanowią fundament kosmicznego ładu (dike). Bogowie są strażnikami
    tego porządku – każde przestępstwo przeciw bogom lub ludziom zostaje ukarane. Kluczowym mechanizmem
    jest schemat: <strong>hybris → ate → nemezis</strong> (pycha → zaślepienie → kara).<br><br>
    <strong>Przykłady z Mitologii Parandowskiego:</strong><br>
    <em>Syzyf</em> – za oszustwo i podstęp wobec bogów (dwukrotnie uciekł ze śmierci) toczy kamień
    na szczyt góry na wieki. Jego kara jest symbolem absurdalnego, bezsensownego wysiłku bez nagrody
    (Camus uczynił z tego mit o człowieku buntującym się przeciw absurdowi).<br>
    <em>Tantalos</em> – za podanie bogom ciała własnego syna (Pelopsa) cierpi wieczny głód i pragnienie
    w Tartarze – "tantalizacja" (słowo weszło do języków europejskich).<br>
    <em>Edyp</em> – nieświadomie zabija ojca i poślubia matkę; gdy odkrywa prawdę, wykłuwa sobie oczy.
    Kara dotknęła go mimo braku świadomej winy – fatum jest nieodwołalne.<br>
    <em>Niobe</em> – z pychy wywyższała się ponad Latonę, twierdząc że ma więcej dzieci. Apollo i Artemida
    zabiją wszystkie jej dzieci, Niobe kamienieje z bólu.<br><br>
    <strong>Kontekst – Makbet Szekspira:</strong><br>
    Makbet popełnia serię zbrodni (morderstwo Dunkana, Banka, rodziny Makdufa) i płaci za nie
    psychiczną katastrofą (wizja sztyletu, duch Banka), obłędem Lady Makbet oraz śmiercią w końcowej
    bitwie. Szekspir, podobnie jak mitologia, pokazuje, że wina nieuchronnie niesie ze sobą karę –
    najpierw wewnętrzną (wyrzuty sumienia), potem zewnętrzną. Schemat jest identyczny: hybris →
    zbrodniacze czyny → nemezis.<br><br>
    <strong>Kontekst – Zbrodnia i kara Dostojewskiego:</strong><br>
    Raskolnikow konstruuje teorię, która ma go uwolnić od winy. Tymczasem kara (wyrzuty sumienia,
    gorączka, paranoja) zaczyna się natychmiast po zbrodni – wyprzedza wyrok sądowy. Dostojewski
    twierdzi, że człowiek nie może uciec od moralnej odpowiedzialności – podobnie jak bohaterowie mitów.<br><br>
    <strong>Podsumowanie:</strong><br>
    Mitologia, Szekspir i Dostojewski tworzą spójną tradycję: wina i kara są wpisane w ludzką kondycję.
    Hybris – pycha przekraczająca ludzką miarę – zawsze spotyka się z nemezis. To nie tylko prawo
    moralne, ale kosmiczny porządek, którego żaden człowiek nie jest w stanie przekroczyć bezkarnie.`,
  },
  {
    num: 8,
    book: "Sofokles, Antygona",
    priority: "high",
    q: "Prawa boskie a prawa ludzkie. Omów zagadnienie na podstawie Antygony Sofoklesa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – antyczny dylemat aktualny do dziś:</strong><br>
    Antygona Sofoklesa (442 p.n.e.) stawia pytanie, które do dziś nie straciło aktualności: czy prawo
    stanowione przez człowieka ma absolutne pierwszeństwo przed prawem moralnym, boskim, naturalnym?
    Konflikt Antygony z Kreonem to jeden z najbardziej dramatycznych sporów etycznych w historii literatury.<br><br>
    <strong>Sytuacja dramatyczna:</strong><br>
    Po wojnie siedmiu przeciw Tebom Kreon wydaje edykt: ciało Eteoklesa (obrońcy Teb) zostanie pogrzebane
    z honorami, ciało Polinejkesa (napastnika) zostanie wyrzucone psom bez pochówku. Antygona, siostra
    obu braci, pogrzebuje Polinejkesa. Kreon skazuje ją na śmierć.<br><br>
    <strong>Antygona – obrończyni prawa boskiego (physis):</strong><br>
    Antygona powołuje się na wieczne, niepisane prawa boskie (physis) – obowiązek pochówku jest święty
    i stoi ponad każdym edyktem. <em>"Nie sądziłam wcale, by twoje nakazy miały większą moc niż niepisane
    prawa bogów, niezmienne i wieczne."</em> Jej postawa to wybór sumienia ponad prawo stanowione,
    nawet za cenę życia.<br><br>
    <strong>Kreon – obrońca prawa ludzkiego (nomos):</strong><br>
    Kreon reprezentuje rację stanu i autorytet władzy: prawo króla musi być bezwzględnie przestrzegane,
    inaczej nastąpi anarchia. Ironicznie – jego nieustępliwość niszczy własną rodzinę (syn Hajmon,
    żona Eurydike giną).<br><br>
    <strong>Sofokles nie rozstrzyga:</strong><br>
    Sofokles z premedytacją nie wskazuje zwycięzcy. Oboje mają rację – i oboje płacą cenę za swoją rację.
    Tragizm polega na tym, że dwa równorzędne dobra (lojalność wobec bogów vs. porządek społeczny)
    wchodzą w niemożliwy do rozstrzygnięcia konflikt.<br><br>
    <strong>Kontekst – Rok 1984 Orwella:</strong><br>
    Winston Smith staje przed analogicznym dylematem: prawo Partii (nomos) nakazuje akceptować każde
    kłamstwo, ale jego wewnętrzne sumienie (physis) buntuje się. W przeciwieństwie do Antygony,
    Winston ulega – totalitaryzm niszczy nawet wewnętrzną wolność.<br><br>
    <strong>Kontekst – współczesna bioetyka i prawo:</strong><br>
    Spory o eutanazję, aborcję, prawo do odmowy leczenia religijnie motywowanej – to współczesne
    odsłony konfliktu Antygony i Kreona. Czy sumienie może być ważniejsze od litery prawa?<br><br>
    <strong>Podsumowanie:</strong><br>
    Antygona to ponadczasowy dramat o granicach posłuszeństwa wobec władzy. Prawo moralne (sumienie,
    prawo boskie) i prawo stanowione (nomos) mogą wchodzić w konflikt – i żadna siła nie może
    zagwarantować, że jeden porządek będzie zawsze słuszniejszy od drugiego.`,
  },
  {
    num: 13,
    book: "William Szekspir, Makbet",
    priority: "high",
    q: "Moralna odpowiedzialność za czyny. Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – kto odpowiada za czyn?</strong><br>
    Makbet to dramat o moralnej odpowiedzialności w najczystszej postaci. Szekspir konstruuje sytuację,
    w której bohater ma wszelkie wymówki (przepowiednia wiedźm, namowy żony, ambicja) – a mimo to
    ponosi pełną odpowiedzialność za swoje czyny.<br><br>
    <strong>Makbet jako tragiczny bohater:</strong><br>
    Na początku dramatu Makbet jest dzielnym, lojalnym generałem. Wiedźmy przepowiadają mu, że zostanie
    królem – ale nie mówią jak. To kluczowe: przepowiednia otwiera możliwość, nie nakazuje zbrodni.
    Makbet wybiera zabójstwo Dunkana sam. Lady Makbet namawia, ale Makbet wielokrotnie waha się
    i to on podejmuje ostateczną decyzję.<br><br>
    <strong>Mechanizm moralnej degradacji:</strong><br>
    Pierwsza zbrodnia (Dunkan) pociąga następne: Macduff (rodzina), Banka (duch). Makbet staje się
    tyranem nie z konieczności, ale z lęku. Szekspir pokazuje, że zło jest procesem – każdy następny
    krok jest łatwiejszy. To psychologicznie przenikliwa obserwacja.<br><br>
    <strong>Kara wewnętrzna – wyrzuty sumienia:</strong><br>
    Kara poprzedza wyrok sądu i egzekucję. Makbet widzi wizję sztyletu przed zbrodnią, duch Banka
    nawiedza go na uczcie, nie może spać. <em>"Makbet zabił sen."</em> Lady Makbet lunatykuje i powtarza
    "Plama, wciąż plama." Szekspir twierdzi, że sumienie jest niezniszczalne – możemy je uciszyć,
    ale nie zabić.<br><br>
    <strong>Kontekst – Zbrodnia i kara Dostojewskiego:</strong><br>
    Raskolnikow, podobnie jak Makbet, konstruuje teorię zwalniającą go z odpowiedzialności moralnej.
    Tymczasem kara zaczyna się od razu – wyrzuty sumienia, gorączka, paranoja. Dostojewski i Szekspir
    są zgodni: odpowiedzialność moralna jest immanentna w czynie, nie można przed nią uciec.<br><br>
    <strong>Kontekst – filozofia (Kant, Arystoteles):</strong><br>
    Arystoteles w Etyce Nikomachejskiej twierdzi, że czyny dobrowolne podlegają ocenie moralnej.
    Kant – imperatyw kategoryczny: postępuj tak, jakbyś chciał, żeby zasada twojego działania
    stała się powszechnym prawem. Makbet wiedział, że morderstwo króla łamie te zasady.<br><br>
    <strong>Podsumowanie:</strong><br>
    Makbet jest dowodem, że odpowiedzialność moralna nie może być delegowana na okoliczności zewnętrzne.
    Wiedźmy, żona, ambicja – wszystko to były czynniki, ale wybór był jego. I za ten wybór zapłacił
    życiem, spokojem sumienia i miłością żony. Szekspir tworzy dramat o wolnej woli i jej konsekwencjach.`,
  },
  {
    num: 22,
    book: "Adam Mickiewicz, Dziady III",
    priority: "high",
    q: "Mesjanizm jako romantyczna idea poświęcenia. Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – mesjanizm jako filozofia historii:</strong><br>
    Mesjanizm to romantyczna koncepcja, według której naród polski – przez swoje cierpienie pod zaborami –
    wypełnia misję zbawczą wobec Europy. Polska jest "Chrystusem narodów": ukrzyżowana (rozbiory),
    zmartwychwstanie (odzyskanie niepodległości) przyniesie wolność całej Europie. Mickiewicz sformułował
    tę ideę najpełniej w Dziadach III i w Księgach narodu polskiego i pielgrzymstwa polskiego.<br><br>
    <strong>Widzenie Księdza Piotra – alegoryczny obraz mesjanizmu:</strong><br>
    Ks. Piotr w modlitewnym uniesieniu widzi alegorię Polski jako Chrystusa. Polska (dziecię = Polska)
    jedzie na wóz (historia Europy) i jest wydana w ręce oprawców (carowie). Namiestnik – tajemnicza
    postać "czterdzieści i cztery" – to przyszły wyzwoliciel (mesjanistyczny bohater). Wizja jest
    pełna biblijnych paraleli: Pasja Chrystusa = cierpienie Polski.<br><br>
    <strong>Wielka Improwizacja – wyzwanie mesjanistyczne Konrada:</strong><br>
    Konrad w Wielkiej Improwizacji chce samemu spełnić rolę mesjasza – nie przez pokorę jak Chrystus,
    ale przez prometejski bunt. Żąda od Boga "rządu dusz" – władzy nad narodem. To pycha (hybris)
    romantycznego geniusza, który stawia się na równi z Bogiem. Bunt kończy się opętaniem przez złe duchy
    i koniecznością egzorcyzmu. Mickiewicz pokazuje, że mesjanizm przez pychę prowadzi do upadku.<br><br>
    <strong>Kontrast: Ks. Piotr – mesjanizm przez pokorę:</strong><br>
    Ksiądz Piotr uniża się przed Bogiem, przyjmuje wizję w całkowitej pokorze. To przeciwieństwo
    prometejskiego buntu Konrada. Mickiewicz gloryfikuje pokorę jako prawdziwą siłę duchową.<br><br>
    <strong>Kontekst – krytyka mesjanizmu (Norwid, Słowacki):</strong><br>
    Słowacki w "Grobie Agamemnona" i Norwid w późniejszej twórczości krytykowali mesjanizm jako
    bierność maskowaną cierpieniem. Słowacki pisał: "Lecz zaklinam – niech żywi nie tracą nadziei"
    – wezwanie do czynu, nie poddania się.<br><br>
    <strong>Kontekst – Biblia (Pasja Chrystusa):</strong><br>
    Paralela Polska–Chrystus opiera się na teologii ofiary: Chrystus cierpi niewinnie, by odkupić
    ludzkość. Polska cierpi niewinnie (podział przez sąsiadów bez własnej winy), by odkupić Europę
    od despotyzmu. Mickiewicz stosuje typologię biblijną – wzorzec z Pisma Świętego przeniesiony
    na historię narodu.<br><br>
    <strong>Podsumowanie:</strong><br>
    Mesjanizm w Dziadach III to głęboka, poetycka wizja sensu cierpienia narodowego. Polska jako
    "Chrystus narodów" nadaje cierpieniu wymiar sakralny i historyczny. Jednak Mickiewicz przestrzega:
    mesjanizm przez pychę (Konrad) prowadzi do klęski – prawdziwa siła leży w pokorze (ks. Piotr).
    Idea ta była wielką konsolacją dla emigrantów, ale też miała swoje niebezpieczne konsekwencje
    (usprawiedliwienie bierności wobec politycznych działań).`,
  },
  {
    num: 30,
    book: "Bolesław Prus, Lalka",
    priority: "high",
    q: "Miłość – siła destrukcyjna czy motywująca do działania? Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – miłość jako temat Lalki:</strong><br>
    Lalka Prusa to nie tylko powieść o miłości, ale przede wszystkim studium miłości obsesyjnej,
    która niszczy człowieka. Miłość Wokulskiego do Izabeli Łęckiej jest siłą napędową całej fabuły
    i jednocześnie źródłem tragedii głównego bohatera.<br><br>
    <strong>Wokulski – miłość jako motor działania:</strong><br>
    Stanisław Wokulski, samotnik i idealista, zakochuje się w Izabeli Łęckiej na balu. Miłość staje się
    dla niego celem życia. Dla niej buduje fortunę (handel z Rosją podczas wojny tureckiej), wraca do
    Warszawy, otwiera sklep, wchodzi w towarzystwo arystokratyczne. Miłość jest więc pozytywnym
    motorem – mobilizuje do gigantycznego wysiłku.<br><br>
    <strong>Miłość jako iluzja i destrukcja:</strong><br>
    Problem polega na tym, że Wokulski kocha nie prawdziwą Izabelę, lecz swój ideał – kobiety pięknej,
    arystokratycznej, niedostępnej. Ignoruje wszystkie sygnały: jej płytkość, wyrachowanie, pogardę
    dla "kupczyka". Gdy iluzja pryska (Izabela flirtuje z baronem Krzeszowskim), Wokulski popada
    w depresję. Znika bez wieści – prawdopodobnie ginie lub emigruje na zawsze.<br><br>
    <strong>Rzecki – miłość do ideałów:</strong><br>
    Kontrast stanowi Ignacy Rzecki, który kocha ideały (Napoleon, przyjaźń z Wokulskim, dawny ład).
    Ta miłość jest smutna – ideały odchodzą – ale nie niszczy człowieka tak jak obsesja Wokulskiego.<br><br>
    <strong>Izabela – niezdolność do miłości:</strong><br>
    Izabela Łęcka jest wychowana w przekonaniu, że mężczyźni są narzędziami do osiągania celów.
    Nie jest zdolna do prawdziwej miłości – tylko do gry towarzyskiej. To tragedii Wokulskiego
    dopełnienie: kocha kogoś, kto nie potrafi kochać.<br><br>
    <strong>Kontekst – Mitologia (Orfeusz i Eurydyka):</strong><br>
    Mit o Orfeuszu pokazuje miłość silniejszą niż śmierć – ale też jej pułapkę: Orfeusz odwraca się
    i traci Eurydykę. Zbyt wielka miłość, zbyt wielka obsesja prowadzi do katastrofy. Wokulski,
    jak Orfeusz, idzie za swoją miłością do granic możliwości – i traci wszystko.<br><br>
    <strong>Kontekst – Makbet (Lady Makbet):</strong><br>
    Lady Makbet ilustruje miłość jako siłę destrukcyjną w innym sensie: jej ambicja (nie miłość)
    niszczy zarówno ją samą, jak i Makbeta. Ale motyw miłości obsesyjnej, która deformuje człowieka,
    łączy oba dzieła.<br><br>
    <strong>Podsumowanie:</strong><br>
    Prus ukazuje dwie twarze miłości. Miłość może mobilizować do wielkich czynów (Wokulski buduje
    fortunę), ale jeśli opiera się na iluzji i obsesji – niszczy. Prawdziwa miłość (jak u Rzeckiego)
    jest smutna, ale nie destrukcyjna. Lalka jest ostrzeżeniem: idealizacja ukochanej osoby jest
    formą narcyzmu, a nie miłości.`,
  },
  {
    num: 56,
    book: "Tadeusz Borowski, Proszę państwa do gazu",
    priority: "high",
    q: '"Człowiek zlagrowany" jako ofiara zbrodniczego systemu. Omów zagadnienie na podstawie opowiadania Borowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.',
    ans: `<strong>Wstęp – literatura obozowa jako świadectwo:</strong><br>
    Tadeusz Borowski był więźniem Auschwitz-Birkenau. Jego opowiadania obozowe z 1948 roku są
    wstrząsającym dokumentem dehumanizacji – i jednocześnie arcydziełem literackim. Narrator –
    Tadek – to sam Borowski, a jednocześnie postać literacka: obiektywny obserwator własnego upadku.<br><br>
    <strong>"Człowiek zlagrowany" – definicja i mechanizm:</strong><br>
    "Człowiek zlagrowany" to pojęcie sformułowane przez samego Borowskiego (i przez krytykę).
    Oznacza człowieka, którego obóz zdeformował psychicznie i moralnie – nie ze złej woli jednostki,
    lecz z konieczności przetrwania. System obozowy był zaprojektowany tak, aby każdego więźnia
    uczynić współwinnym mechanizmu Zagłady – przez pracę przy selekcji, by z racji funkcji
    (kapo, blokowy) uczestniczył w represjonowaniu innych.<br><br>
    <strong>Tadek – narrator bez emocji:</strong><br>
    Tadek w "Proszę państwa do gazu" pomaga rozładowywać transporty skazanych na śmierć. Mówi
    o tym spokojnie, bez emocji. Okazuje emocje tylko raz – gdy widuje Francuzkę, która udaje,
    że nie widzi swojego dziecka (bo to ocalałoby jej życie). Łkanie Tadka jest jedynym momentem
    humanizmu w tekście – i tym bardziej wstrząsającym kontrastem z resztą.<br><br>
    <strong>Nihilizm a obwinianie systemu, nie jednostki:</strong><br>
    Borowski celowo odmawia oceny moralnej postaw więźniów – bo ocena zakłada wolność wyboru,
    której w obozie prawie nie było. "Człowiek zlagrowany" nie jest winny tak, jak winny jest
    kat z wolności – jest ofiarą systemu, który z ludzi uczynił narzędzia. To zasadnicza różnica
    od romantycznego heroizmu: Borowski nie pisze o bohaterach, pisze o przetrwaniu.<br><br>
    <strong>Kontekst – Inny świat Herlinga-Grudzińskiego:</strong><br>
    Herling-Grudziński w łagrze sowieckim obserwuje podobne mechanizmy – kolaboracja lub opór,
    ale zawsze w warunkach ekstremalnego zniewolenia. Kostylew, który odmawia pracy kosztem życia,
    to przykład zachowania godności – rzadkości w systemie zaprojektowanym tak, by godność zniszczyć.<br><br>
    <strong>Kontekst – Hannah Arendt ("banalność zła"):</strong><br>
    Arendt w "Eichmannie w Jerozolimie" (1963) opisuje "banalność zła" – Adolf Eichmann był
    biurokratą realizującym rozkazy, nie sadystą. Podobnie strażnicy SS w opowiadaniach Borowskiego
    to nie potwory, lecz ludzie wykonujący "pracę". System zbrodni nie wymaga potworów – wymaga
    banalnych wykonawców. To najstraszniejsza lekcja obu autorów.<br><br>
    <strong>Podsumowanie:</strong><br>
    Borowski tworzy literacki portret człowieka zredukowanego do instynktu przetrwania przez
    zbrodniczy system. "Człowiek zlagrowany" nie jest winny moralnie – jest ofiarą. Borowski
    obwinia system (nazizm, totalitaryzm), nie jednostkę. To radykalnie inne stanowisko niż
    romantyczny heroizm – i właśnie dlatego literatura obozowa Borowskiego jest tak trudna
    i tak ważna.`,
  },
  {
    num: 66,
    book: "George Orwell, Rok 1984",
    priority: "high",
    q: "Czy możliwe jest zbudowanie doskonałego państwa? Omów zagadnienie na podstawie Roku 1984 Orwella. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – utopia i jej granice:</strong><br>
    Człowiek od tysiącleci marzył o doskonałym państwie. Platon opisał je w "Republice", Tomasz Morus
    w "Utopii" (1516 – stąd słowo). Rok 1984 (1949) Orwella jest odpowiedzią na te marzenia –
    bezlitosną, przerażającą odpowiedzią. Oceania jest państwem doskonałym tylko z perspektywy
    tych, którzy sprawują władzę – dla obywateli jest piekłem.<br><br>
    <strong>Anatomia totalitaryzmu w Roku 1984:</strong><br>
    Orwell opisuje Oceanię jako państwo oparte na:<br>
    – <em>Teleekranach</em> – permanentnym nadzorze, który wnika w każdą przestrzeń prywatną.<br>
    – <em>Policji Myśli</em> – która ściga nawet "zbrodnie myśli" (Thoughtcrime).<br>
    – <em>Nowomowie (Newspeak)</em> – języku zaprojektowanym tak, by pewne myśli stały się niemożliwe.<br>
    – <em>Fałszowaniu historii</em> – Ministerstwo Prawdy przepisuje przeszłość codziennie.<br>
    – <em>Doublethink</em> – zdolności wierzenia jednocześnie w dwie sprzeczne prawdy.<br><br>
    <strong>Cel władzy – władza dla władzy:</strong><br>
    O'Brien wyjaśnia Winstonowi: "Władza nie jest środkiem – jest celem samym w sobie." Partia nie
    dąży do szczęścia, dobrobytu, sprawiedliwości – dąży do zachowania władzy na zawsze. To radykalne
    odejście od każdej utopii: dotychczasowe totalitaryzmy legitymizowały się jakimś wyższym celem
    (komunizm twierdził, że buduje raj na ziemi). Partia u Orwella tego nawet nie udaje.<br><br>
    <strong>Zagłada jednostki:</strong><br>
    Winston Smith próbuje zachować wolność (pamiętnik, miłość do Julii, wiara w Braterstwo).
    Wszystko to zostaje zniszczone. Pokój 101 – konfrontacja z największym strachem – łamie Winstona
    całkowicie. Finał: "Kochał Wielkiego Brata." Orwell pokazuje, że totalitaryzm doskonały jest
    możliwy – ale tylko przez unicestwienie człowieczeństwa.<br><br>
    <strong>Kontekst – Przedwiośnie Żeromskiego (szklane domy):</strong><br>
    Serafin Baryka marzy o Polsce szklanej – czystej, sprawiedliwej, nowoczesnej. To utopia pozytywna,
    naiwna. Żeromski pokazuje, że szklane domy są tylko marzeniem, które rozbija się o brutalną
    rzeczywistość. Orwell idzie dalej: każda utopia realizowana przez przemoc staje się dystopią.<br><br>
    <strong>Kontekst – historia (komunizm, nazizm):</strong><br>
    Orwell pisał Rok 1984 z pełną świadomością stalinizmu (był w Hiszpanii i widział, jak stalinowcy
    niszczyli innych rewolucjonistów). ZSRR, nazistowskie Niemcy – obie próby "doskonałego państwa"
    okazały się piekłem dla obywateli. Historia XX wieku jest dowodem, że władza totalna jest
    z natury antyludzka.<br><br>
    <strong>Podsumowanie:</strong><br>
    Orwell odpowiada: doskonałe państwo jest niemożliwe, bo "doskonałość" w polityce oznacza
    zniesienie wolności, a bez wolności nie ma człowieczeństwa. Oceania jest doskonałym państwem
    z perspektywy władzy – i tym właśnie jest tak przerażająca. Rok 1984 to ostrzeżenie, które
    zachowuje aktualność: każda władza dążąca do absolutnej kontroli niszczy to, co chroni.`,
  },
  {
    num: 55,
    book: "Witold Gombrowicz, Ferdydurke",
    priority: "high",
    q: "Człowiek wobec presji otoczenia. Omów zagadnienie na podstawie fragmentów Ferdydurke Gombrowicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
    ans: `<strong>Wstęp – "forma" u Gombrowicza:</strong><br>
    Ferdydurke (1937) to jedna z najbardziej oryginalnych polskich powieści XX wieku. Gombrowicz
    diagnozuje fundamentalny problem ludzkiej egzystencji: niemożliwość autentyczności w świecie,
    gdzie każda relacja z drugim człowiekiem narzuca nam "formę" – rolę, maskę, wzorzec zachowania.<br><br>
    <strong>Fabuła jako filozofia – "upupienie":</strong><br>
    Józio – narrator, 30-letni mężczyzna – zostaje przez profesora Pimkę "upupiony" – zmuszony do
    roli ucznia w szkole. "Upupienie" to metafora narzucania formy wbrew woli jednostki. W szkole
    Józio musi odgrywać rolę "ucznia", w domu nowoczesnym – rolę "nowoczesnego młodego człowieka",
    u stryja Hurleckiego na wsi – rolę "szlachcica". Każde środowisko ma swoją formę, którą na
    niego nakłada.<br><br>
    <strong>Gęba, łydka, pupcia – alegorie formy:</strong><br>
    Słynne "gęby" i "pałałowanie się" to groteskowy obraz walki o narzucenie formy drugiemu.
    "Gęba" to twarz-maska, którą nam przykładają inni. "Łydka" to fragment ciała fetyszyzowany
    (przez profesora Bladaczkę i Syfona) – symbol absurdu społecznych ideałów.<br><br>
    <strong>Diagnoza Gombrowicza – autentyczność jest niemożliwa:</strong><br>
    Gombrowicz pyta: czy można być sobą? Jego odpowiedź jest pesymistyczna: człowiek jest zawsze
    kształtowany przez spojrzenie innych (Sartre: "Piekło to inni"). Każda próba zerwania z formą
    tworzy nową formę. Józio ucieka z każdego środowiska – ale wciąż jest zdefiniowany przez to,
    od czego ucieka.<br><br>
    <strong>Kontekst – Rok 1984 (presja Partii):</strong><br>
    W Roku 1984 forma narzucana jest przez totalitarny system: obywatel musi myśleć, czuć i zachowywać
    się w sposób zatwierdzony przez Partię. To skrajna wersja "upupienia" – Gombrowicz opisuje presję
    społeczną, Orwell – presję państwową. Oba mechanizmy niszczą autentyczność.<br><br>
    <strong>Kontekst – psychologia (Milgram, Asch):</strong><br>
    Eksperymenty psychologiczne potwierdzają intuicje Gombrowicza: większość ludzi podporządkowuje się
    presji grupy (Asch) lub autorytetu (Milgram), nawet wbrew własnym przekonaniom. Konformizm
    jest głęboko zakorzeniony w ludzkiej naturze – i właśnie to Gombrowicz czyni tematem swojej
    groteskowej powieści.<br><br>
    <strong>Podsumowanie:</strong><br>
    Gombrowicz tworzy filozoficzną groteskę o niemożliwości autentyczności. Człowiek jest zawsze
    pod presją otoczenia, które narzuca mu formy – społeczne, kulturowe, generacyjne. Jedyną odpowiedzią
    może być świadomość tej presji i ironiczny dystans wobec wszelkich form – nigdy jednak ich
    całkowite uniknięcie.`,
  },
];

// ── QUIZ ────────────────────────────────────────────────────────
const plQuizData = [
  {
    type: "abcd",
    q: "Kim jest narrator w Lalce Prusa?",
    options: [
      "A) Wyłącznie Wokulski w 1. osobie",
      "B) Narrator auktorialny (3-os.) + pamiętnik Rzeckiego",
      "C) Izabela Łęcka",
      "D) Narrator 1-os. – Rzecki przez całą powieść",
    ],
    correct: 1,
    exp: "Dwie warstwy narracyjne: obiektywny narrator auktorialny opisuje teraźniejszość, subiektywny pamiętnik Rzeckiego wprowadza narrację retrospektywną.",
  },
  {
    type: "abcd",
    q: "Czym jest chocholi taniec w Weselu Wyspiańskiego?",
    options: [
      "A) Radosną sceną weselną zamykającą dramat",
      "B) Symbolem marazmu, niemocy i zaśpienia narodu polskiego",
      "C) Tańcem śmierci nawiązującym do danse macabre",
      "D) Metaforą buntu chłopskiego przeciw szlachcie",
    ],
    correct: 1,
    exp: "Chocholi taniec zamykający dramat symbolizuje zaśpienie narodu, niemożność czynu wyzwoleńczego. Chochoł – słomiany okrywacz krzewu róży – symbolizuje drzemiące siły narodu.",
  },
  {
    type: "abcd",
    q: "Co symbolizuje Wielka Improwizacja Konrada w Dziadach III?",
    options: [
      "A) Pokorne przyjęcie cierpienia narodowego",
      "B) Romantyczny bunt prometejski – Konrad żąda od Boga władzy nad duszami dla zbawienia narodu",
      "C) Zawarcie paktu z diabłem dla ocalenia Polski",
      "D) Modlitwę o cuda i interwencję Bożą",
    ],
    correct: 1,
    exp: "Konrad buntuje się jak Prometeusz – żąda 'rządu dusz', chce zostać zbawicielem narodu bez pośrednictwa Boga. To szczyt romantycznego indywidualizmu i pychy.",
  },
  {
    type: "abcd",
    q: "Kto stworzył pojęcie 'człowiek zlagrowany'?",
    options: [
      "A) Gustaw Herling-Grudziński",
      "B) Ryszard Kapuściński",
      "C) Tadeusz Borowski",
      "D) Hanna Krall",
    ],
    correct: 2,
    exp: "Borowski w opowiadaniach obozowych opisał człowieka zdehumanizowanego przez system obozowy, który dla przetrwania porzuca normy moralne. Termin ten stosuje krytyka literacka.",
  },
  {
    type: "abcd",
    q: "Co to jest hybris w tragedii greckiej?",
    options: [
      "A) Boska mądrość objawiająca się bohaterowi",
      "B) Nieodwołalne fatum zapisane w gwiazdach",
      "C) Pycha i zarozumiałość przekraczająca ludzką miarę, prowadząca do upadku",
      "D) Ofiara składana bogom przed bitwą",
    ],
    correct: 2,
    exp: "Hybris (gr. ὕβρις) = pycha, zarozumiałość, przekroczenie granic wyznaczonych przez bogów. Schemat: hybris → ate (zaślepienie) → nemezis (kara boska). Edyp, Makbet, Tantalos.",
  },
  {
    type: "abcd",
    q: "Kim jest Sonia Marmieładowa w Zbrodni i karze Dostojewskiego?",
    options: [
      "A) Córką Raskolnikowa, która go denuncjuje",
      "B) Agentką policyjną, która go śledzi",
      "C) Prostytutką żyjącą z wiary, która przez miłość prowadzi Raskolnikowa do nawrócenia",
      "D) Siostrą Raskolnikowa, która próbuje go uratować",
    ],
    correct: 2,
    exp: "Sonia to symbol chrześcijańskiej miłości (agape) i miłosierdzia. Mimo upodlenia zachowuje wiarę. Idzie za Raskolnikowem na Syberię – jej miłość jest katalizatorem jego przemiany.",
  },
  {
    type: "abcd",
    q: "Jaką postawę wobec wiedzy i uczucia reprezentuje Starzec w wierszu Romantyczność Mickiewicza?",
    options: [
      "A) Romantyczną wiarę w duchy i uczucie ponad rozumem",
      "B) Racjonalizm i empiryzm oświeceniowy – 'mierz siłą i wagą'",
      "C) Chrześcijański mistycyzm i pobożność",
      "D) Nihilizm i brak wiary w cokolwiek",
    ],
    correct: 1,
    exp: "Starzec (utożsamiany ze Śniadeckim, filozofem oświeceniowym) reprezentuje racjonalizm: 'martwe znasz prawdy, nieznane dla ludu, widzisz świat w proszku'. Kontra: romantyczne czucie Karusi.",
  },
  {
    type: "abcd",
    q: "W którym roku rozgrywa się akcja Wesela Wyspiańskiego?",
    options: [
      "A) 1830 – w czasie powstania listopadowego",
      "B) 1863 – w czasie powstania styczniowego",
      "C) 1900 – rok przełomu wieków",
      "D) 1918 – rok odzyskania niepodległości",
    ],
    correct: 2,
    exp: "Wesele oparte jest na autentycznym weselu poety Lucjana Rydla z Jadwigą Mikołajczykówną (21 listopada 1900 w Bronowicach pod Krakowem). Wyspiański był gościem i obserwatorem.",
  },
  {
    type: "abcd",
    q: "Co łączy Antygonę Sofoklesa i Winstona Smitha z Roku 1984 Orwella?",
    options: [
      "A) Oboje ostatecznie poddają się władzy i akceptują jej reguły",
      "B) Oboje buntują się przeciw niesprawiedliwym prawom, płacąc za to najwyższą cenę",
      "C) Oboje uciekają z kraju, szukając wolności za granicą",
      "D) Oboje są nagradzani za swoją odwagę i ocalają z konfliktu",
    ],
    correct: 1,
    exp: "Antygona łamie edykt Kreona kierując się sumieniem (prawo boskie ponad ludzkie) i ginie. Winston buntuje się przeciw Partii (pamiętnik, miłość, nieortodoksyjne myśli) i zostaje złamany. Oboje wybierają sumienie – z różnym skutkiem.",
  },
  {
    type: "abcd",
    q: "Kto jest autorem Lalki i w jakim roku ją wydano?",
    options: [
      "A) Stefan Żeromski, 1899",
      "B) Eliza Orzeszkowa, 1888",
      "C) Bolesław Prus (Aleksander Głowacki), 1890",
      "D) Henryk Sienkiewicz, 1884",
    ],
    correct: 2,
    exp: "Bolesław Prus (pseudonim Aleksandra Głowackiego) pisał Lalkę w latach 1887-1889, wydana w odcinkach 1887-89, w tomie 1890.",
  },
  {
    type: "abcd",
    q: "Co symbolizuje Złoty Róg w Weselu Wyspiańskiego?",
    options: [
      "A) Miłość Pana Młodego do ziemi chłopskiej",
      "B) Sygnał do narodowego powstania, który zostaje utracony z powodu niezdolności do czynu",
      "C) Bogactwo i dobrobyt chłopstwa galicyjskiego",
      "D) Symbol ślubu i przysięgi małżeńskiej",
    ],
    correct: 1,
    exp: "Wernyhora daje Gospodarzowi Złoty Róg – sygnał do czynu, do walki. Gospodyni go zgubia, Jasiek go traci (schyla się po czapkę z pawim piórem). Złoty Róg = zmarnowana szansa historyczna, niemoc do czynu.",
  },
  {
    type: "abcd",
    q: "Jakie epoki literackie łączy w sobie postać Stanisława Wokulskiego?",
    options: [
      "A) Barok (duchowość) i Oświecenie (rozum)",
      "B) Romantyzm (uczuciowość, idealizm, patriotyzm) i Pozytywizm (praca, nauka, pragmatyzm)",
      "C) Renesans (harmonia) i Romantyzm (bunt)",
      "D) Modernizm (dekadentyzm) i Dwudziestolecie (awangarda)",
    ],
    correct: 1,
    exp: "Wokulski to synteza epok: romantyk z ducha (obsesyjna, idealizująca miłość; patriotyzm – walczył w 1863 r.), pozytywista z działania (buduje fortunę, interesuje się nauką, 'wznosi się' społecznie).",
  },
  {
    type: "abcd",
    q: "Która z poniższych postaci z Wesela Wyspiańskiego jest symbolem marazmu i niezdolności narodu do czynu?",
    options: [
      "A) Wernyhora (ukraiński lirnik)",
      "B) Stańczyk (błazen królewski)",
      "C) Chochoł (słomiany okrywacz krzewu)",
      "D) Szela (przywódca rzezi galicyjskiej)",
    ],
    correct: 2,
    exp: "Chochoł to słomiany okrywacz, który chroni krzew różany na zimę. W dramacie symbolizuje drzemiące, uśpione siły narodu polskiego. Prowadzi chocholi taniec – kołowy, bez początku i końca, bez celu.",
  },
  {
    type: "abcd",
    q: "Czym jest 'Nowomowa' (Newspeak) w Roku 1984 Orwella?",
    options: [
      "A) Tajnym kodem komunikacji między członkami Braterstwa",
      "B) Oficjalnym językiem mediów Partii, pełnym propagandowych haseł",
      "C) Językiem specjalnie zaprojektowanym tak, by uniemożliwić wyrażenie myśli buntowniczych przez eliminację słów",
      "D) Dialektem używanym przez proles – najniższą klasę społeczną",
    ],
    correct: 2,
    exp: "Newspeak to językowy projekt Partii: systematyczne zawężanie słownictwa, by pewne myśli (Thoughtcrime) stały się niemożliwe do wyrażenia – a więc (wg Orwella, za Wittgensteinem) niemożliwe do pomyślenia.",
  },
  {
    type: "open",
    q: "Wyjaśnij (3–4 zdania), na czym polega mesjanizm w Dziadach III Mickiewicza i dlaczego był ważny dla emigrantów po 1831 roku.",
    exp: "Mesjanizm to idea, że Polska – jak Chrystus – cierpi niewinnie (rozbiory = ukrzyżowanie) po to, by przez swoje męczeństwo odkupić Europę i przynieść jej wolność (zmartwychwstanie = odzyskanie niepodległości). Widzenie ks. Piotra w Dziadach III przedstawia tę alegorię: Polska jako dziecię wydane w ręce oprawców. Dla emigrantów po przegranym powstaniu listopadowym mesjanizm dawał sens cierpieniu – nie były to ofiary bezsensowne, lecz zbawcze. Mickiewicz łączył patriotyzm z religią chrześcijańską, co czyniło ideę szczególnie silną emocjonalnie.",
  },
  {
    type: "abcd",
    q: "Raskolnikow w Zbrodni i karze zabija lichwiarkę, ponieważ:",
    options: [
      "A) Chce ukraść jej pieniądze i pomóc ubogim",
      "B) Uważa, że 'niezwykłe jednostki' mają prawo łamać normy moralne dla wyższego celu",
      "C) Został do tego zaszantażowany przez organizację rewolucyjną",
      "D) Działa pod wpływem alkoholu i utraty zmysłów",
    ],
    correct: 1,
    exp: "Raskolnikow opracował teorię: ludzie dzielą się na 'zwykłych' (podlegają prawu) i 'niezwykłych' (jak Napoleon), którzy mają prawo przekraczać prawo dla wyższego celu. Morderstwo jest testem tej teorii – i kończy się katastrofą.",
  },
];

// ── FISZKI (rozbudowane) ─────────────────────────────────────────
const plFiszki = [
  {
    front: "Mesjanizm",
    back: `Romantyczna idea: Polska = Chrystus narodów.
Cierpi niewinnie (rozbiory = ukrzyżowanie),
by odkupić Europę (zmartwychwstanie = niepodległość).
Główne źródło: Dziady III (Widzenie ks. Piotra).
Krytycy: Norwid, Słowacki ("Grób Agamemnona").`,
  },
  {
    front: "Hybris → Nemezis",
    back: `Hybris (gr.) = pycha, przekroczenie ludzkiej miary.
Ate = zaślepienie wywołane pychą.
Nemezis = kara boska, nieuchronna.
Przykłady: Edyp, Syzyf, Tantalos, Makbet, Raskolnikow.
Schemat: hybris → ate → nemezis.`,
  },
  {
    front: "Człowiek zlagrowany",
    back: `Termin z krytyki literatury obozowej (Borowski).
Więzień obozu zdehumanizowany przez system:
– traci empatię na rzecz przetrwania
– uczestniczy w mechanizmie zbrodni
Nie jest winny moralnie – jest ofiarą systemu.
Borowski: "Proszę państwa do gazu".`,
  },
  {
    front: "Vanitas vanitatum",
    back: `"Marność nad marnościami" (Kohelet/Eklezjastes).
Wszystko przemija: mądrość, bogactwo, chwała.
Kluczowy motyw baroku (Morsztyn) i średniowiecza.
Kontekst: czas jako koło, carpe diem (odwrotność).
Powiązanie: danse macabre, memento mori.`,
  },
  {
    front: "Chocholi taniec",
    back: `Wesele Wyspiańskiego (1901) – finał dramatu.
Chochoł = słomiany okrywacz krzewu róży.
Symbol: drzemiące, uśpione siły narodu.
Chocholi taniec = zaśpienie, kołowy ruch bez celu,
niemożność czynu wyzwoleńczego, marazm.`,
  },
  {
    front: "Nowomowa (Newspeak)",
    back: `Orwell, Rok 1984 (1949).
Język zaprojektowany przez Partię:
– eliminuje słowa wyrażające wolność, bunt
– Thoughtcrime (zbrodnia myśli) staje się niemożliwa
Wittgenstein: "Granice języka = granice świata."
Sapir-Whorf: język kształtuje myślenie.`,
  },
  {
    front: "Danse macabre",
    back: `Taniec śmierci – motyw średniowieczny.
Śmierć zabiera wszystkich: króla, papieża, chłopa.
Równość wobec śmierci = krytyka hierarchii feudalnej.
Rozmowa Mistrza Polikarpa ze Śmiercią.
W Weselu: chocholi taniec jako danse macabre narodu.`,
  },
  {
    front: "Teodyceum",
    back: `Problem filozoficzny i teologiczny:
Dlaczego dobry Bóg dopuszcza cierpienie niewinnych?
Hiob – Bóg nie daje logicznej odpowiedzi.
Leibniz ukuł termin (1710): "théodicée".
Camus w Dżumie: śmierć dziecka = argument przeciw teodycei.`,
  },
  {
    front: "Fatum (los)",
    back: `W tragedii greckiej: nieuchronne przeznaczenie.
Antygona, Edyp – nie mogą uciec od fatum rodu.
Różnica: Makbet sam przyciąga swoje fatum przez czyny.
Filozofia: determinizm vs. woluntaryzm.
Kontekst: amor fati (Nietzsche) – miłość do losu.`,
  },
  {
    front: "Praca organiczna",
    back: `Pozytywizm polski (Prus, Orzeszkowa).
Każdy pracuje dla dobra całego społeczeństwa
jak narząd w organizmie (analogia biologiczna – Spencer).
Praca u podstaw: edukacja najniższych warstw.
Wokulski w Lalce: wzorzec pozytywisty.`,
  },
  {
    front: "Wielka Improwizacja",
    back: `Dziady III, akt II – monolog Konrada.
Konrad żąda od Boga "rządu dusz" dla narodu.
Bunt prometejski: stawia się na równi z Bogiem.
Kończy się opętaniem przez złe duchy.
Kontrast: pokora ks. Piotra = prawdziwa siła.`,
  },
  {
    front: "Upupienie (Gombrowicz)",
    back: `Ferdydurke (1937) – pojęcie filozoficzne.
"Upupienie" = narzucenie komuś formy/roli wbrew jego woli.
Prof. Pimko upupia Józia (30-latka → uczeń).
Gombrowicz: człowiek jest zawsze kształtowany przez innych.
"Gęba" = maska nakładana przez społeczeństwo.`,
  },
  {
    front: "Tragizm grecki",
    back: `Tragizm = zderzenie dwóch równorzędnych racji.
Antygona: prawo boskie vs. prawo ludzkie.
Każda strona ma rację i każda płaci cenę.
Katharsis (oczyszczenie) – przez litość i trwogę.
Hamartia = błąd tragiczny bohatera.`,
  },
  {
    front: "Absurd (Camus)",
    back: `Albert Camus – filozofia absurdu:
Człowiek szuka sensu → świat sensu nie ma.
To zderzenie = absurd.
Odpowiedź: bunt (nie samobójstwo, nie wiara).
"Trzeba wyobrazić sobie Syzyfa szczęśliwym."
Dżuma: bunt i solidarność wobec absurdalnego zła.`,
  },
  {
    front: "Bajronizm",
    back: `Postawa bohatera romantycznego (od Lorda Byrona):
– samotnik, buntownik, tajemniczy
– przeżył wielką tragedię (utracona miłość, zdrada)
– pogarda dla społeczeństwa, heroizm w rozpaczy
Konrad Wallenrod (Mickiewicz), Kordian (Słowacki).
Kontra: prometeizm (bunt dla narodu, nie dla siebie).`,
  },
];

// ── EGZAMIN PRÓBNY ───────────────────────────────────────────────
const plEgzaminData = [
  {
    type: "abcd",
    q: "1. Czym jest Wielka Improwizacja w Dziadach III Mickiewicza?",
    options: [
      "A) Modlitwa Konrada o wyzwolenie ojczyzny",
      "B) Prometejski bunt – Konrad żąda od Boga władzy nad duszami narodu",
      "C) Scena sądu Konrada nad carskimi oprawcami",
      "D) Wizja przyszłości Polski w alegorycznym obrazie",
    ],
    correct: 1,
    exp: "Wielka Improwizacja to monolog Konrada, w którym buntuje się przeciw Bogu jak Prometeusz, żądając 'rządu dusz'. To szczyt romantycznego indywidualizmu.",
  },
  {
    type: "abcd",
    q: "2. Kto jest autorem Lalki i kiedy ją opublikowano?",
    options: [
      "A) Stefan Żeromski, 1902",
      "B) Eliza Orzeszkowa, 1888",
      "C) Bolesław Prus, 1890",
      "D) Henryk Sienkiewicz, 1884",
    ],
    correct: 2,
  },
  {
    type: "abcd",
    q: '3. Czym jest "danse macabre" (taniec śmierci) jako motyw literacki?',
    options: [
      "A) Obrzęd dożynkowy symbolizujący koniec lata",
      "B) Motyw średniowieczny: Śmierć zabiera wszystkich bez względu na stan i bogactwo – symbol równości wobec śmierci",
      "C) Taniec weselny symbolizujący radość życia",
      "D) Motyw z Mitologii Parandowskiego: taniec bogów na Olimpie",
    ],
    correct: 1,
  },
  {
    type: "abcd",
    q: "4. Ministerstwo Prawdy (Minitrue) w Roku 1984 Orwella zajmuje się:",
    options: [
      "A) Produkcją żywności i zaopatrzeniem obywateli",
      "B) Szkoleniem i zarządzaniem Policją Myśli",
      "C) Fałszowaniem i przepisywaniem historii, produkcją propagandy",
      "D) Nadzorowaniem sieci teleekranów i podsłuchem obywateli",
    ],
    correct: 2,
    exp: "Minitrue (od ang. Truth) zajmuje się paradoksalnie fałszowaniem – przepisuje gazety, dokumenty historyczne, by pasowały do aktualnej linii Partii. Winston pracuje tam jako przepisywacz.",
  },
  {
    type: "abcd",
    q: "5. Dlaczego Raskolnikow zabija lichwiarkę Alionę Iwanownę?",
    options: [
      "A) Chce ukraść pieniądze, by pomóc siostrze Duni wyjść z nędzy",
      'B) Uważa, że "niezwykłe jednostki" (jak Napoleon) mają prawo przekraczać prawo moralne dla wyższego celu',
      "C) Lichwiarki zaszantażowała go, grożąc ujawnieniem jego przestępstw",
      "D) Działa pod wpływem rewolucyjnej organizacji nihilistów",
    ],
    correct: 1,
  },
  {
    type: "abcd",
    q: "6. Który utwór jest reportażem-świadectwem o Powstaniu w Getcie Warszawskim?",
    options: [
      "A) Proszę państwa do gazu – Tadeusz Borowski",
      "B) Inny świat – Gustaw Herling-Grudziński",
      "C) Zdążyć przed Panem Bogiem – Hanna Krall",
      "D) Rok 1984 – George Orwell",
    ],
    correct: 2,
    exp: "Zdążyć przed Panem Bogiem (1977) Hanny Krall to reportaż-rozmowa z Markiem Edelmanem, ostatnim przywódcą Powstania w Getcie. Borowski pisał o Auschwitz, Herling o łagrze sowieckim.",
  },
  {
    type: "abcd",
    q: "7. Hybris w kulturze antycznej i literaturze oznacza:",
    options: [
      "A) Odwagę i heroizm żołnierza walczącego za ojczyznę",
      "B) Pychę i zarozumiałość przekraczającą ludzką miarę, prowadzącą do upadku (nemezis)",
      "C) Miłość do ojczyzny silniejszą niż miłość do życia",
      "D) Mądrość filozofa, który poznał prawdę o świecie",
    ],
    correct: 1,
  },
  {
    type: "open",
    q: "8. Wymień i krótko opisz trzy mechanizmy kontroli społeczeństwa w Roku 1984 Orwella.",
    exp: "1. Teleekrany – permanentny nadzór w każdym mieszkaniu i miejscu publicznym; stała obserwacja przez Policję Myśli. 2. Newspeak (Nowomowa) – język projektowany tak, by Thoughtcrime (zbrodnia myśli) stała się niemożliwa przez eliminację słów wyrażających wolność. 3. Fałszowanie historii – Ministerstwo Prawdy przepisuje dokumenty na bieżąco, by przeszłość zawsze potwierdzała aktualną linię Partii. Dodatkowe: Dwie Minuty Nienawiści, system donosicielstwa (dzieci donoszą na rodziców).",
  },
  {
    type: "open",
    q: '9. Na czym polega "upupienie" u Gombrowicza i dlaczego jest ważnym pojęciem filozoficznym?',
    exp: '"Upupienie" (Ferdydurke, 1937) to narzucenie człowiekowi formy/roli wbrew jego woli. Prof. Pimko zabiera 30-letniego Józia do szkoły, zmuszając go do roli ucznia. Filozoficznie: Gombrowicz twierdzi, że człowiek jest zawsze definiowany przez spojrzenie innych ("gęba" = maska społeczna) i nie może osiągnąć autentyczności. Każda relacja z innymi narzuca formę. To poprzedza tezy Sartre\'a ("Piekło to inni") i jest diagnozą mechanizmu konformizmu społecznego.',
  },
  {
    type: "abcd",
    q: "10. Czym charakteryzuje się groteska literacka (na przykładzie Ferdydurke Gombrowicza lub Tanga Mrożka)?",
    options: [
      "A) Realistycznym, szczegółowym opisem życia codziennego warstw niższych",
      "B) Absurdalnymi, karykaturalnymi sytuacjami, które demaskują absurd konwencji i mechanizmów społecznych",
      "C) Heroicznym przedstawieniem walki jednostki z systemem politycznym",
      "D) Szczegółowym studium psychologicznym postaci w sytuacjach ekstremalnych",
    ],
    correct: 1,
    exp: "Groteska łączy komizm z tragizmem, absurd z logiką. W Ferdydurke: 30-latek w szkole, 'bójka na miny'. W Tangu: Artur-konserwatywista vs liberalni rodzice. Groteska demaskuje absurd rzeczywistości przez absurd literacki.",
  },
];
