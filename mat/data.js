// ── Algebra i ciągi ──────────────────────────────────────
const matAlgebraData = [
  {
    type: "num",
    q: "f(x) = 3x² − 2x + 5. Oblicz f'(1).",
    correct: "4",
    exp: "f'(x)=6x−2. f'(1)=4.",
  },
  {
    type: "num",
    q: "Suma S₁₀ ciągu arytm.: a₁=3, d=2.",
    correct: "120",
    exp: "a₁₀=3+9·2=21. S₁₀=10·(3+21)/2=120.",
  },
  {
    type: "num",
    q: "10. wyraz ciągu arytm.: a₁=2, d=4.",
    correct: "38",
    exp: "a₁₀=2+9·4=38.",
  },
  {
    type: "num",
    q: "S₅ ciągu geometr.: a₁=3, q=2.",
    correct: "93",
    exp: "S₅=3·(2⁵−1)/(2−1)=93.",
  },
  {
    type: "num",
    q: "6. wyraz ciągu geometr.: a₁=2, q=3.",
    correct: "486",
    exp: "a₆=2·3⁵=486.",
  },
  { type: "num", q: "log₂(64) = ?", correct: "6", exp: "2⁶=64." },
  { type: "num", q: "log₃(81) = ?", correct: "4", exp: "3⁴=81." },
  { type: "num", q: "log₁₀(0,001) = ?", correct: "-3", exp: "10⁻³=0,001." },
  {
    type: "num",
    q: "Suma pierwiastków równania 2x²−5x+3=0.",
    correct: "2.5",
    exp: "Wzory Vièty: x₁+x₂=5/2=2,5.",
  },
  {
    type: "num",
    q: "Minimum f(x)=x²−4x+7.",
    correct: "3",
    exp: "x_w=2, f(2)=4−8+7=3.",
  },
  {
    type: "abcd",
    q: "Zbiór rozwiązań x²−5x+6 ≤ 0:",
    options: ["A) x≤2 lub x≥3", "B) [2; 3]", "C) (−∞;2)", "D) x<3"],
    correct: 1,
    exp: "(x−2)(x−3)≤0 → [2;3].",
  },
  {
    type: "abcd",
    q: "Rozwiązanie układu 2x+y=7, x−y=2:",
    options: ["A) x=2,y=3", "B) x=3,y=1", "C) x=4,y=−1", "D) x=1,y=5"],
    correct: 1,
    exp: "Dodaj: 3x=9→x=3, y=1.",
  },
  { type: "num", q: "(2³·2⁴)/2⁵ = ?", correct: "4", exp: "2⁷/2⁵=2²=4." },
  { type: "num", q: "√144 + √25 = ?", correct: "17", exp: "12+5=17." },
  {
    type: "num",
    q: "f'(2) dla f(x)=4x³−3x²+2x−7.",
    correct: "34",
    exp: "f'(x)=12x²−6x+2. f'(2)=48−12+2=38. Sprawdź własne obliczenia!",
  },
];

// ── Geometria ────────────────────────────────────────────
const matGeometriaData = [
  {
    type: "num",
    q: "Pole trójkąta: podstawa=12, wysokość=7.",
    correct: "42",
    exp: "P=½·12·7=42.",
  },
  {
    type: "num",
    q: "Pole koła r=5. Podaj mnożnik π (np. 25).",
    correct: "25",
    exp: "P=π·25.",
  },
  {
    type: "num",
    q: "Objętość walca r=4, h=5. Podaj mnożnik π.",
    correct: "80",
    exp: "V=π·16·5=80π.",
  },
  {
    type: "num",
    q: "Objętość kuli r=3. Podaj mnożnik π.",
    correct: "36",
    exp: "V=(4/3)π·27=36π.",
  },
  {
    type: "num",
    q: "Objętość ostrosłupa: podstawa kwadrat 6, h=4.",
    correct: "48",
    exp: "V=(1/3)·36·4=48.",
  },
  {
    type: "num",
    q: "Przekątna prostokąta: boki 6 i 8.",
    correct: "10",
    exp: "d=√(36+64)=10.",
  },
  {
    type: "num",
    q: "Odległość A(1,2) do B(4,6).",
    correct: "5",
    exp: "d=√(9+16)=5.",
  },
  {
    type: "num",
    q: "Pole boczne walca r=3, h=7. Podaj mnożnik π.",
    correct: "42",
    exp: "Pb=2π·3·7=42π.",
  },
  {
    type: "abcd",
    q: "Równanie okręgu o środku (2,−3) i r=5:",
    options: [
      "A) (x−2)²+(y+3)²=25",
      "B) (x+2)²+(y−3)²=25",
      "C) (x−2)²+(y−3)²=5",
      "D) (x+2)²+(y+3)²=25",
    ],
    correct: 0,
    exp: "(x−p)²+(y−q)²=r².",
  },
  {
    type: "abcd",
    q: "Kąt między y=2x+1 i y=−½x+3:",
    options: ["A) 45°", "B) 60°", "C) 90°", "D) 30°"],
    correct: 2,
    exp: "a₁·a₂=2·(−½)=−1 → prostopadłe.",
  },
  {
    type: "num",
    q: "Pole rombu: przekątne 8 i 6.",
    correct: "24",
    exp: "P=(8·6)/2=24.",
  },
  {
    type: "abcd",
    q: "sin(30°) =",
    options: ["A) √3/2", "B) 1/2", "C) √2/2", "D) 1"],
    correct: 1,
    exp: "sin30°=1/2.",
  },
  {
    type: "num",
    q: "Przeciwprostokątna trójkąta: przyprostokątne 5 i 12.",
    correct: "13",
    exp: "c=√(25+144)=13.",
  },
];

