// ── Czytanie ze zrozumieniem ─────────────────────────────
const angReadingData = [
  {
    type: "abcd",
    q: '<em>The concept of a "digital detox" has gained traction. A 2023 University of Bath study found that participants who abstained from social media for one week reported improved well-being, despite initially fearing they would miss out. Critics contend that complete disconnection is neither practical nor desirable.</em><br><br>What did the University of Bath study reveal?',
    options: [
      "A) Social media increases productivity",
      "B) Avoiding social media for a week improved well-being",
      "C) Technology causes permanent damage to attention spans",
      "D) Complete disconnection is recommended",
    ],
    correct: 1,
    exp: "'Reported improved well-being' – bezpośrednio w tekście.",
  },
  {
    type: "abcd",
    q: "<em>Urban farming is experiencing a renaissance. While critics point out that urban agriculture supplies only a fraction of caloric needs, supporters emphasise its psychological and community benefits: reduced stress, stronger neighbourhood bonds, and educational opportunities.</em><br><br>What is the main argument of critics regarding urban farming?",
    options: [
      "A) Too expensive",
      "B) Cannot supply enough calories",
      "C) Causes environmental problems",
      "D) Only for wealthy areas",
    ],
    correct: 1,
    exp: "'Supplies only a fraction of caloric needs' – główny argument krytyków.",
  },
  {
    type: "abcd",
    q: '<em>The "15-minute city" concept envisions urban areas where all essential services are accessible within a 15-minute walk. Paris has become the most prominent testing ground, with controversial results: some residents complain the concept privileges those who already live in well-serviced areas.</em><br><br>What criticism is raised about the 15-minute city?',
    options: [
      "A) Cycling infrastructure not built",
      "B) Too expensive",
      "C) May benefit residents in well-serviced areas more",
      "D) Mayor Hidalgo abandoned the project",
    ],
    correct: 2,
    exp: "'Privileges those who already live in well-serviced areas' – podana krytyka.",
  },
  {
    type: "abcd",
    q: "<em>An AI system detected early-stage lung cancer with 94% accuracy, outperforming the average 65% of radiologists. However, medical ethicists raise concerns: if an AI misdiagnoses a patient, who is responsible – the hospital, the software developer, or the physician?</em><br><br>What is the main ethical concern about AI in medicine?",
    options: [
      "A) AI is less accurate",
      "B) Too expensive",
      "C) Unclear who bears responsibility for wrong diagnosis",
      "D) Patients refuse AI diagnosis",
    ],
    correct: 2,
    exp: "'Who is responsible?' – centralne pytanie etyczne tekstu.",
  },
  {
    type: "abcd",
    q: '<em>The EU Green Claims Directive aims to crack down on vague terms such as "eco-friendly" and "sustainable" unless companies provide verifiable evidence. Campaigners warn that enforcement will be challenging for global corporations with supply chains spanning dozens of countries.</em><br><br>What is the purpose of the EU Green Claims Directive?',
    options: [
      "A) Ban all environmental advertising",
      "B) Require companies to provide evidence for environmental claims",
      "C) Make products carbon neutral by 2030",
      "D) Penalise consumers",
    ],
    correct: 1,
    exp: "'Verifiable evidence' for environmental claims – cel dyrektywy.",
  },
  {
    type: "abcd",
    q: "<em>Deep-sea mining opponents, including some car manufacturers, have called for a moratorium, citing the risk of irreversible damage to deep-sea ecosystems. Scientists estimate fewer than 5% of the ocean floor has been mapped in detail.</em><br><br>Why have some car manufacturers opposed deep-sea mining?",
    options: [
      "A) Increases cost of EVs",
      "B) Competes with supply chains",
      "C) Fear permanent harm to ocean ecosystems",
      "D) Incompatible minerals",
    ],
    correct: 2,
    exp: "'Risk of irreversible damage to deep-sea ecosystems'.",
  },
];

