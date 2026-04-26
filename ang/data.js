// ================================================================
//  ang/data.js  –  Angielski – pełna rozbudowana baza danych
// ================================================================

// ── CZYTANIE ZE ZROZUMIENIEM (8 tekstów) ────────────────────────
const angReadingData = [
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT A – Digital Detox</strong><br><br>
    The concept of a "digital detox" – deliberately disconnecting from technology – has gained significant traction in recent years. Proponents argue that constant connectivity contributes to anxiety, sleep disorders, and decreased attention spans. A 2023 study by the University of Bath found that participants who abstained from social media for one week reported improved well-being and reduced feelings of loneliness, despite initially fearing they would miss out. Critics, however, contend that technology is now so deeply embedded in professional and social life that complete disconnection is neither practical nor desirable. They argue that the problem lies not with technology itself but with the way individuals choose to use it.</div>`,
    q: 'According to the text, what did the University of Bath study reveal about digital detox?',
    options: ['A) Social media use significantly increases professional productivity', 'B) Participants who avoided social media for a week reported greater well-being', 'C) Technology permanently damages concentration and sleep quality', 'D) Complete disconnection from technology is strongly recommended by researchers'],
    correct: 1, exp: "'Reported improved well-being' – directly stated in paragraph 2. Note the paraphrase: 'greater well-being' = 'improved well-being'."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT A – Digital Detox (continued)</strong><br><br>
    The concept of a "digital detox" – deliberately disconnecting from technology – has gained significant traction in recent years. Proponents argue that constant connectivity contributes to anxiety, sleep disorders, and decreased attention spans. A 2023 study by the University of Bath found that participants who abstained from social media for one week reported improved well-being and reduced feelings of loneliness, despite initially fearing they would miss out. Critics, however, contend that technology is now so deeply embedded in professional and social life that complete disconnection is neither practical nor desirable. They argue that the problem lies not with technology itself but with the way individuals choose to use it.</div>`,
    q: 'What is the main argument of critics of digital detox, according to the text?',
    options: ['A) Technology has no negative effects on mental health', 'B) Social media companies should be regulated more strictly', 'C) The issue is how people use technology, not technology itself', 'D) Digital detox is only beneficial for people with anxiety disorders'],
    correct: 2, exp: "'The problem lies not with technology itself but with the way individuals choose to use it' – paraphrased as 'the issue is how people use it'."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT B – AI in Medicine</strong><br><br>
    Artificial intelligence is increasingly being used in medical diagnostics. A recent trial at Stanford Medical Centre found that an AI system detected early-stage lung cancer with 94% accuracy, outperforming the average accuracy rate of 65% achieved by radiologists working alone. However, medical ethicists raise concerns about accountability: if an AI misdiagnoses a patient, who is responsible? The hospital? The software developer? The physician who relied on the recommendation? These questions remain largely unresolved in both legal and ethical frameworks. Meanwhile, proponents argue that combining AI with human expertise – rather than replacing doctors – produces the best outcomes: accuracy rates in such collaborative models have reached 97% in some trials.</div>`,
    q: 'What solution do proponents of AI in medicine suggest, according to the text?',
    options: ['A) AI should completely replace radiologists in diagnosis', 'B) AI and human doctors working together produce better results than either alone', 'C) Hospitals should be held solely responsible for AI misdiagnoses', 'D) AI should only be used in early-stage cancer detection'],
    correct: 1, exp: "'Combining AI with human expertise – rather than replacing doctors – produces the best outcomes.' Collaborative model, not replacement."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT C – Urban Farming</strong><br><br>
    Urban farming – growing food within city limits – is experiencing a renaissance. From rooftop gardens in New York to vertical farms in Singapore, cities are exploring ways to reduce food miles and increase food security. While critics point out that urban agriculture currently supplies only a fraction of city residents' caloric needs, supporters emphasise its psychological and community benefits: reduced stress, stronger neighbourhood bonds, and educational opportunities for children who have never seen food growing. Furthermore, advances in hydroponic and aeroponic technology mean that yields per square metre are increasing dramatically, suggesting that the caloric contribution of urban farming may grow substantially over the coming decades.</div>`,
    q: 'What does the text suggest about the future potential of urban farming?',
    options: ['A) Urban farming will never supply significant amounts of food to cities', 'B) New growing technologies suggest urban farming could contribute much more food in future', 'C) Urban farming is primarily valuable for its educational benefits to children', 'D) Rooftop gardens in New York are more productive than vertical farms in Singapore'],
    correct: 1, exp: "'Advances in technology mean yields are increasing... caloric contribution may grow substantially.' Future potential, not current reality."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT D – Greenwashing</strong><br><br>
    The term "greenwashing" refers to the practice of companies making misleading environmental claims to appear more sustainable than they are. The European Union's Green Claims Directive, proposed in 2023, aims to crack down on vague terms such as "eco-friendly," "carbon neutral," and "sustainable" unless companies can provide verifiable evidence. Campaigners welcome the move but warn that enforcement will be challenging, particularly for global corporations whose supply chains span dozens of countries with varying environmental standards. Sceptics, however, argue that overly strict regulation could stifle innovation, as companies may become reluctant to make any environmental claims for fear of legal repercussions, even when their efforts are genuine.</div>`,
    q: 'What concern do sceptics of the Green Claims Directive raise?',
    options: ['A) The directive does not go far enough in punishing greenwashing', 'B) Enforcement across global supply chains will be straightforward', 'C) Excessive regulation might discourage genuine environmental efforts by companies', 'D) The directive only applies to European companies, not global corporations'],
    correct: 2, exp: "'Companies may become reluctant to make any environmental claims for fear of legal repercussions, even when their efforts are genuine' = discourages genuine efforts."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT E – The Four-Day Work Week</strong><br><br>
    A growing number of companies across the world have been experimenting with a four-day working week. Pilot programmes in Iceland (2015-2019), the UK (2022), and Japan have shown broadly positive results: productivity either remained stable or improved, employee well-being increased significantly, and staff turnover fell. Proponents argue that the traditional five-day week is an industrial-era relic that no longer reflects the realities of modern knowledge work. Critics, however, warn that the results of these trials may not be universally applicable. Service industries with customer-facing roles, healthcare, and manufacturing may face particular challenges in reducing working hours without compromising output or safety. The debate reflects broader questions about what work is for and how societies should organise labour in the 21st century.</div>`,
    q: 'According to critics of the four-day work week, what is a significant limitation of the trial results?',
    options: ['A) Productivity always decreased during the trials', 'B) The trials only took place in one country', 'C) The findings may not apply to all sectors, particularly those requiring constant staffing', 'D) Employee well-being decreased significantly in all trials'],
    correct: 2, exp: "'Service industries, healthcare, manufacturing may face particular challenges' = not universally applicable to all sectors."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT F – Deep-Sea Mining</strong><br><br>
    Deep-sea mining – extracting minerals from the ocean floor – is the subject of intense debate. Proponents argue that it is essential for the green transition, since cobalt, nickel, and manganese found on the seabed are critical components of electric vehicle batteries and renewable energy storage. Opponents, including some of the world's largest car manufacturers, have called for a moratorium, citing the risk of irreversible damage to deep-sea ecosystems that are still poorly understood. Scientists estimate that fewer than 5% of the ocean floor has been mapped in detail. The International Seabed Authority (ISA) is currently developing regulations, but environmental groups argue that commercial exploitation should not begin until the scientific understanding of deep-sea ecosystems is far more advanced.</div>`,
    q: 'Why do environmental groups argue that deep-sea mining should not yet begin?',
    options: ['A) Electric vehicles do not actually require the minerals found on the ocean floor', 'B) The ISA has already banned deep-sea mining permanently', 'C) Scientific understanding of deep-sea ecosystems is still too limited to permit safe exploitation', 'D) Car manufacturers have proven that alternative materials can replace seabed minerals'],
    correct: 2, exp: "'Commercial exploitation should not begin until scientific understanding is far more advanced' = too limited currently. 'Fewer than 5% of ocean floor mapped' supports this."
  },
  {
    type: 'abcd',
    context: `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:.88rem;line-height:1.7;color:#c8ccd8">
    <strong style="color:var(--accent)">TEXT G – The 15-Minute City</strong><br><br>
    The "15-minute city" concept, popularised by French-Colombian urbanist Carlos Moreno, envisions urban areas where all essential services – work, shopping, healthcare, education, and leisure – are accessible within a 15-minute walk or cycle from home. Paris under Mayor Anne Hidalgo has become the most prominent testing ground. Cycling infrastructure has expanded dramatically, with over 1,000 km of new cycle lanes added since 2014. However, the results have been controversial: while some residents celebrate the reduced car traffic and improved air quality, others complain of increased congestion on remaining car routes and argue that the concept disproportionately benefits residents who already live near services. Critics also note that property prices in central, well-connected areas have risen sharply, potentially pricing out lower-income residents.</div>`,
    q: 'What unintended social consequence of the 15-minute city is mentioned in the text?',
    options: ['A) Cycling infrastructure has made streets more dangerous for pedestrians', 'B) Air quality in Paris has worsened since the introduction of the policy', 'C) Rising property prices in central areas may exclude lower-income residents', 'D) The Mayor of Paris has abandoned the 15-minute city project due to public opposition'],
    correct: 2, exp: "'Property prices in central, well-connected areas have risen sharply, potentially pricing out lower-income residents' = unintended social exclusion."
  },
];