// ── Analiza ──────────────────────────────────────────────
const matAnalizaData = [
  {
    type: "num",
    q: "Minimum f(x)=x²−6x+8. Podaj wartość minimum.",
    correct: "-1",
    exp: "f'(x)=2x−6=0→x=3. f(3)=9−18+8=−1.",
  },
  {
    type: "abcd",
    q: "Dla jakiego x funkcja f(x)=−x²+4x−1 ma maximum?",
    options: ["A) x=−2", "B) x=2", "C) x=4", "D) x=1"],
    correct: 1,
    exp: "f'(x)=−2x+4=0→x=2.",
  },
  {
    type: "num",
    q: "f'(3) dla f(x)=x³−3x².",
    correct: "9",
    exp: "f'(x)=3x²−6x. f'(3)=27−18=9.",
  },
  {
    type: "num",
    q: "Granica lim(x→∞)(3x²+2x)/(x²−1).",
    correct: "3",
    exp: "Dziel przez x²: →3.",
  },
  { type: "num", q: "∫₀² 2x dx = ?", correct: "4", exp: "[x²]₀²=4−0=4." },
  {
    type: "num",
    q: "Suma pierwiastków f(x)=x²−4.",
    correct: "0",
    exp: "x=±2. Suma: 0.",
  },
  {
    type: "abcd",
    q: "Funkcja f(x)=x³ jest:",
    options: ["A) Parzysta", "B) Nieparzysta", "C) Ani-ani", "D) Stała"],
    correct: 1,
    exp: "f(−x)=−f(x) → nieparzysta.",
  },
  {
    type: "num",
    q: "Asymptota pozioma f(x)=(2x+1)/(x−3). Podaj y.",
    correct: "2",
    exp: "lim→∞ = 2.",
  },
  {
    type: "abcd",
    q: "Punkt przecięcia y=2x−1 i y=−x+5:",
    options: ["A) (2,3)", "B) (3,5)", "C) (2,5)", "D) (1,3)"],
    correct: 0,
    exp: "2x−1=−x+5→x=2,y=3.",
  },
  {
    type: "num",
    q: "f'(0) dla f(x)=eˣ.",
    correct: "1",
    exp: "(eˣ)'=eˣ. f'(0)=1.",
  },
];

