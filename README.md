# 🤖 discord-bot-dashboard // Modern Discord Bot Landing Page Template

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="License">
</p>

A state-of-the-art, high-performance, dark-cyberpunk glassmorphism landing page and dashboard template for Discord Bots. Built with pure Vanilla HTML5, CSS3, and JavaScript—zero build step or heavy node dependencies required.

---

## 🌟 Key Features

- 💜 **Cyberpunk Glassmorphism Aesthetics**: Modern dark mode design system with ambient glowing gradients, glass blur cards, and subtle hover animations.
- 📊 **Animated Live Statistics Counters**: Counter animations for active servers, reached members, executed commands, and uptime metric.
- ⚡ **Interactive Command Explorer**:
  - Live search input filter (search by command name or keyword).
  - Category tabs filter (`All`, `Moderation`, `Music`, `Economy`, `Utility`).
- ❓ **FAQ Accordion Component**: Expandable animated Q&A cards for community onboarding.
- 📡 **Live Ping Metric Simulator**: Simulated real-time WebSocket gateway latency ticker.
- ⚙️ **Centralized Configuration**: All bot text, links, stats, features, commands, and FAQs are managed in [`config.js`](file:///C:/Users/comba/Desktop/agent/discord-bot-dashboard/config.js).

---

## 📂 Project Structure

```
discord-bot-dashboard/
├── config.js       # Centralized bot settings & content configuration
├── app.js          # Counter animations, search filter & DOM logic
├── index.html      # Semantic HTML5 layout
├── style.css       # Glassmorphism design system & responsive layout
├── .gitignore      # Standard Git ignore file
├── LICENSE         # GNU GPL v3.0 License
└── README.md       # Project documentation
```

---

## 🚀 Quick Start Guide

1. Clone or download this repository.
2. Open [`config.js`](file:///C:/Users/comba/Desktop/agent/discord-bot-dashboard/config.js) and update your Bot Name, OAuth2 Invite Link, Support Discord link, statistics, and command list.
3. Host the folder on GitHub Pages, Vercel, Netlify, or any web server!

---

## 🛠️ Configuration (`config.js`)

```javascript
const CONFIG = {
    botName: "JulesBot",
    botTagline: "The Ultimate All-in-One Discord Management Bot",
    inviteLink: "https://discord.com/oauth2/authorize?client_id=YOUR_ID...",
    supportServerLink: "https://discord.gg/julesfx",
    stats: {
        servers: 1450,
        users: 485000,
        commands: 2150000,
        uptime: "99.98%"
    }
};
```

---

## 📜 License

Distributed under the **GNU General Public License v3.0 (GPL-3.0)**. See [`LICENSE`](file:///C:/Users/comba/Desktop/agent/discord-bot-dashboard/LICENSE) for more details.

Created by **Veqris** for **JulesFX**

<img width="2539" height="1301" alt="image" src="https://github.com/user-attachments/assets/4cef0f33-3c18-455f-b078-3a6905edeb9b" />

