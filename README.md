# BetaBytez Task 2 — Dynamic Portfolio with React

## 📋 About This Project
A dynamic, component-based portfolio website built with React.js as part of the BetaBytez Summer Internship 2026 (Web Development Track — Task 2). This rebuilds and expands my Task 1 static portfolio using React Router, hooks, and live API integration.

## 🛠️ Technologies Used
- React.js (functional components + hooks)
- React Router DOM (client-side routing)
- GitHub REST API (public profile data)
- Plain CSS (custom properties, responsive design)
- Vite (build tool)

## ✨ Features
- 7 reusable React components: Navbar, Hero, About, Skills, Projects, Contact, Footer
- Client-side routing with dynamic project detail pages (`/projects/:id`)
- Light/Dark mode toggle using `useState`
- Live GitHub profile stats fetched via `useEffect` and the GitHub public API
- Project filtering by category (All / Web / AI / Other) using `useState`
- All project and skill data centralized in `data.js`, passed via props
- Fully responsive design

## 🧩 Component Structure
src/
├── components/
│   ├── Navbar.jsx       — navigation + theme toggle
│   ├── Hero.jsx         — landing section
│   ├── About.jsx        — bio + GitHub API integration
│   ├── Skills.jsx       — skills list (props from data.js)
│   ├── Projects.jsx     — filterable project list (props from data.js)
│   ├── ProjectDetail.jsx— individual project page (React Router)
│   ├── Contact.jsx      — contact form with validation
│   └── Footer.jsx
├── data.js               — centralized skills & projects data
├── App.jsx                — routes + global state (dark mode)
└── main.jsx                — app entry point, BrowserRouter

## 🚀 How to Run Locally
1. Clone this repository:
git clone https://github.com/iamZainabKhalid/betabytez-task2-zainab.git
2. Navigate into the folder:
cd betabytez-task2-zainab
3. Install dependencies:
npm install
4. Start the development server:
npm run dev
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📸 Screenshots

### Light Mode
![Light Mode](screenshots/light-mode.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

## 📌 Note
This project was built as part of the BetaBytez Summer Internship 2026.