// ── USE OF ENGLISH – CZASY I STRUKTURY ──────────────────────────
const angGramatykaData = [
  { type:'abcd', q:"Choose the correct form: 'By the time she arrived, we ___ for two hours.'",
    options:['A) waited','B) have been waiting','C) had been waiting','D) were waiting'],
    correct:2, exp:"Past Perfect Continuous: had been + -ing. Czynność trwająca przed inną czynnością w przeszłości. 'By the time' = sygnał Past Perfect." },
  { type:'abcd', q:"Which sentence is correct? (Third Conditional)",
    options:['A) If I studied harder, I would pass.','B) If I had studied harder, I would have passed.','C) If I study harder, I will pass.','D) If I would study harder, I will pass.'],
    correct:1, exp:"3rd Conditional: If + Past Perfect, would have + past participle. Nieodwracalna przeszłość – gdybym był uczył się (ale nie uczyłem)." },
  { type:'abcd', q:"'The new policy had a significant ___ on the economy.' Choose the correct word.",
    options:['A) affect','B) effect','C) effects on','D) affecting'],
    correct:1, exp:"EFFECT = rzeczownik (have an effect ON sth). AFFECT = czasownik (to affect sth). 'Significant effect on' – stała kolokacja." },
  { type:'abcd', q:"'She succeeded ___ passing the exam on her first attempt.'",
    options:['A) to','B) at','C) in','D) for'],
    correct:2, exp:"Succeed IN + gerund (rzeczownik odsłowny). 'Managed TO + infinitive'. 'Achieve + noun'." },
  { type:'abcd', q:"Choose the correct passive: 'The report ___ by the team last week.'",
    options:['A) was submitted','B) has been submitted','C) had submitted','D) is submitting'],
    correct:0, exp:"Past Simple Passive: was/were + past participle. 'Last week' wskazuje na czas przeszły prosty." },
  { type:'abcd', q:"'Not only ___ the concert, but she also met the band backstage.'",
    options:['A) she enjoyed','B) did she enjoy','C) she did enjoy','D) enjoyed she'],
    correct:1, exp:"Inwersja po 'Not only': Not only + operator + podmiot + czasownik. Formalne, pisemne." },
  { type:'abcd', q:"'I wish I ___ harder last year.' Choose the correct form.",
    options:['A) studied','B) would study','C) had studied','D) have studied'],
    correct:2, exp:"WISH + Past Perfect = żal o przeszłości (coś czego nie zrobiłem). Wish + Past Simple = życzenie o teraźniejszości." },
  { type:'abcd', q:"She asked me where ___. (Reported speech)",
    options:["A) do I live","B) did I live","C) I lived","D) I have lived"],
    correct:2, exp:"Mowa zależna: backshift – Present Simple → Past Simple. Brak inwersji w zdaniach pytających podrzędnych." },
  { type:'abcd', q:"'___ the heavy rain, the match continued.' Choose the correct connector.",
    options:['A) Because of','B) Due to','C) Despite','D) Although'],
    correct:2, exp:"DESPITE + noun/gerund (mimo). ALTHOUGH + clause (chociaż). BECAUSE OF / DUE TO = z powodu (przyczyna, nie kontrast)." },
  { type:'abcd', q:"'The scientists made a groundbreaking ___ in cancer research.'",
    options:['A) breakout','B) breakthrough','C) breakdown','D) breakaway'],
    correct:1, exp:"BREAKTHROUGH = przełomowe odkrycie/osiągnięcie. Breakout = ucieczka. Breakdown = awaria/załamanie. Breakaway = oderwanie się." },
  { type:'abcd', q:"'I ___ here since 2018.' Choose the correct tense.",
    options:['A) lived','B) have lived','C) was living','D) had lived'],
    correct:1, exp:"Present Perfect + since/for = czynność trwająca od punktu w przeszłości do teraz. 'Since 2018' = od konkretnego punktu." },
  { type:'abcd', q:"Choose the formal equivalent of 'to find out':",
    options:['A) to check out','B) to look into','C) to ascertain','D) to figure out'],
    correct:2, exp:"ASCERTAIN (formal) = ustalić z pewnością. Look into = zbadać sprawę (semiformal). Check out / figure out = potoczne." },
  { type:'abcd', q:"'Hardly ___ the door when the phone rang.'",
    options:['A) I opened','B) had I opened','C) I had opened','D) did I open'],
    correct:1, exp:"HARDLY + inwersja: Hardly had + podmiot + past participle + when + Past Simple. Czynność prawie jednoczesna." },
  { type:'abcd', q:"'It is essential that he ___ on time.' (Subjunctive / formal requirement)",
    options:['A) arrives','B) arrive','C) arrived','D) would arrive'],
    correct:1, exp:"Subjunctive po 'essential/necessary/vital that': forma podstawowa czasownika (bez -s, bez be). 'It is essential that he arrive' = formal English." },
  { type:'abcd', q:"'The more you practise, ___ you become.'",
    options:['A) the more confident','B) more confident','C) the most confident','D) most confident'],
    correct:0, exp:"'The + comparative... the + comparative' = im bardziej... tym bardziej. 'The more you practise, the more confident you become.'" },
];

