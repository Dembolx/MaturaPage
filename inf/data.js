const infAlgorytmy = [
  {
    type: "abcd",
    q: "Złożoność merge sort:",
    options: ["A) O(n²)", "B) O(n log n)", "C) O(log n)", "D) O(n)"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "Który algorytm ma O(n²) zawsze?",
    options: [
      "A) Quicksort",
      "B) Merge sort",
      "C) Bubble sort",
      "D) Heap sort",
    ],
    correct: 2,
  },
  {
    type: "abcd",
    q: "Wyszukiwanie binarne wymaga tablicy:",
    options: [
      "A) Posortowanej",
      "B) Niepustej",
      "C) Indeksowanej od 1",
      "D) Bez duplikatów",
    ],
    correct: 0,
  },
  {
    type: "num",
    q: "Wyszukiwanie binarne n=1024. Max kroków?",
    correct: "10",
    exp: "log₂(1024)=10.",
  },
  {
    type: "abcd",
    q: "Quicksort najgorszy przypadek:",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"],
    correct: 2,
  },
  {
    type: "abcd",
    q: "BFS używa struktury:",
    options: ["A) Stosu", "B) Kolejki", "C) Drzewa", "D) Hash"],
    correct: 1,
    exp: "BFS=FIFO (kolejka). DFS=LIFO (stos).",
  },
  {
    type: "abcd",
    q: "Insertion sort jest najefektywniejszy gdy:",
    options: [
      "A) Danych jest bardzo dużo",
      "B) Dane są prawie posortowane",
      "C) Dane są odwrócone",
      "D) Danych jest dużo powtórzeń",
    ],
    correct: 1,
  },
  {
    type: "num",
    q: "Ile wywołań rekurencyjnych ma silnia(5)?",
    correct: "5",
    exp: "silnia(5)→(4)→(3)→(2)→(1)=5.",
  },
];

const infStrukturyDanych = [
  {
    type: "abcd",
    q: "Stos (Stack) to:",
    options: ["A) FIFO", "B) LIFO", "C) Losowa", "D) Priorytetowa"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "Kolejka (Queue) to:",
    options: ["A) LIFO", "B) Losowa", "C) FIFO", "D) Posortowana"],
    correct: 2,
  },
  {
    type: "abcd",
    q: "W BST lewy potomek jest:",
    options: ["A) Większy", "B) Równy", "C) Mniejszy", "D) Dowolny"],
    correct: 2,
  },
  {
    type: "abcd",
    q: "Tablica haszująca: dostęp średnio w:",
    options: ["A) O(n)", "B) O(log n)", "C) O(n log n)", "D) O(1)"],
    correct: 3,
  },
  {
    type: "open",
    q: "Opisz (2–3 zdania) różnicę między stosem a kolejką i podaj przykład zastosowania każdej.",
    exp: "Stos: LIFO – push/pop. Zastosowanie: call stack, cofanie (Ctrl+Z).\nKolejka: FIFO – enqueue/dequeue. Zastosowanie: BFS, drukarka, bufor.",
  },
];

const infSQL = [
  {
    type: "abcd",
    q: "Wybierz studentów z oceną>4:",
    options: [
      "A) SELECT * FROM s WHERE ocena=4",
      "B) SELECT * FROM s WHERE ocena>4",
      "C) SELECT ocena FROM s>4",
      "D) SELECT s WHERE ocena>4",
    ],
    correct: 1,
  },
  {
    type: "abcd",
    q: "COUNT(*) w SQL:",
    options: [
      "A) Sumuje wartości",
      "B) Liczy wiersze",
      "C) Średnia",
      "D) Maksimum",
    ],
    correct: 1,
  },
  {
    type: "abcd",
    q: "GROUP BY służy do:",
    options: [
      "A) Sortowania",
      "B) Grupowania wierszy według wartości",
      "C) Filtrowania",
      "D) Łączenia tabel",
    ],
    correct: 1,
  },
  {
    type: "abcd",
    q: "INNER JOIN zwraca:",
    options: [
      "A) Wszystkie wiersze",
      "B) Tylko pasujące w obu tabelach",
      "C) Wszystkie z lewej",
      "D) Wszystkie z prawej",
    ],
    correct: 1,
  },
  {
    type: "open",
    q: "Napisz SQL: wybierz imię i ocenę z 'uczniowie' gdzie ocena>=5, posortuj malejąco.",
    exp: "SELECT imie, ocena FROM uczniowie WHERE ocena >= 5 ORDER BY ocena DESC;",
  },
  {
    type: "abcd",
    q: "HAVING jest używane:",
    options: [
      "A) Zamiast WHERE",
      "B) Po GROUP BY – filtruje grupy",
      "C) Do sortowania",
      "D) Do łączenia",
    ],
    correct: 1,
  },
];

const infLiczby = [
  {
    type: "num",
    q: "13 dziesiętnie → binarnie. Wpisz wynik binarny.",
    correct: "1101",
    exp: "13=8+4+1=1101₂.",
  },
  {
    type: "num",
    q: "1010₂ = ? w dziesiętnym",
    correct: "10",
    exp: "8+0+2+0=10.",
  },
  {
    type: "num",
    q: "255 → szesnastkowy. Wpisz (wielkie litery).",
    correct: "FF",
    exp: "255=16·15+15=FF.",
  },
  {
    type: "abcd",
    q: "1 bajt = ile bitów?",
    options: ["A) 4", "B) 8", "C) 16", "D) 32"],
    correct: 1,
  },
  {
    type: "num",
    q: "1111₂ = ? dziesiętnie.",
    correct: "15",
    exp: "8+4+2+1=15.",
  },
];

const infFiszki = [
  {
    front: "O(n log n)",
    back: "Złożoność merge sort i quicksort (śr.).\nOptymalna dla sortowania porównawczego.",
  },
  {
    front: "Wyszukiwanie binarne",
    back: "Na posortowanych danych: sprawdza środkowy, eliminuje połowę.\nZłożoność: O(log n).",
  },
  {
    front: "Stos vs Kolejka",
    back: "Stos: LIFO – push/pop. Call stack, cofanie.\nKolejka: FIFO – enqueue/dequeue. BFS, bufor.",
  },
  {
    front: "JOIN w SQL",
    back: "INNER JOIN: część wspólna\nLEFT JOIN: wszystkie z lewej+pasujące z prawej\nFULL JOIN: wszystko",
  },
  {
    front: "Rekurencja",
    back: "Funkcja wywołująca samą siebie.\nMUSI mieć warunek bazowy!\nsilnia(n)=n·silnia(n−1); silnia(0)=1",
  },
  {
    front: "Drzewo BST",
    back: "lewy < węzeł < prawy\nWyszukiwanie: O(log n) śr.\nZastosowanie: bazy danych, słowniki",
  },
  {
    front: "Tablice haszujące",
    back: "klucz → funkcja hash → indeks\nO(1) śr. Kolizje: chaining/open addressing",
  },
  {
    front: "Złożoności – ściągawka",
    back: "O(1) stała · O(log n) binarne\nO(n) liniowe · O(n log n) merge sort\nO(n²) bubble/insert/select · O(2ⁿ) podzbiory",
  },
];

const infEgzamin = [
  {
    type: "abcd",
    q: "1. Złożoność bubble sort:",
    options: ["A) O(n log n)", "B) O(n)", "C) O(n²)", "D) O(log n)"],
    correct: 2,
  },
  {
    type: "num",
    q: "2. Wyszuk. binarne n=512. Max kroków?",
    correct: "9",
    exp: "log₂(512)=9.",
  },
  {
    type: "abcd",
    q: "3. LIFO to:",
    options: ["A) Kolejka", "B) Stos", "C) Lista", "D) Drzewo"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "4. SELECT DISTINCT usuwa:",
    options: [
      "A) NULL",
      "B) Zduplikowane wiersze",
      "C) Kolumny puste",
      "D) Wiersze bez WHERE",
    ],
    correct: 1,
  },
  {
    type: "num",
    q: "5. 1111₂ → dziesiętny.",
    correct: "15",
    exp: "8+4+2+1=15.",
  },
  {
    type: "abcd",
    q: "6. Funkcja haszująca służy do:",
    options: [
      "A) Sortowania",
      "B) Szyfrowania",
      "C) Mapowania klucza na indeks",
      "D) Kompresji",
    ],
    correct: 2,
  },
  {
    type: "open",
    q: "7. Opisz ideę merge sort i jego złożoność.",
    exp: "Merge sort: dziel tablicę na połowy, sortuj rekurencyjnie, scal. O(n log n) zawsze. Stabilny. Wymaga O(n) dodatkowej pamięci.",
  },
  {
    type: "abcd",
    q: "8. Wyszukiwanie w BST:",
    options: ["A) O(1)", "B) O(log n) śr.", "C) O(n) zawsze", "D) O(n²)"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "9. ORDER BY DESC sortuje:",
    options: ["A) Rosnąco", "B) Malejąco", "C) Alfabetycznie", "D) Losowo"],
    correct: 1,
  },
  {
    type: "abcd",
    q: "10. Rekurencja bez warunku bazowego →",
    options: [
      "A) Pętla nieskończona",
      "B) Stack overflow",
      "C) Zwraca null",
      "D) Błąd kompilacji",
    ],
    correct: 1,
  },
];