// ── Use of English ───────────────────────────────────────
const angGramatykaData = [
  {
    type: "abcd",
    q: "Choose the correct form: 'By the time she arrived, we ___ for two hours.'",
    options: [
      "A) waited",
      "B) have been waiting",
      "C) had been waiting",
      "D) were waiting",
    ],
    correct: 2,
    exp: "Past Perfect Continuous – czynność trwająca przed inną czynnością przeszłą.",
  },
  {
    type: "abcd",
    q: "Which is a correct Second Conditional?",
    options: [
      "A) If I study, I will pass.",
      "B) If I had studied, I would pass.",
      "C) If I studied, I would pass.",
      "D) If I study, I would pass.",
    ],
    correct: 2,
    exp: "2nd Conditional: If + past simple, would + inf. (hipoteza teraźniejsza).",
  },
  {
    type: "abcd",
    q: "'The new policy had a significant ___ on the economy.'",
    options: ["A) affect", "B) effect", "C) effects", "D) affecting"],
    correct: 1,
    exp: "Effect = rzeczownik. Affect = czasownik.",
  },
  {
    type: "abcd",
    q: "'She succeeded ___ passing the exam on her first attempt.'",
    options: ["A) to", "B) at", "C) in", "D) for"],
    correct: 2,
    exp: "Succeed IN + gerund.",
  },
  {
    type: "abcd",
    q: "'Despite the rain, she ___ to finish the marathon.'",
    options: ["A) managed", "B) succeeded", "C) achieved", "D) accomplished"],
    correct: 0,
    exp: "Managed TO + infinitive.",
  },
  {
    type: "abcd",
    q: "'The report ___ by the team last week.' (passive)",
    options: [
      "A) was submitted",
      "B) has been submitted",
      "C) had submitted",
      "D) is submitting",
    ],
    correct: 0,
    exp: "Past simple passive: was + past participle. 'Last week' = przeszłość.",
  },
  {
    type: "abcd",
    q: "Which phrase introduces a CONTRAST?",
    options: [
      "A) Furthermore",
      "B) As a result",
      "C) Nevertheless",
      "D) In addition",
    ],
    correct: 2,
    exp: "Nevertheless = kontrast. Furthermore/In addition = dodanie. As a result = skutek.",
  },
  {
    type: "abcd",
    q: "'Not only ___ the concert, but she also met the band backstage.'",
    options: [
      "A) she enjoyed",
      "B) did she enjoy",
      "C) she did enjoy",
      "D) enjoyed she",
    ],
    correct: 1,
    exp: "Inwersja po 'Not only': Not only + aux. + podmiot + czasownik.",
  },
  {
    type: "abcd",
    q: "Choose the correct word: 'The scientists made a groundbreaking ___ in cancer research.'",
    options: ["A) breakout", "B) breakthrough", "C) breakdown", "D) breakaway"],
    correct: 1,
    exp: "Breakthrough = przełomowe odkrycie.",
  },
  {
    type: "abcd",
    q: "'I ___ here since 2018.'",
    options: ["A) lived", "B) have lived", "C) was living", "D) had lived"],
    correct: 1,
    exp: "Present Perfect + since = czynność trwająca od przeszłości do teraz.",
  },
  {
    type: "abcd",
    q: "She asked me where ___.",
    options: ["A) do I live", "B) did I live", "C) I lived", "D) I live"],
    correct: 2,
    exp: "Mowa zależna: backshift → I live → I lived.",
  },
  {
    type: "abcd",
    q: "Choose the formal equivalent of 'to find out':",
    options: [
      "A) to check out",
      "B) to look into",
      "C) to ascertain",
      "D) to figure out",
    ],
    correct: 2,
    exp: "Ascertain = ustalić z pewnością (formal/academic).",
  },
  {
    type: "abcd",
    q: "'I wish I ___ harder last year.'",
    options: ["A) study", "B) studied", "C) had studied", "D) would study"],
    correct: 2,
    exp: "Wish + Past Perfect = żal dotyczący przeszłości.",
  },
  {
    type: "abcd",
    q: "Choose the correct collocation: '___ a conclusion'",
    options: ["A) do", "B) make", "C) reach", "D) find"],
    correct: 2,
    exp: "'Reach a conclusion' – stałe wyrażenie.",
  },
  {
    type: "abcd",
    q: "Choose the correct word formation (DETERMINE): 'She showed great ___.'",
    options: [
      "A) determinate",
      "B) determining",
      "C) determination",
      "D) determined",
    ],
    correct: 2,
    exp: "DETERMINATION (rzeczownik). Sufiks -ation.",
  },
];