// ── KOLOKACJE I SŁOWNICTWO ───────────────────────────────────────
const angKolokacjeData = [
  { type:'abcd', q:"Choose the correct collocation: 'to ___ a conclusion'",
    options:['A) do','B) make','C) reach','D) find'], correct:2, exp:"REACH a conclusion (= dojść do wniosku). Also: COME TO a conclusion. NOT 'make' or 'do'." },
  { type:'abcd', q:"Choose the correct collocation: 'to ___ progress'",
    options:['A) do','B) make','C) reach','D) have'], correct:1, exp:"MAKE progress (= czynić postępy). Stała kolokacja." },
  { type:'abcd', q:"Choose the correct collocation: 'to ___ a decision'",
    options:['A) do','B) take','C) make','D) have'], correct:2, exp:"MAKE a decision. Also TAKE a decision (British English). NOT 'do a decision'." },
  { type:'abcd', q:"'The company ___ a loss of €2 million last year.'",
    options:['A) made','B) did','C) had','D) took'], correct:0, exp:"MAKE a loss / make a profit. Standard business collocations." },
  { type:'abcd', q:"'She ___ a great deal of effort into her research.'",
    options:['A) made','B) put','C) gave','D) placed'], correct:1, exp:"PUT effort into something. Also: PUT time/energy/money INTO." },
  { type:'abcd', q:"'The new law will ___ effect from January 1st.'",
    options:['A) come into','B) go into','C) bring into','D) take into'], correct:0, exp:"COME INTO effect / COME INTO force = wejść w życie (prawo). Take effect = zacząć działać (bardziej ogólne)." },
  { type:'abcd', q:"'He ___ a speech at the conference.'",
    options:['A) made','B) said','C) told','D) spoke'], correct:0, exp:"MAKE / GIVE / DELIVER a speech. MAKE jest najbardziej neutralne." },
  { type:'abcd', q:"'The accident ___ place at around 6 pm.'",
    options:['A) made','B) had','C) took','D) did'], correct:2, exp:"TAKE PLACE = wydarzyć się (o planowanych i nieplanowanych zdarzeniach). HAPPEN jest alternatywą (mniej formalna)." },
  { type:'abcd', q:"'The scientist ___ a breakthrough in quantum computing.'",
    options:['A) did','B) made','C) achieved','D) had'], correct:1, exp:"MAKE a breakthrough / ACHIEVE a breakthrough. Both correct, but 'made' is more common." },
  { type:'abcd', q:"'The government ___ measures to reduce pollution.'",
    options:['A) did','B) made','C) took','D) had'], correct:2, exp:"TAKE MEASURES / TAKE STEPS / TAKE ACTION = podjąć kroki/środki. 'Made measures' is incorrect." },
];