// ── Trygonometria ────────────────────────────────────────
const matTrygoData = [
  {
    type: "abcd",
    q: "sin(90°) =",
    options: ["A) 0", "B) 1", "C) √2/2", "D) √3/2"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "cos(60°) =",
    options: ["A) 1/2", "B) √3/2", "C) √2/2", "D) 0"],
    correct: 0,
    exp: "Trójkąt 30-60-90.",
  },
  {
    type: "num",
    q: "a=c·sin(α). c=10, α=30°. Oblicz a.",
    correct: "5",
    exp: "a=10·0,5=5.",
  },
  {
    type: "num",
    q: "π/3 radianów = ile stopni?",
    correct: "60",
    exp: "180°/3=60°.",
  },
  {
    type: "abcd",
    q: "tg(α) =",
    options: ["A) cos/sin", "B) sin·cos", "C) sin/cos", "D) 1/cos"],
    correct: 2,
  },
  {
    type: "num",
    q: "sin(x)=1/2 w [0°,360°]. Podaj sumę obu rozwiązań (w stopniach).",
    correct: "180",
    exp: "x=30° lub x=150°. Suma=180°.",
  },
  {
    type: "num",
    q: "270° = ile radianów? Podaj z 2 miejscami (np. 4.71).",
    correct: "4.71",
    exp: "270·π/180=3π/2≈4,71.",
  },
];

// ── Statystyka ───────────────────────────────────────────
const matStatystykaData = [
  {
    type: "num",
    q: "P(liczba parzysta na kostce 6-ściennej). Wpisz ułamek dziesiętny.",
    correct: "0.5",
    exp: "3/6=0,5.",
  },
  {
    type: "num",
    q: "Średnia zbioru {4,6,8,10,12}.",
    correct: "8",
    exp: "40/5=8.",
  },
  {
    type: "abcd",
    q: "P(A)=0,3, P(B)=0,4, niezależne. P(A∩B)=?",
    options: ["A) 0,7", "B) 0,12", "C) 0,1", "D) 0,58"],
    correct: 1,
    exp: "0,3·0,4=0,12.",
  },
  {
    type: "num",
    q: "Na ile sposobów można ustawić 4 osoby w kolejce?",
    correct: "24",
    exp: "4!=24.",
  },
  { type: "num", q: "C(5,2) = ?", correct: "10", exp: "5!/(2!·3!)=10." },
  {
    type: "num",
    q: "Mediana {3,1,4,1,5,9,2,6} po posortowaniu.",
    correct: "3.5",
    exp: "Posort.: {1,1,2,3,4,5,6,9}. Mediana=(3+4)/2=3,5.",
  },
];

// ── Fiszki ───────────────────────────────────────────────
const matFiszki = [
  { front: "(xⁿ)' = ?", back: "n · xⁿ⁻¹\nPrzykład: (x⁵)'=5x⁴, (x²)'=2x" },
  { front: "Suma ciągu arytm. Sₙ", back: "Sₙ = n·(a₁+aₙ)/2\naₙ = a₁+(n−1)·d" },
  {
    front: "Suma ciągu geometr. Sₙ",
    back: "Sₙ = a₁·(qⁿ−1)/(q−1)\naₙ = a₁·qⁿ⁻¹",
  },
  {
    front: "Równanie okręgu",
    back: "(x−p)²+(y−q)²=r²\nŚrodek: (p,q), promień: r",
  },
  {
    front: "Równoległe i prostopadłe",
    back: "Równoległe: a₁=a₂\nProstopadłe: a₁·a₂=−1",
  },
  {
    front: "Objętości brył",
    back: "Walec: πr²h\nKula: (4/3)πr³\nStożek: (1/3)πr²h\nOstrosłup: (1/3)Pp·h",
  },
  {
    front: "Pochodne podstawowe",
    back: "(sin x)'=cos x\n(cos x)'=−sin x\n(eˣ)'=eˣ\n(ln x)'=1/x",
  },
  {
    front: "Wyznaczanie ekstremów",
    back: "1. f'(x)=0\n2. Sprawdź znak f'(x)\n   f''(x)>0 → min, f''(x)<0 → max",
  },
  {
    front: "Logarytmy – wzory",
    back: "logₐ(xy)=logₐx+logₐy\nlogₐ(x/y)=logₐx−logₐy\nlogₐ(xⁿ)=n·logₐx",
  },
  {
    front: "Wartości trygonometryczne",
    back: "sin: 0, 1/2, √2/2, √3/2, 1\ncos: 1, √3/2, √2/2, 1/2, 0\nDla kątów: 0°,30°,45°,60°,90°",
  },
  {
    front: "Kombinatoryka",
    back: "n! – permutacja\nC(n,k)=n!/(k!·(n−k)!) – kombinacja\nReguła mnożenia: n₁·n₂·...·nₖ",
  },
  {
    front: "Wzory skróconego mnożenia",
    back: "(a+b)²=a²+2ab+b²\n(a−b)²=a²−2ab+b²\n(a+b)(a−b)=a²−b²",
  },
];

// ── Egzamin próbny ───────────────────────────────────────
const matEgzaminData = [
  {
    type: "num",
    q: "1. f'(2) dla f(x)=x³−3x+1.",
    correct: "9",
    exp: "f'(x)=3x²−3. f'(2)=12−3=9.",
  },
  {
    type: "num",
    q: "2. S₈ ciągu arytm.: a₁=3, d=5.",
    correct: "164",
    exp: "a₈=38. S₈=8·(3+38)/2=164.",
  },
  {
    type: "num",
    q: "3. Pole trójkąta: boki 6 i 8, kąt 90°.",
    correct: "24",
    exp: "P=½·6·8=24.",
  },
  {
    type: "abcd",
    q: "4. x²−7x+12≤0:",
    options: ["A) [3;4]", "B) (−∞;3]∪[4;+∞)", "C) [−4;−3]", "D) (3;4)"],
    correct: 0,
    exp: "(x−3)(x−4)≤0→[3;4].",
  },
  { type: "num", q: "5. log₂(32) = ?", correct: "5", exp: "2⁵=32." },
  {
    type: "num",
    q: "6. Objętość kuli r=6. Podaj mnożnik π.",
    correct: "288",
    exp: "(4/3)·216=288.",
  },
  {
    type: "num",
    q: "7. P(wyrzucenie 6 na kostce). Wpisz ułamek dziesiętny (3 miejsca).",
    correct: "0.167",
    exp: "1/6≈0,167.",
  },
  {
    type: "abcd",
    q: "8. Asymptota pozioma f(x)=(3x−1)/(x+2):",
    options: ["A) y=3", "B) y=−1", "C) y=0", "D) y=1/2"],
    correct: 0,
    exp: "lim→∞=3.",
  },
  {
    type: "num",
    q: "9. f(π/6) dla f(x)=2sin(x). (sin(π/6)=0,5)",
    correct: "1",
    exp: "2·0,5=1.",
  },
  {
    type: "num",
    q: "10. x-koordynata przecięcia y=3x−2 z osią OX. (2 miejsca po przecinku)",
    correct: "0.67",
    exp: "0=3x−2→x=2/3≈0,67.",
  },
];