// ── Fiszki ───────────────────────────────────────────────
const angFiszki = [
  {
    front: "Sophisticated",
    back: '(adj.) Complex, refined.\n"She made a sophisticated argument."\nSyn: nuanced, refined\nAnt: naive, simplistic',
  },
  {
    front: "Controversial",
    back: '(adj.) Causing disagreement.\n"Capital punishment is controversial."\nSyn: contentious, debatable',
  },
  {
    front: "Furthermore",
    back: '(adv.) In addition; moreover.\n"The policy is inefficient. Furthermore, it is unfair."\nSyn: moreover, what is more',
  },
  {
    front: "Nevertheless",
    back: '(adv.) Despite this; however.\n"The task was hard; nevertheless, she succeeded."\nSyn: nonetheless, yet, still',
  },
  {
    front: "Detrimental",
    back: '(adj.) Harmful, damaging.\n"Smoking is detrimental to health."\nCollocations: detrimental effect/impact ON',
  },
  {
    front: "Indispensable",
    back: '(adj.) Absolutely necessary.\n"Clean water is indispensable."\nSyn: essential, vital\nAnt: dispensable',
  },
  {
    front: "Alleviate",
    back: '(v.) Make less severe.\n"Exercise can alleviate stress."\nSyn: relieve, ease\nCollocations: alleviate pain/poverty',
  },
  {
    front: "Exacerbate",
    back: '(v.) Make something worse.\n"The drought exacerbated the crisis."\nSyn: worsen, aggravate\nAnt: alleviate, improve',
  },
  {
    front: "Inevitable",
    back: '(adj.) Certain to happen.\n"Conflict seemed inevitable."\nSyn: unavoidable, inescapable',
  },
  {
    front: "Proponent",
    back: '(n.) A supporter or advocate.\n"Proponents of nuclear energy argue it is safe."\nSyn: advocate, champion\nAnt: opponent, critic',
  },
  {
    front: "Second conditional",
    back: 'If + past simple, would + infinitive.\nHypothetical present: "If I had more time, I would travel."',
  },
  {
    front: "Passive – present perfect",
    back: 'Subject + have/has + been + past participle.\n"The report has been submitted."',
  },
];

// ── Pytania ustne ────────────────────────────────────────
const angUstnaData = [
  {
    q: "What do you think about social media? Is it more beneficial or harmful?",
    a: "I believe social media has both advantages and disadvantages. While it enables people to stay connected and access information instantly, it can also contribute to anxiety and misinformation. On balance, its benefits outweigh the drawbacks when used responsibly.",
  },
  {
    q: "Would you prefer to live in a big city or in the countryside? Give reasons.",
    a: "Personally, I would prefer a city due to career opportunities and cultural diversity. However, I fully understand the appeal of the countryside – peace, clean air and a connection with nature are invaluable for mental health.",
  },
  {
    q: "Do you think environmental protection should be a top priority for governments?",
    a: "Absolutely. Climate change is the defining challenge of our generation and governments have both the resources and the mandate to act. Without strong regulation, individual efforts alone are insufficient.",
  },
  {
    q: "What role does technology play in education today?",
    a: "Technology has transformed education by making information more accessible and learning more interactive. That said, excessive screen time and digital distraction are real concerns that must be addressed.",
  },
  {
    q: "Should the voting age be lowered to 16? Justify your answer.",
    a: "I have mixed feelings. Young people are directly affected by decisions on climate and education and deserve a voice. However, at 16 many lack the life experience for fully informed political choices.",
  },
  {
    q: "Is it important to learn foreign languages in the modern world?",
    a: "Undoubtedly. English is indispensable for global communication. Moreover, learning languages develops cognitive flexibility and cultural empathy – skills valuable far beyond the classroom.",
  },
  {
    q: "Do you think space exploration is worth the investment?",
    a: "Yes. Space exploration drives technological innovation that benefits everyday life – from medical devices to satellite navigation. It also addresses fundamental questions about humanity's long-term future.",
  },
  {
    q: "How has the internet changed the way people read and consume information?",
    a: "The internet increased the speed and quantity of information available, but arguably at the cost of depth. People skim rather than read carefully, and media literacy has never been more important.",
  },
  {
    q: "What are the advantages and disadvantages of remote work?",
    a: "Remote work offers flexibility and eliminates commuting time, but can blur the work-life boundary and lead to isolation. A hybrid model combining both approaches seems ideal.",
  },
  {
    q: "Is it possible to be happy without money? Give examples.",
    a: "Research shows that beyond a certain income threshold, money's relationship with happiness weakens. The happiest people tend to have strong relationships, purpose and good health – none of which money can directly buy.",
  },
];

