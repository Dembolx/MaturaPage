// ── Silnik quizów ──────────────────────────────────────────
const QE = (() => {
  const inst = {};

  function init(id, data, containerId) {
    inst[id] = { data: [...data], cur: 0, score: 0, done: false, cid: containerId };
    render(id);
  }

  function render(id) {
    const s = inst[id]; if (!s || s.done) return;
    const q = s.data[s.cur], total = s.data.length;
    const pct = Math.round(s.cur / total * 100);
    let html = `<div class="progress-quiz"><div class="progress-quiz-fill" style="width:${pct}%"></div></div>
      <div class="quiz-question-num">Pytanie ${s.cur + 1} / ${total}</div>
      <div class="quiz-question-text">${q.q}</div>`;
    if (q.type === 'abcd') {
      html += '<div class="quiz-options">' +
        q.options.map((o, i) =>
          `<button class="quiz-option" onclick="QE.pick('${id}',${i})">${o}</button>`
        ).join('') + '</div>';
    } else if (q.type === 'num') {
      html += `<input class="quiz-num-input" id="qi-${id}" placeholder="Wpisz wynik…"
        onkeydown="if(event.key==='Enter')QE.checkNum('${id}')">
        <div style="display:flex;gap:8px;margin-bottom:16px">
          <button class="btn btn-primary btn-sm" onclick="QE.checkNum('${id}')">Sprawdź ✓</button>
          <button class="btn btn-secondary btn-sm" onclick="QE.next('${id}')">Pomiń →</button>
        </div>`;
    } else {
      html += `<textarea class="quiz-open-input" id="qi-${id}" placeholder="Wpisz odpowiedź…"></textarea>
        <button class="btn btn-secondary btn-sm" onclick="QE.showOpen('${id}')">Pokaż wzorcową →</button>`;
    }
    html += `<div id="qf-${id}"></div>`;
    document.getElementById(s.cid).innerHTML = html;
    if (q.type === 'num') document.getElementById(`qi-${id}`)?.focus();
  }

  function feedback(id, ok, txt) {
    const el = document.getElementById(`qf-${id}`); if (!el) return;
    el.className = `answer-feedback show ${ok === null ? 'feedback-info' : ok ? 'feedback-correct' : 'feedback-wrong'}`;
    el.innerHTML = txt;
  }

  function pick(id, i) {
    const s = inst[id], q = s.data[s.cur];
    const opts = document.querySelectorAll(`#${s.cid} .quiz-option`);
    opts.forEach(o => o.classList.add('disabled'));
    const ok = i === q.correct;
    if (ok) { opts[i].classList.add('correct'); s.score++; }
    else { opts[i].classList.add('wrong'); opts[q.correct]?.classList.add('correct'); }
    feedback(id, ok, q.exp || '');
    setTimeout(() => next(id), 2000);
  }

  function checkNum(id) {
    const s = inst[id], q = s.data[s.cur];
    const val = (document.getElementById(`qi-${id}`)?.value || '').trim().replace(',', '.');
    const ok = val.toLowerCase() === String(q.correct).toLowerCase();
    if (ok) s.score++;
    feedback(id, ok, `Poprawna odpowiedź: <strong>${q.correct}</strong>${q.exp ? '<br>' + q.exp : ''}`);
    setTimeout(() => next(id), 2200);
  }

  function showOpen(id) {
    const s = inst[id], q = s.data[s.cur];
    s.score += 0.5;
    feedback(id, null, `<strong>Wzorcowa odpowiedź:</strong><br>${q.exp || q.correct || ''}`);
    setTimeout(() => next(id), 3000);
  }

  function next(id) {
    const s = inst[id]; s.cur++;
    if (s.cur >= s.data.length) result(id); else render(id);
  }

  function result(id) {
    const s = inst[id]; s.done = true;
    const sc = Math.round(s.score), total = s.data.length;
    const pct = Math.round(s.score / total * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
    const msg = pct >= 80 ? 'Świetny wynik!' : pct >= 60 ? 'Nieźle, ale można lepiej.' : 'Wróć do materiału i spróbuj ponownie.';
    document.getElementById(s.cid).innerHTML = `
      <div class="quiz-result">
        <div style="font-size:2.5rem">${emoji}</div>
        <div class="score">${sc} / ${total}</div>
        <p>${msg}</p>
        <p style="font-size:1.4rem;font-family:var(--font-head);font-weight:800;color:var(--accent);margin-bottom:24px">${pct}%</p>
        <button class="btn btn-primary" onclick="QE.restart('${id}')">🔄 Spróbuj ponownie</button>
      </div>`;
  }

  function restart(id) {
    const s = inst[id];
    init(id, s.data, s.cid);
  }

  // ── Fiszki ──────────────────────────────────────────────
  const fc = {};
  function fcInit(id, cards) { fc[id] = { cards, idx: 0 }; fcRender(id); }
  function fcRender(id) {
    const s = fc[id], c = s.cards[s.idx];
    document.getElementById(`${id}-card`)?.classList.remove('flipped');
    const f = document.getElementById(`${id}-fc-front`);
    const b = document.getElementById(`${id}-fc-back`);
    const ct = document.getElementById(`${id}-fc-counter`);
    if (f) f.innerHTML = c.front;
    if (b) b.innerHTML = c.back.replace(/\n/g, '<br>');
    if (ct) ct.textContent = `${s.idx + 1} / ${s.cards.length}`;
  }
  function fcFlip(id) { document.getElementById(`${id}-card`)?.classList.toggle('flipped'); }
  function fcNext(id) { const s = fc[id]; s.idx = (s.idx + 1) % s.cards.length; fcRender(id); }
  function fcPrev(id) { const s = fc[id]; s.idx = (s.idx - 1 + s.cards.length) % s.cards.length; fcRender(id); }

  // ── Nav ─────────────────────────────────────────────────
  function showTab(id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id)?.classList.add('active');
    document.querySelector(`[data-tab="${id}"]`)?.classList.add('active');
    closeSidebar();
  }
  function showSubTab(parent, sub) {
    document.querySelectorAll(`#tab-${parent} .sub-tab-content`).forEach(t => t.classList.remove('active'));
    document.querySelectorAll(`#tab-${parent} .sub-tab-btn`).forEach(b => b.classList.remove('active'));
    document.getElementById(`${parent}-sub-${sub}`)?.classList.add('active');
    event.target.classList.add('active');
  }
  function toggleSidebar() {
    document.getElementById('sidebar')?.classList.toggle('open');
    document.getElementById('overlay')?.classList.toggle('show');
  }
  function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('overlay')?.classList.remove('show');
  }

  return { init, pick, checkNum, showOpen, next, restart, fcInit, fcFlip, fcNext, fcPrev, showTab, showSubTab, toggleSidebar, closeSidebar };
})();

// globalne skróty dla onclick w HTML
function showTab(id) { QE.showTab(id); }
function showSubTab(p, s) { QE.showSubTab(p, s); }
function toggleSidebar() { QE.toggleSidebar(); }
function closeSidebar() { QE.closeSidebar(); }
function fcFlip(id) { QE.fcFlip(id); }
function fcNext(id) { QE.fcNext(id); }
function fcPrev(id) { QE.fcPrev(id); }