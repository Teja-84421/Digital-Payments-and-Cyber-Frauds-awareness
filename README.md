# ⚡ CyberSafe — Digital Payments & Cyber Fraud Awareness

A responsive, single-page educational website built to spread awareness about India's digital payment ecosystem and the cyber frauds targeting it — UPI scams, phishing, vishing, SIM swaps, loan app fraud, and more — along with practical safety tips, real case studies, video resources, and an interactive quiz.

🔗 **Live Demo:** _add your deployed link here (GitHub Pages / Netlify / Vercel)_

---

## 📖 About

India's UPI ecosystem processes trillions of rupees every year, but rapid digital adoption has also fueled a sharp rise in cyber fraud. This project distills information from sources like NPCI, RBI, MeitY, and CERT-In into a clear, visually engaging guide that helps everyday users:

- Understand how digital payments actually work
- Recognize the most common fraud patterns in India
- Spot red flags before a transaction goes wrong
- Learn what to do — and who to call — if they're scammed
- Test their knowledge with an interactive quiz

## ✨ Features

- **Digital Payments Overview** — UPI, cards, net banking/NEFT/RTGS, QR payments, wallets, and the Digital Rupee (CBDC), plus a step-by-step breakdown of how a UPI transaction flows through NPCI.
- **Cyber Fraud Catalogue** — Eight major fraud types explained: phishing, vishing, QR scams, OLX/marketplace fraud, remote-access (AnyDesk/TeamViewer) scams, SIM swapping, predatory loan apps, and investment/crypto Ponzi schemes.
- **Red Flags Checklist** — Quick-scan warning signs that indicate a scam in progress.
- **Protection Tips** — Eight actionable habits for staying safe with OTPs, app sources, transaction limits, passwords, and public Wi-Fi.
- **Real-World Case Studies** — Documented Indian fraud cases with loss amounts, to make the risks tangible.
- **Video Resource Library** — Curated, filterable YouTube videos from official/educational channels, sorted by category (Fraud Types, UPI Safety, Awareness).
- **Interactive Quiz** — A 5-question scenario-based quiz with instant feedback and scoring to reinforce learning.
- **Helpline Directory** — Key numbers and portals (1930 Cyber Crime Helpline, cybercrime.gov.in, RBI Ombudsman, bank helplines) with a "golden rule" action plan.
- **Light/Dark Theme Toggle** — Persisted across sessions via `localStorage`, with a fully separate color palette for each mode.
- **Fully Responsive** — Built with plain CSS Grid/Flexbox, no framework dependency.

## 🛠️ Tech Stack

- **HTML5** — semantic structure, embedded YouTube iframes
- **CSS3** — custom properties (CSS variables) for theming, Grid/Flexbox layouts, Google Fonts (`Space Mono`, `Syne`)
- **Vanilla JavaScript** — no frameworks or build tools; handles theme toggling, video filtering, and quiz logic

## 📂 Project Structure

```
.
├── index.html      # Page markup and content (all sections)
├── style.css       # Theming, layout, and component styles
└── script.js       # Theme toggle, video filter tabs, and quiz logic
```

## 🚀 Getting Started

No build step or dependencies required.

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Then simply open `index.html` in your browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node (with `serve` installed)
npx serve .
```

Visit `http://localhost:8000` in your browser.

## 🌐 Deployment

This is a static site, so it can be deployed for free on:

- **GitHub Pages** — enable Pages in repo Settings → Pages → select branch `main` / folder `root`
- **Netlify** or **Vercel** — drag-and-drop the folder or connect the repo

## 📌 Sources & Disclaimer

Content is informed by publicly available guidance from NPCI, RBI, the Ministry of Electronics & Information Technology (MeitY), CERT-In, and the National Cyber Crime Reporting Portal (cybercrime.gov.in). This project is for **educational purposes only** — always verify information with official government sources before acting on it.

## 🤝 Contributing

Contributions are welcome. If you'd like to add a fraud case study, update a statistic, or improve accessibility:

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built to help people pay smart and stay safe in India's digital economy 🇮🇳</p>
