/* =====================
   VIDEO FILTER TABS
   ===================== */
function filterVideos(cat, btn) {
  // Update active tab
  document.querySelectorAll('.vtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide cards
  document.querySelectorAll('.video-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}


/* =====================
   THEME TOGGLE
   ===================== */
(function () {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('toggle-icon');
  const label = document.getElementById('toggle-label');

  // Load saved preference
  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }
})();


/* =====================
   QUIZ
   ===================== */
const questions = [
  {
    q: "You receive a QR code on WhatsApp from an unknown person saying 'Scan this to receive ₹5000'. What do you do?",
    opts: ["Scan it immediately", "Ask them to send again", "Never scan — in UPI, scanning a QR always means you PAY", "Call your bank first"],
    ans: 2,
    exp: "✅ Correct! Scanning a QR code in UPI always initiates a payment FROM you. You can NEVER receive money by scanning a QR code."
  },
  {
    q: "A 'bank officer' calls and says your KYC is expired. He asks for your OTP to 'update' it. What do you do?",
    opts: ["Share OTP quickly to avoid account block", "Ask him to call back later", "Hang up — banks NEVER ask for OTP", "Share only half the OTP"],
    ans: 2,
    exp: "✅ Correct! No bank, government body, or app will ever ask for your OTP. This is a vishing (voice phishing) scam."
  },
  {
    q: "You sold something on OLX. The 'buyer' sends ₹1 and asks you to enter your UPI PIN to 'collect the full payment'. What happens?",
    opts: ["You receive the full amount", "Nothing happens", "You send money to the scammer", "Your account gets verified"],
    ans: 2,
    exp: "✅ Correct! Entering your UPI PIN always authorizes an outgoing payment, never an incoming one. This is the classic OLX QR/PIN scam."
  },
  {
    q: "Which of these is a legitimate way your bank will contact you?",
    opts: ["WhatsApp message asking to update KYC via a link", "Call asking for your card number and CVV", "Email from bank's official domain with no attachments", "SMS asking you to call an unknown number"],
    ans: 2,
    exp: "✅ Correct! Legitimate bank emails come from official domains and never ask for sensitive information or have suspicious attachments."
  },
  {
    q: "You lost money to a cyber fraud. What is the FIRST thing you should do?",
    opts: ["Post about it on social media", "Call 1930 (Cyber Crime Helpline) immediately", "Wait and see if money comes back", "Change your UPI PIN"],
    ans: 1,
    exp: "✅ Correct! Call 1930 immediately — it's the National Cyber Crime Helpline. Early reporting maximizes the chance of fund recovery."
  }
];

let current = 0, score = 0, answered = false;

function loadQuestion() {
  answered = false;
  const q = questions[current];
  document.getElementById('quiz-question').textContent = `Q${current + 1}: ${q.q}`;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.onclick = () => answer(i);
    opts.appendChild(btn);
  });
  document.getElementById('quiz-score').textContent = `Score: ${score} / ${current}`;
}

function answer(i) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, idx) => {
    if (idx === q.ans) b.classList.add('correct');
    else if (idx === i && i !== q.ans) b.classList.add('wrong');
    b.style.cursor = 'default';
  });
  const feedback = document.getElementById('quiz-feedback');
  if (i === q.ans) {
    score++;
    feedback.textContent = q.exp;
    feedback.style.color = 'var(--green)';
  } else {
    feedback.textContent = `❌ Not quite. ${q.exp}`;
    feedback.style.color = 'var(--accent2)';
  }
  document.getElementById('quiz-score').textContent = `Score: ${score} / ${current + 1}`;
  const nextBtn = document.getElementById('quiz-next');
  nextBtn.style.display = 'inline-block';
  if (current >= questions.length - 1) {
    nextBtn.textContent = `Finished! ${score}/${questions.length} ✓`;
    nextBtn.onclick = () => {
      current = -1;
      score = 0;
      nextQuestion();
      nextBtn.textContent = 'Next Question →';
      nextBtn.onclick = nextQuestion;
    };
  }
}

function nextQuestion() {
  current++;
  if (current >= questions.length) { current = 0; score = 0; }
  loadQuestion();
}

// Init quiz on DOM ready
document.addEventListener('DOMContentLoaded', loadQuestion);