// ── SŁOWOTWÓRSTWO (WORD FORMATION) ──────────────────────────────
const angWordFormData = [
  { type:'abcd', q:"'She showed great ___.' (DETERMINE)",
    options:['A) determinate','B) determining','C) determination','D) determined'], correct:2, exp:"DETERMINATION (rzeczownik od determine). Sufiks -ation. 'Great determination' = wielka determinacja." },
  { type:'abcd', q:"'The situation was completely ___.' (PREDICT)",
    options:['A) unpredicting','B) unpredictable','C) mispredicted','D) predictless'], correct:1, exp:"UN- + PREDICT + -ABLE = unpredictable (nieprzewidywalny). Prefiks un- zaprzecza. Sufiks -able = możliwość." },
  { type:'abcd', q:"'He acted very ___.' (RESPONSIBLE)",
    options:['A) irresponsible','B) irresponsibly','C) unresponsibly','D) disresponsibly'], correct:1, exp:"IRRESPONSIBLY (przysłówek). Ir- + responsible + -ly. Prefiks ir- przed r: irresponsible, irregular, irrelevant." },
  { type:'abcd', q:"'She is known for her ___.' (GENEROUS)",
    options:['A) generously','B) generosity','C) generousness','D) generous'], correct:1, exp:"GENEROSITY (rzeczownik). Nieregularne: generous → generosity (nie generousness). Sufiks -ity." },
  { type:'abcd', q:"'The government increased ___ spending.' (ENVIRONMENT)",
    options:['A) environmental','B) environmented','C) environmenting','D) environments'], correct:0, exp:"ENVIRONMENTAL (przymiotnik modyfikujący rzeczownik 'spending'). Sufiks -al." },
  { type:'abcd', q:"'He was completely ___ by the problem.' (PUZZLE)",
    options:['A) puzzling','B) puzzle','C) puzzled','D) puzzlement'], correct:2, exp:"PUZZLED (przymiotnik od past participle) = zdezorientowany (opisuje uczucie osoby). PUZZLING = zagadkowy (opisuje sytuację)." },
  { type:'abcd', q:"'The medicine ___ the pain significantly.' (ALLEVIATE)",
    options:['A) alleviated','B) alleviating','C) alleviation','D) alleviative'], correct:0, exp:"ALLEVIATED (past tense, czasownik) = złagodziła. Samo zdanie wymaga czasownika." },
  { type:'abcd', q:"'___ of climate change, scientists warn of rising sea levels.' (CONSEQUENCE)",
    options:['A) Consequent','B) Consequently','C) As a consequence','D) Consequential'], correct:2, exp:"'As a consequence of...' = w wyniku, jako konsekwencja. Następstwo/przyczyna. 'Consequently' byłoby poprawne jako przysłówek, ale po nim nie może stać 'of'." },
  { type:'abcd', q:"'The policy was widely ___ by environmental groups.' (CRITIC)",
    options:['A) criticised','B) critical','C) criticism','D) critically'], correct:0, exp:"CRITICISED (strona bierna Past Simple: was criticised). Czasownik 'criticise' w formie biernej." },
  { type:'abcd', q:"'There is growing ___ about the effects of social media.' (CONCERN)",
    options:['A) concerned','B) concerningly','C) concern','D) concerns about'], correct:2, exp:"'Growing CONCERN' (rzeczownik niepoliczalny) = rosnące zaniepokojenie. 'Growing concerns' też możliwe (policzalny), ale tutaj potrzebujemy rzeczownika po 'growing'." },
];

// ── BŁĘDY W ZDANIACH (Error Correction) ────────────────────────
const angBledyData = [
  { type:'abcd', q:"Find the error: 'She has been working here since five years.'",
    options:["A) 'has been' – wrong tense","B) 'since' should be 'for'","C) 'working' should be 'worked'","D) No error"], correct:1, exp:"FOR + period of time (five years). SINCE + point in time (2019, Monday, last year). 'For five years' jest poprawne." },
  { type:'abcd', q:"Find the error: 'He suggested to go to the cinema.'",
    options:["A) 'suggested' should be 'proposed'","B) 'to go' should be 'going'","C) 'cinema' needs 'the'","D) No error"], correct:1, exp:"SUGGEST + gerund (-ing). 'Suggested going'. Inne czasowniki + gerund: recommend, enjoy, consider, avoid, deny." },
  { type:'abcd', q:"Find the error: 'Despite of the rain, we went for a walk.'",
    options:["A) 'Despite' should be 'Although'","B) 'of' is unnecessary – 'Despite the rain'","C) 'went' should be 'have gone'","D) No error"], correct:1, exp:"DESPITE + noun/gerund (BEZ 'of'). IN SPITE OF + noun/gerund. 'Although' + clause (subject + verb)." },
  { type:'abcd', q:"Find the error: 'The informations were very useful.'",
    options:["A) 'informations' – should be 'information' (uncountable)","B) 'were' should be 'was'","C) Both A and B are errors","D) No error"], correct:2, exp:"INFORMATION jest niepoliczalny: 'The information was very useful'. Inne niepoliczalne: news, advice, furniture, luggage, equipment, knowledge." },
  { type:'abcd', q:"Find the error: 'I am used to get up early every morning.'",
    options:["A) 'am used to' should be 'used to'","B) 'get up' should be 'getting up'","C) 'every morning' should be 'every mornings'","D) No error"], correct:1, exp:"BE USED TO + gerund (-ing) = być przyzwyczajonym do. USED TO + infinitive = kiedyś (w przeszłości). 'I am used to getting up early.'" },
  { type:'abcd', q:"Find the error: 'Neither the manager nor the employees was informed.'",
    options:["A) 'Neither...nor' should be 'Either...or'","B) 'was' should be 'were' – verb agrees with closer subject","C) 'informed' should be 'inform'","D) No error"], correct:1, exp:"Neither...nor/Either...or: czasownik zgadza się z BLIŻSZYM podmiotem. 'employees' (pl.) → 'were'." },
  { type:'abcd', q:"Find the error: 'This is the most unique solution I've ever seen.'",
    options:["A) 'most unique' – 'unique' cannot be graded, so 'most unique' is incorrect","B) 'I've ever seen' should be 'I ever saw'","C) 'solution' should be 'solving'","D) No error"], correct:0, exp:"UNIQUE = jedyny w swoim rodzaju (absolut). Nie można powiedzieć 'more unique' ani 'most unique'. Podobnie: perfect, complete, empty." },
];

