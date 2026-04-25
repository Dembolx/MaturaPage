const fizMechanika = [
  {
    type: "num",
    q: "m=4 kg, a=5 m/s². Oblicz F.",
    correct: "20",
    exp: "F=m·a=4·5=20 N.",
  },
  {
    type: "num",
    q: "m=3 kg, v=10 m/s. Oblicz Eₖ.",
    correct: "150",
    exp: "Eₖ=½·3·100=150 J.",
  },
  {
    type: "num",
    q: "m=2 kg, g=10, h=5 m. Oblicz Ep.",
    correct: "100",
    exp: "Ep=mgh=100 J.",
  },
  {
    type: "num",
    q: "m=5 kg, v=8 m/s. Oblicz pęd p.",
    correct: "40",
    exp: "p=mv=40 kg·m/s.",
  },
  {
    type: "num",
    q: "v=20 m/s, t=15 s. Oblicz s (ruch jednostajny).",
    correct: "300",
    exp: "s=vt=300 m.",
  },
  {
    type: "num",
    q: "v₀=0, a=3 m/s², t=6 s. Oblicz s.",
    correct: "54",
    exp: "s=½at²=½·3·36=54 m.",
  },
  {
    type: "num",
    q: "v₀=5 m/s, a=2 m/s², t=4 s. Oblicz v.",
    correct: "13",
    exp: "v=v₀+at=5+8=13 m/s.",
  },
  {
    type: "num",
    q: "Ciało spada z h=20 m. Czas spadania? g=10 m/s²",
    correct: "2",
    exp: "h=½gt²→t=√(2h/g)=2 s.",
  },
  {
    type: "num",
    q: "F=500 N, v=20 m/s. Moc P w W.",
    correct: "10000",
    exp: "P=Fv=10000 W.",
  },
  {
    type: "abcd",
    q: "Zasada zachowania pędu – w układzie izolowanym:",
    options: ["A) Eₖ=const", "B) Σp=const", "C) Prędkości=const", "D) Siły=0"],
    correct: 1,
  },
];

const fizTermodynamika = [
  {
    type: "abcd",
    q: "I zasada termodynamiki: ΔU = ?",
    options: ["A) Q+W", "B) Q−W", "C) W−Q", "D) Q·W"],
    correct: 1,
    exp: "ΔU=Q−W. Energia wewnętrzna = ciepło − praca.",
  },
  {
    type: "num",
    q: "T₁=600 K, T₂=300 K. Sprawność η silnika (w %).",
    correct: "50",
    exp: "η=(1−300/600)·100%=50%.",
  },
  {
    type: "abcd",
    q: "W przemianie izotermicznej stała jest:",
    options: ["A) ciśnienie", "B) objętość", "C) temperatura", "D) entropia"],
    correct: 2,
  },
  {
    type: "abcd",
    q: "II zasada termodynamiki: entropia układu izolowanego:",
    options: [
      "A) maleje",
      "B) jest stała",
      "C) nie może maleć",
      "D) wzrasta tylko przy grzaniu",
    ],
    correct: 2,
  },
  {
    type: "abcd",
    q: "Przemiana izochoryczna to przemiana, w której stała jest:",
    options: ["A) temperatura", "B) objętość", "C) ciśnienie", "D) masa"],
    correct: 1,
  },
];

const fizElektrycznosc = [
  {
    type: "num",
    q: "U=12 V, R=4 Ω. Oblicz I.",
    correct: "3",
    exp: "I=U/R=3 A.",
  },
  {
    type: "num",
    q: "U=220 V, I=5 A. Oblicz P.",
    correct: "1100",
    exp: "P=UI=1100 W.",
  },
  {
    type: "num",
    q: "R₁=3Ω, R₂=5Ω, R₃=2Ω szeregowo. R_całk.",
    correct: "10",
    exp: "R=3+5+2=10 Ω.",
  },
  {
    type: "num",
    q: "R₁=6Ω, R₂=3Ω równolegle. R_całk.",
    correct: "2",
    exp: "1/R=1/6+1/3=1/2→R=2 Ω.",
  },
  {
    type: "abcd",
    q: "Siła Coulomba maleje gdy:",
    options: [
      "A) odległość maleje",
      "B) odległość rośnie",
      "C) ładunek rośnie",
      "D) temperatura rośnie",
    ],
    correct: 1,
    exp: "F=k·q₁q₂/r² – maleje z kwadratem odległości.",
  },
  {
    type: "num",
    q: "P=2000 W, t=3 h. Energia W w dżulach.",
    correct: "21600000",
    exp: "W=P·t=2000·10800=21 600 000 J.",
  },
];