// ── Szablony pisemne ─────────────────────────────────────
const angPisemnaTemplates = [
  {
    title: "Rozprawka For & Against",
    content: `<b>Wstęp:</b> Introduce the topic neutrally.<br><em>"Nowadays, the issue of... has become increasingly relevant..."</em><br><br>
<b>Akapit ZA:</b> "One significant advantage is... Furthermore... In addition..."<br><br>
<b>Akapit PRZECIW:</b> "However, there are considerable drawbacks... On the other hand..."<br><br>
<b>Zakończenie:</b> "To conclude, while... has its merits, it also... Ultimately, it depends on..."`,
  },
  {
    title: "Rozprawka Opinion Essay",
    content: `<b>Wstęp:</b> State your opinion clearly.<br><em>"In my view... / I strongly believe that..."</em><br><br>
<b>Argumenty (2–3 akapity):</b> "First and foremost... Secondly... What is more..."<br><br>
<b>Kontrargument + zbicie:</b> "Admittedly... However, this fails to consider..."<br><br>
<b>Zakończenie:</b> "In conclusion, I firmly maintain that..."`,
  },
  {
    title: "List formalny",
    content: `<b>Nagłówek:</b> Dear Sir/Madam, / Dear Mr/Ms [Name],<br><br>
<b>Wstęp:</b> "I am writing to... / I would like to bring to your attention..."<br><br>
<b>Rozwinięcie:</b> Jasne akapity. "Furthermore," "Moreover," "I would also like to point out..."<br><br>
<b>Prośba:</b> "I would be grateful if you could... / I would appreciate it if..."<br><br>
<b>Zakończenie:</b> "I look forward to hearing from you at your earliest convenience."<br><br>
<b>Podpis:</b> Yours faithfully, (Sir/Madam) / Yours sincerely, (imię znane)`,
  },
  {
    title: "Artykuł / Blog",
    content: `<b>Tytuł:</b> Catchy – question or bold statement.<br><br>
<b>Wstęp – hook:</b> Question, statistic or surprising fact.<br><em>"Have you ever wondered why...?"</em><br><br>
<b>Rozwinięcie:</b> Subheadings, rhetorical questions, direct address ("you").<br>"What makes this especially interesting is..."<br><br>
<b>Zakończenie:</b> Call to action or thought-provoking sentence.<br><em>"Next time you..., ask yourself: ..."</em>`,
  },
];

// ── Egzamin próbny ───────────────────────────────────────
const angEgzaminData = [
  {
    type: "abcd",
    q: "1. 'By the time I arrived, she ___ already ___ for an hour.'",
    options: [
      "A) has/been waiting",
      "B) had/been waiting",
      "C) was/waiting",
      "D) had/waited",
    ],
    correct: 1,
    exp: "Past Perfect Continuous: had+been+-ing.",
  },
  {
    type: "abcd",
    q: "2. 'The new bridge ___ by the end of next year.' (passive)",
    options: [
      "A) will complete",
      "B) will be completed",
      "C) is being completed",
      "D) completes",
    ],
    correct: 1,
    exp: "Future passive: will be + past participle.",
  },
  {
    type: "abcd",
    q: "3. Which word is FORMAL for 'to get worse'?",
    options: ["A) worsen", "B) deteriorate", "C) go downhill", "D) get worse"],
    correct: 1,
    exp: "Deteriorate – formal/academic.",
  },
  {
    type: "abcd",
    q: "4. '___ the government invested more, pollution would decrease.' (2nd conditional)",
    options: [
      "A) If/invests",
      "B) If/would invest",
      "C) If/invested",
      "D) If/had invested",
    ],
    correct: 2,
    exp: "2nd Conditional: If + past simple.",
  },
  {
    type: "abcd",
    q: "<em>Micro-credentials – short focused qualifications – are popular as workers need to upskill more frequently than a four-year degree cycle allows. Employers value specific, demonstrable skills over broad academic qualifications.</em><br><br>5. Why are micro-credentials popular?",
    options: [
      "A) Cheaper than degrees",
      "B) Allow workers to acquire specific skills quickly in a changing job market",
      "C) Employers prefer them to all qualifications",
      "D) Replace work experience",
    ],
    correct: 1,
    exp: "'Workers need to upskill more frequently' + 'employers value specific skills'.",
  },
  {
    type: "abcd",
    q: "6. 'The policy had an ___ effect on communities.' (DEVASTATE)",
    options: [
      "A) devastated",
      "B) devastating",
      "C) devastation",
      "D) devastatingly",
    ],
    correct: 1,
    exp: "DEVASTATING – przymiotnik. Sufiks -ing.",
  },
  {
    type: "abcd",
    q: "7. He said, 'I will call you tomorrow.' → He said that he ___",
    options: [
      "A) will call me tomorrow",
      "B) would call me the next day",
      "C) called me tomorrow",
      "D) is calling me the next day",
    ],
    correct: 1,
    exp: "Mowa zależna: will→would, tomorrow→the next day.",
  },
  {
    type: "open",
    q: "8. Write 2–3 sentences on whether social media does more harm than good. Use formal language.",
    exp: "In my view, social media has both benefits and drawbacks. While it enables instant communication, excessive use has been linked to anxiety and misinformation. On balance, its impact depends on how responsibly it is used.",
  },
  {
    type: "abcd",
    q: "9. '___ the heavy traffic, she arrived on time.'",
    options: ["A) Because of", "B) Despite", "C) Although", "D) Due to"],
    correct: 1,
    exp: "Despite + noun/gerund (kontrast). Although + zdanie.",
  },
  {
    type: "abcd",
    q: "10. Choose the correct collocation: 'to ___ a solution to a problem'",
    options: ["A) find", "B) make", "C) do", "D) create"],
    correct: 0,
    exp: "'Find a solution' – standardowa kolokacja.",
  },
];