// ── TRANSFORMACJE ZDAŃ ──────────────────────────────────────────
const angTransformData = [
  { type:'open', q:"Rewrite using the word given: 'The last time I visited Paris was in 2019.' (SINCE)\nComplete: 'I have not ___'",
    exp:"I have not visited Paris since 2019. (Present Perfect + since = od ostatniego razu)" },
  { type:'open', q:"Rewrite using the word given: 'It is not necessary for you to attend the meeting.' (NEED)\nComplete: 'You do ___'",
    exp:"You do not need to attend the meeting. / You needn't attend the meeting. (Negative necessity = don't need to / needn't)" },
  { type:'open', q:"Rewrite using the word given: 'I regret not studying harder at school.' (WISH)\nComplete: 'I wish I ___'",
    exp:"I wish I had studied harder at school. (Wish + Past Perfect = żal o przeszłości)" },
  { type:'open', q:"Rewrite using the word given: 'The police made him confess.' (MADE)\nComplete: 'He was ___'",
    exp:"He was made to confess by the police. (Passive of causative 'make': be made + to infinitive)" },
  { type:'open', q:"Rewrite using the word given: 'She is too tired to go out.' (ENOUGH)\nComplete: 'She is not ___'",
    exp:"She is not energetic/rested enough to go out. (too + adj = not + adj + enough)" },
  { type:'open', q:"Rewrite using the word given: 'It was wrong of him to lie.' (SHOULD)\nComplete: 'He ___'",
    exp:"He should not have lied. (Should have + past participle = krytyka przeszłego działania)" },
  { type:'open', q:"Rewrite using the word given: 'The storm caused the cancellation of the concert.' (CANCELLED)\nComplete: 'The concert ___'",
    exp:"The concert was cancelled because of/due to the storm. (Passive voice + reason connector)" },
];

// ── FISZKI – SŁOWNICTWO ZAAWANSOWANE ────────────────────────────
const angFiszki = [
  { front: 'Sophisticated', back: `(adj.) Complex, refined, showing deep understanding.
"She made a sophisticated argument about AI ethics."
Syn: nuanced, refined, elaborate
Ant: naive, simplistic, crude
Collocations: sophisticated approach/analysis/technology` },
  { front: 'Controversial', back: `(adj.) Causing strong disagreement or debate.
"Capital punishment remains a controversial issue."
Syn: contentious, debatable, divisive
Ant: uncontroversial, accepted
Collocations: highly controversial, stir up controversy` },
  { front: 'Furthermore / Moreover', back: `(adv.) In addition; strengthens argument.
Furthermore adds equal weight: "It is expensive. Furthermore, it is ineffective."
Moreover adds stronger point: "It is expensive. Moreover, it is dangerous."
Syn: what is more, in addition, additionally` },
  { front: 'Nevertheless / Nonetheless', back: `(adv.) Despite what was just said; however.
"The task was very difficult; nevertheless, she completed it."
Syn: however, yet, still, notwithstanding
Used to introduce contrast/concession at start of sentence.` },
  { front: 'Detrimental', back: `(adj.) Harmful, causing damage.
"Excessive screen time is detrimental to children's development."
Syn: harmful, damaging, adverse, prejudicial
Ant: beneficial, advantageous
Collocations: detrimental effect/impact ON sth` },
  { front: 'Indispensable', back: `(adj.) Absolutely necessary, cannot do without.
"Clean water is indispensable for human survival."
Syn: essential, vital, crucial, imperative
Ant: dispensable, unnecessary, superfluous
Collocations: indispensable tool/resource/role` },
  { front: 'Alleviate', back: `(v.) To make something less severe or painful.
"Exercise can alleviate symptoms of depression."
Syn: relieve, ease, reduce, mitigate
Ant: exacerbate, aggravate, worsen
Collocations: alleviate pain/suffering/poverty/symptoms` },
  { front: 'Exacerbate', back: `(v.) To make a problem or situation worse.
"The drought exacerbated the food security crisis."
Syn: worsen, aggravate, intensify, compound
Ant: alleviate, improve, reduce
Collocations: exacerbate tensions/problems/inequality` },
  { front: 'Inevitable', back: `(adj.) Certain to happen; cannot be avoided.
"In a rapidly changing climate, some disruption is inevitable."
Syn: unavoidable, inescapable, certain, inexorable
Ant: avoidable, preventable, uncertain
Structures: It is inevitable that... / Inevitable + noun` },
  { front: 'Proponent / Opponent', back: `Proponent (n.) = supporter, advocate, champion.
"Proponents of nuclear energy argue it is safe."
Opponent (n.) = critic, adversary, detractor.
"Opponents warn of the risks of radiation."
Use instead of: people who support/oppose` },
  { front: 'Contentious', back: `(adj.) Causing disagreement; likely to cause an argument.
"Immigration policy is a highly contentious issue."
Syn: controversial, divisive, disputed, debated
Ant: uncontested, agreed
Note: slightly stronger than 'controversial' – implies active conflict.` },
  { front: 'Acknowledge', back: `(v.) To recognise or admit the existence of something.
"The report acknowledges that progress has been slow."
Syn: recognise, admit, concede, accept
Academic use: "It must be acknowledged that..."
Note: more formal than 'admit', less defensive in tone.` },
  { front: '2nd vs 3rd Conditional', back: `2nd Conditional: hypothetical PRESENT/FUTURE
If + Past Simple, would + infinitive
"If I lived in Paris, I would speak French."
3rd Conditional: impossible PAST regret
If + Past Perfect, would have + past participle
"If I had studied harder, I would have passed."` },
  { front: 'Linking words – contrast', back: `Although / Even though + clause
"Although it rained, we went out."
Despite / In spite of + noun/-ing
"Despite the rain, we went out."
However / Nevertheless + new sentence
"It rained. Nevertheless, we went out."
Whereas / While = parallel contrast
"I prefer coffee, whereas she prefers tea."` },
  { front: 'Linking words – addition', back: `Furthermore / Moreover = in addition (stronger)
In addition / Additionally = neutral addition
What is more = informal-semi formal addition
Not only... but also = emphatic addition (+ inversion)
"Not only did she pass, but she also got top marks."` },
  { front: 'Register – formal vs informal', back: `Informal → Formal equivalents:
get → obtain/acquire
use → utilise/employ
find out → ascertain/establish
look into → investigate/examine
go up → increase/rise
go down → decrease/fall/decline
big → significant/substantial
show → demonstrate/indicate` },
];