const fizJadrowa = [
  {
    type: "abcd",
    q: "Po czasie 2·T½ pozostaje jąder:",
    options: ["A) 25%", "B) 50%", "C) 75%", "D) 12,5%"],
    correct: 0,
    exp: "(½)²=1/4=25%.",
  },
  {
    type: "abcd",
    q: "E=Δm·c² to wzór na:",
    options: ["A) pęd", "B) energię związania jądra", "C) ciepło", "D) moc"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "Rozpad α – co emituje jądro?",
    options: [
      "A) elektron",
      "B) foton gamma",
      "C) jądro helu ⁴₂He",
      "D) neutron",
    ],
    correct: 2,
  },
  {
    type: "num",
    q: "T½=10 lat. Po 30 latach pozostaje ile % N₀?",
    correct: "12.5",
    exp: "3·T½. (½)³=12,5%.",
  },
];

const fizFiszki = [
  {
    front: "II zasada Newtona",
    back: "F = m·a\n[N] = kg·m/s²\nPrzykład: F=10N, m=2kg → a=5 m/s²",
  },
  { front: "Energia kinetyczna", back: "Eₖ = ½mv²\n[J] – energia ruchu ciała" },
  { front: "Prawo Ohma", back: "U = I·R\nU[V], I[A], R[Ω]\nI=U/R · R=U/I" },
  {
    front: "I zasada termodynamiki",
    back: "ΔU = Q − W\nZmiana energii wewn. = ciepło − praca",
  },
  {
    front: "Prawo gazowe",
    back: "pV = nRT\nR=8,314 J/(mol·K)\nT[K]=T[°C]+273",
  },
  {
    front: "Rozpad promieniotwórczy",
    back: "N(t)=N₀·(½)^(t/T½)\nPo T½: połowa jąder się rozpada",
  },
  { front: "Moc elektryczna", back: "P = U·I = I²·R = U²/R\n[W]" },
  {
    front: "Zasada zachowania energii",
    back: "Eₖ+Ep=const (bez oporów)\nWahadło, rzut pionowy",
  },
];

const fizEgzamin = [
  {
    type: "num",
    q: "1. m=8 kg, a=3 m/s². F=?",
    correct: "24",
    exp: "F=8·3=24 N.",
  },
  {
    type: "num",
    q: "2. m=4 kg, v=5 m/s. Eₖ=?",
    correct: "50",
    exp: "½·4·25=50 J.",
  },
  {
    type: "num",
    q: "3. T₁=500K, T₂=250K. η=? (w %)",
    correct: "50",
    exp: "(1−0,5)·100%=50%.",
  },
  {
    type: "abcd",
    q: "4. W przemianie izochorycznej stała jest:",
    options: ["A) temperatura", "B) objętość", "C) ciśnienie", "D) entropia"],
    correct: 1,
  },
  { type: "num", q: "5. U=24V, R=8Ω. I=?", correct: "3", exp: "I=24/8=3 A." },
  {
    type: "num",
    q: "6. U=230V, I=2A. P=?",
    correct: "460",
    exp: "P=230·2=460 W.",
  },
  {
    type: "abcd",
    q: "7. Rozpad β⁻ to emisja:",
    options: ["A) pozytonu", "B) elektronu", "C) jądra helu", "D) fotonu"],
    correct: 1,
  },
  {
    type: "num",
    q: "8. T½=10 lat. Po 30 latach pozostaje ile % N₀?",
    correct: "12.5",
    exp: "(½)³=1/8=12,5%.",
  },
  {
    type: "abcd",
    q: "9. Pęd p = ?",
    options: ["A) ½mv", "B) mv²", "C) mv", "D) ma"],
    correct: 2,
  },
  {
    type: "num",
    q: "10. v₀=0, a=4 m/s², t=5 s. s=?",
    correct: "50",
    exp: "s=½·4·25=50 m.",
  },
];