// ── PYTANIA USTNE Z WZORCOWYMI ODPOWIEDZIAMI ────────────────────
const angUstnaData = [
  { q: "What do you think about social media? Is it more beneficial or harmful for society?",
    a: `In my view, social media has both significant advantages and serious drawbacks.
    On the positive side, it enables instant communication across vast distances, gives marginalised
    groups a platform, and has been instrumental in organising social movements.
    However, there is growing evidence that excessive use is linked to anxiety, depression,
    and a deterioration of face-to-face social skills, particularly among young people.
    Furthermore, the spread of misinformation on social platforms poses a genuine threat to
    democratic processes. On balance, I believe the benefits outweigh the harms when social
    media is used mindfully and with proper digital literacy education.` },
  { q: "Would you prefer to live in a big city or in the countryside? Give reasons for your answer.",
    a: `Personally, I would choose to live in a city, primarily for the career opportunities,
    cultural diversity, and access to services it offers. Cities are centres of innovation and
    I find the energy and pace stimulating. That said, I have a deep appreciation for the
    countryside – the clean air, connection with nature, and slower pace of life have real
    psychological benefits, particularly for mental health and stress reduction.
    If I could, I would probably opt for a compromise: living in a smaller city close to
    natural landscapes.` },
  { q: "Do you think artificial intelligence will have a positive or negative impact on employment?",
    a: `This is a question I feel strongly about. In the short term, AI will undoubtedly displace
    certain categories of routine work – data processing, some manufacturing, even basic legal
    and medical tasks. However, history suggests that technological revolutions ultimately create
    more jobs than they destroy, even if the transition is painful. The key challenge is ensuring
    that the benefits of AI are distributed fairly and that workers in displaced industries
    receive adequate support and retraining. Without such policies, the risk is growing economic
    inequality rather than technological unemployment per se.` },
  { q: "Should education systems focus more on practical skills or academic knowledge?",
    a: `I think this is a false dichotomy – the best education systems do both. Academic knowledge
    provides the conceptual framework and critical thinking skills that underpin all practical
    application. At the same time, I strongly believe that schools should do more to develop
    practical competencies: financial literacy, communication, coding, and problem-solving.
    Finland's education system is often cited as a model – it balances rigorous academic content
    with project-based learning and student wellbeing. The goal should be graduates who can both
    think critically and act effectively.` },
  { q: "Is it possible to live sustainably in the modern world? What changes would be needed?",
    a: `Living fully sustainably within current economic structures is extremely challenging for
    the average person, and I think it's important to avoid placing the entire burden on
    individual consumers while corporations continue to produce at scale with minimal accountability.
    That said, individual choices do matter: reducing meat consumption, minimising air travel,
    and buying less are genuinely impactful. Structural changes – renewable energy infrastructure,
    carbon pricing, banning single-use plastics – are even more important. True sustainability
    requires both individual responsibility and systemic change.` },
  { q: "Do you think young people today face more challenges than previous generations?",
    a: `This is a nuanced question. Previous generations faced genuine hardships – world wars,
    widespread poverty, lack of healthcare and educational access – that most young people in
    developed countries are fortunate not to experience. However, young people today face
    distinct challenges: the climate crisis, housing unaffordability, job market precarity,
    and the psychological pressures of social media. I would argue that the challenges are
    different rather than greater. What concerns me most is the sense of powerlessness many
    young people feel in the face of systemic problems they did not create.` },
  { q: "What is the most effective way to tackle climate change?",
    a: `In my opinion, there is no single solution – what's needed is a portfolio of approaches
    working simultaneously. Renewable energy transition is essential, but so are changes in
    agriculture, transport, and urban planning. Carbon pricing mechanisms, if properly designed,
    can incentivise businesses to reduce emissions without requiring constant government
    intervention. Meanwhile, international cooperation is indispensable, since climate change
    is a global commons problem that no country can solve alone. I'm cautiously optimistic –
    the pace of renewable energy adoption has been faster than predicted, though time is running short.` },
  { q: "Should zoos exist in the 21st century? Justify your answer.",
    a: `This is a question I've thought about a great deal. Traditional zoos, where animals
    are kept in inadequate conditions purely for entertainment, are difficult to justify ethically.
    However, modern conservation parks – which focus on breeding endangered species, wildlife
    rehabilitation, and education – serve a genuinely valuable purpose. The key distinction is
    whether an institution prioritises animal welfare and conservation or profit and entertainment.
    I believe the former can be justified; the latter cannot. Ultimately, the goal should be
    to make zoos increasingly unnecessary by protecting natural habitats.` },
  { q: "How important is it to learn a foreign language in today's world?",
    a: `Enormously important, in my view. English has become the global lingua franca of science,
    business, and diplomacy, making it practically indispensable for anyone with international
    ambitions. Beyond English, speaking additional languages opens doors to cultures and
    perspectives that are simply inaccessible otherwise. Research also shows that bilingualism
    has cognitive benefits – it improves executive function and may delay the onset of dementia.
    Given all this, I believe foreign language education should be prioritised from primary school
    age, when children acquire languages most naturally.` },
  { q: "Do you think remote work is better than working in an office? Discuss both sides.",
    a: `Remote work offers genuine advantages – flexibility, no commuting time, and for many people
    improved work-life balance. For introverts or those with caring responsibilities, it can be
    transformative. However, I think fully remote work has real costs too: it makes spontaneous
    collaboration harder, can blur the boundary between work and personal life, and risks social
    isolation. Research suggests that a hybrid model – combining remote and office work – produces
    the best outcomes for productivity and employee satisfaction. The ideal arrangement probably
    varies considerably depending on the nature of the work and individual personality.` },
];

// ── SZABLONY PISEMNE ─────────────────────────────────────────────
const angPisemnaTemplates = [
  {
    title: 'Rozprawka For & Against (neutral)',
    content: `<strong style="color:var(--accent)">Wstęp:</strong> Introduce topic neutrally, no opinion.<br>
    <em>"Nowadays, the issue of... has become increasingly relevant."<br>
    "There is no doubt that... is one of the most debated topics of our time."<br>
    "The question of whether... has divided opinion significantly."</em><br><br>
    <strong style="color:var(--accent)">Akapit 1 – ZA (advantages):</strong><br>
    "One significant advantage of... is that..."<br>
    "Furthermore, it is worth noting that..."<br>
    "In addition, research suggests that..."<br><br>
    <strong style="color:var(--accent)">Akapit 2 – PRZECIW (disadvantages):</strong><br>
    "However, there are also considerable drawbacks to consider."<br>
    "On the other hand, critics point out that..."<br>
    "A further disadvantage is that..."<br><br>
    <strong style="color:var(--accent)">Zakończenie:</strong><br>
    "To conclude, while... has its merits, it also raises serious concerns."<br>
    "Ultimately, it depends on individual circumstances and priorities."<br>
    "On balance, the advantages seem to outweigh the disadvantages."` },
  {
    title: 'Rozprawka Opinion Essay',
    content: `<strong style="color:var(--accent)">Wstęp – TWOJA OPINIA:</strong><br>
    <em>"In my view, ... / I strongly believe that... / It is my firm conviction that..."<br>
    "Contrary to popular belief, I would argue that..."</em><br><br>
    <strong style="color:var(--accent)">Argumenty (2 akapity):</strong><br>
    "First and foremost, ... This is because..."<br>
    "Secondly, and perhaps more importantly,..."<br>
    "What is more, evidence suggests that..."<br><br>
    <strong style="color:var(--accent)">Kontrargument + zbicie:</strong><br>
    "Admittedly, some people argue that..."<br>
    "However, this argument fails to account for..."<br>
    "While it is true that..., the fact remains that..."<br><br>
    <strong style="color:var(--accent)">Zakończenie:</strong><br>
    "In conclusion, I firmly maintain that..."<br>
    "Having considered both sides, I remain convinced that..."` },
  {
    title: 'List formalny (skarga/prośba)',
    content: `<strong style="color:var(--accent)">Nagłówek:</strong><br>
    Dear Sir/Madam, (nieznana osoba)<br>
    Dear Mr/Ms [Name], (znana osoba)<br><br>
    <strong style="color:var(--accent)">Wstęp:</strong><br>
    "I am writing to complain about..."<br>
    "I am writing with regard to..."<br>
    "I would like to bring to your attention..."<br><br>
    <strong style="color:var(--accent)">Rozwinięcie:</strong><br>
    "On [date], I..."<br>
    "I was disappointed/concerned to find that..."<br>
    "Furthermore, I would like to point out that..."<br><br>
    <strong style="color:var(--accent)">Żądanie/prośba:</strong><br>
    "I would be grateful if you could..."<br>
    "I would appreciate it if you were to..."<br>
    "I look forward to receiving your prompt response."<br><br>
    <strong style="color:var(--accent)">Zakończenie:</strong><br>
    Yours faithfully, (Dear Sir/Madam)<br>
    Yours sincerely, (Dear Mr/Ms...)` },
  {
    title: 'Email nieformalny',
    content: `<strong style="color:var(--accent)">Nagłówek:</strong><br>
    Hi [Name]! / Hey [Name], / Dear [Name],<br><br>
    <strong style="color:var(--accent)">Wstęp:</strong><br>
    "How are you? I hope you're doing well."<br>
    "It was great to hear from you!"<br>
    "Sorry for not writing sooner – it's been crazy busy here."<br><br>
    <strong style="color:var(--accent)">Rozwinięcie:</strong><br>
    Casual connectors: "Anyway,..." / "By the way,..." / "Oh, and..." / "I was thinking..."<br><br>
    <strong style="color:var(--accent)">Zakończenie:</strong><br>
    "Write back soon!" / "Can't wait to hear from you!"<br>
    "Take care!" / "Lots of love," / "All the best,"` },
  {
    title: 'Artykuł / Blog',
    content: `<strong style="color:var(--accent)">Tytuł:</strong> Catchy, engaging.<br>
    Options: question ("Is social media ruining our lives?"), bold claim, number ("5 reasons why...").<br><br>
    <strong style="color:var(--accent)">Wstęp – hook:</strong><br>
    Surprising fact: "Did you know that the average person..."<br>
    Provocative question: "Have you ever wondered why...?"<br>
    Short anecdote: "Last week, I was walking down the street when..."<br><br>
    <strong style="color:var(--accent)">Rozwinięcie:</strong><br>
    Use subheadings. Address reader: "you", "we".<br>
    Include examples, statistics, anecdotes.<br>
    Rhetorical questions: "But is this really the case?"<br><br>
    <strong style="color:var(--accent)">Zakończenie:</strong><br>
    "Next time you..., stop and ask yourself..."<br>
    Call to action: "Share this article if you agree..."<br>
    Circular structure: return to opening hook.` },
  {
    title: 'Review (recenzja)',
    content: `<strong style="color:var(--accent)">Wstęp:</strong><br>
    "I recently had the pleasure/misfortune of [visiting/reading/watching]..."<br>
    Podaj podstawowe informacje: co, gdzie, kiedy.<br><br>
    <strong style="color:var(--accent)">Opis:</strong><br>
    "The [film/book/restaurant] revolves around..."<br>
    "What stands out most is..."<br>
    "Particularly impressive/disappointing is..."<br><br>
    <strong style="color:var(--accent)">Ocena:</strong><br>
    Positive: "All in all, this is a must-see/read/visit for anyone who..."<br>
    Negative: "Regrettably, this falls short of expectations because..."<br>
    Mixed: "Despite its flaws, this is worth [experiencing] for..."<br><br>
    <strong style="color:var(--accent)">Rekomendacja:</strong><br>
    "I would highly recommend this to..."<br>
    "I would advise against... unless..."` },
];

// ── EGZAMIN PRÓBNY ───────────────────────────────────────────────
const angEgzaminData = [
  { type:'abcd',
    context:`<em>Micro-credentials – short, focused qualifications – are gaining popularity as alternatives to traditional university degrees. Employers increasingly value specific, demonstrable skills over broad academic qualifications. The speed at which technology changes means workers need to upskill more frequently than a four-year degree cycle allows. Critics, however, argue that depth of knowledge risks being sacrificed for breadth of competencies, and that micro-credentials lack the critical thinking development that a full degree provides.</em>`,
    q:'1. According to the text, what is one argument AGAINST micro-credentials?',
    options:['A) They are more expensive than traditional degrees','B) They may not develop the depth of critical thinking that full degrees provide','C) Employers do not yet recognise them as valid qualifications','D) They take too long to complete given the pace of technological change'],
    correct:1, exp:"'Depth of knowledge risks being sacrificed... micro-credentials lack the critical thinking development that a full degree provides.'" },
  { type:'abcd', q:"2. 'The bridge ___ by the end of next year.' (COMPLETE – future passive)",
    options:['A) will complete','B) will be completed','C) is being completed','D) completes'],
    correct:1, exp:"Future Simple Passive: will be + past participle. 'By the end of next year' = future." },
  { type:'abcd', q:"3. Choose the formal equivalent of 'to get worse'.",
    options:['A) worsen','B) deteriorate','C) go downhill','D) get bad'], correct:1, exp:"DETERIORATE = formal/academic. Standard in essays and reports." },
  { type:'abcd', q:"4. Find the error: 'The committee has reached their decision.'",
    options:["A) 'has' should be 'have'","B) 'their' should be 'its' – collective noun","C) 'reached' should be 'made'","D) No error"],
    correct:1, exp:"In formal/American English, collective nouns (committee, team, government) take singular verb AND pronoun: 'has reached its decision'. British English may use plural." },
  { type:'abcd', q:"5. 'He denied ___ the money.' Choose the correct form.",
    options:['A) to steal','B) stealing','C) stolen','D) steal'],
    correct:1, exp:"DENY + gerund (-ing). Inne: admit/confess (to) + -ing, avoid + -ing, consider + -ing." },
  { type:'abcd', q:"6. Choose the correct word formation: 'The policy had an ___ effect on communities.' (DEVASTATE)",
    options:['A) devastated','B) devastating','C) devastation','D) devastatingly'],
    correct:1, exp:"DEVASTATING (participial adjective) modifies 'effect'. Devastating = powodujący dewastację (o sytuacji/wydarzeniu)." },
  { type:'abcd', q:"7. 'The more he practised, ___ he became.' Complete the sentence.",
    options:['A) the confident','B) the more confident','C) more confident','D) most confident'],
    correct:1, exp:"'The more... the more...' comparative structure. Both parts need 'the + comparative'." },
  { type:'open', q:"8. Rewrite using 'WISH': 'I regret not learning to play the piano as a child.'",
    exp:"I wish I had learned to play the piano as a child. (Wish + Past Perfect = regret about the past)" },
  { type:'abcd', q:"9. '___ he is talented, he struggles with deadlines.' Choose the connector.",
    options:['A) Despite','B) Because','C) Although','D) Therefore'],
    correct:2, exp:"ALTHOUGH + clause (subject + verb). DESPITE + noun/-ing. 'Although he is talented' = concession clause." },
  { type:'open', q:"10. Write 3–4 sentences giving your opinion on whether social media does more harm than good. Use formal language and at least ONE linking word.",
    exp:"In my view, social media has both significant benefits and serious drawbacks. While it enables instant communication and access to information, excessive use has been linked to anxiety and the spread of misinformation. Furthermore, social media platforms are increasingly being used to manipulate political opinion. On balance, however, I believe its impact depends largely on how responsibly it is used and regulated." },
];

// ── SŁUCHANIE – PYTANIA TYPOWE ───────────────────────────────────
const angSluchanieWskazowki = [
  { title: 'Techniki do słuchania (Matura)', content: `
    <strong>Przed słuchaniem:</strong><br>
    • Przeczytaj pytania i opcje – zidentyfikuj SŁOWA KLUCZOWE<br>
    • Przewiduj, jakich informacji szukasz (liczba? opinia? fakt?)<br>
    • Zwróć uwagę na różnicę między opcjami<br><br>
    <strong>Podczas słuchania:</strong><br>
    • Nie panikuj jeśli czegoś nie słyszysz – idź dalej<br>
    • Uważaj na PUŁAPKI: tekst często mówi coś, co brzmi jak opcja, ale jest błędne<br>
    • Odpowiedzi są PARAFRAZĄ, nie dosłownymi słowami z nagrania<br><br>
    <strong>Po słuchaniu:</strong><br>
    • Drugie słuchanie – sprawdź odpowiedzi<br>
    • Jeśli masz wątpliwości – wyeliminuj błędne opcje` },
  { title: 'Typowe pułapki w Czytaniu i Słuchaniu', content: `
    <strong>PUŁAPKA 1 – Zbyt dosłowne opcje:</strong><br>
    Opcja zawiera dokładne słowa z tekstu, ale ma INNE znaczenie.<br><br>
    <strong>PUŁAPKA 2 – Niekompletna informacja:</strong><br>
    Opcja jest częściowo prawdziwa, ale pomija kluczowy element.<br><br>
    <strong>PUŁAPKA 3 – Zbyt ogólna opcja:</strong><br>
    Opcja jest ogólna – ale tekst dotyczy konkretnego aspektu.<br><br>
    <strong>PUŁAPKA 4 – Opcja z tekstu, ale z innego akapitu:</strong><br>
    Prawdziwa informacja z tekstu – ale odnosząca się do innego pytania.<br><br>
    <strong>STRATEGIA: Eliminacja</strong><br>
    Wyeliminuj 2 wyraźnie błędne → wybierz spośród pozostałych.` },
];