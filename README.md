<div align="center">
  <img src="./assets/sm4tech-logo.png" width="96" alt="SM4Tech mark" />

  <h1>Salama Malek</h1>

  <p><strong>Full-stack developer</strong> &nbsp;·&nbsp; Moscow, Russia</p>

  <p>
    I build developer tools and production web platforms.<br />
    Currently at <strong>NodeMaven</strong>, working on proxy infrastructure,
    measurement tooling and WordPress at scale.
  </p>

  <p>
    <a href="https://www.linkedin.com/in/salama-malek/">
      <img src="https://img.shields.io/badge/LinkedIn-111118?style=for-the-badge&logo=linkedin&logoColor=0A66C2" alt="LinkedIn" />
    </a>
    <a href="mailto:salamahassanein@gmail.com">
      <img src="https://img.shields.io/badge/Email-111118?style=for-the-badge&logo=gmail&logoColor=EA4335" alt="Email" />
    </a>
  </p>
</div>

<!-- Portfolio and SM4TECH links removed on 2026-09-03: sm4tech.com currently
     resolves to a Hostinger parking page and has no working TLS, and
     salama.sm4tech.com has no DNS record at all. Restore this block once the
     host is renewed or the domain is replaced, not before - a dead link in the
     header costs more than a missing one.

    <a href="https://salama.sm4tech.com/">
      <img src="https://img.shields.io/badge/Portfolio-111118?style=for-the-badge&logo=googlechrome&logoColor=34A853" alt="Portfolio" />
    </a>
    <a href="https://sm4tech.com/">
      <img src="https://img.shields.io/badge/SM4TECH-111118?style=for-the-badge&logo=googlechrome&logoColor=38BDF8" alt="SM4TECH" />
    </a>
-->

---

## Selected work

Six projects that show what I actually build, rather than a list of things I have heard of.

### [nodemaven/connection-checker](https://github.com/nodemaven/connection-checker)

**Is your proxy actually hiding you?** An open-source leak-detection tool that catches
what a proxy quietly fails to cover: WebRTC over STUN and TURN, HTTP/3 over QUIC, and
addresses the browser reports but the network contradicts.

The design rule is that it never trusts the browser. Every channel also has a
server-side observation, and a leak is the disagreement between the two. Four
containerised services behind a single `docker compose up`, 50 tests across a CI
matrix, MIT licensed and self-hostable end to end. Observations are keyed to a random
token and expire after 120 seconds, which the README states plainly along with the
things the tool deliberately does **not** check.

`Python` `Flask` `coturn` `WebRTC` `QUIC` `Docker` `vanilla JS`

### [astoria](https://github.com/Salama-Malek/astoria)

Cinematic bilingual (RU/EN) single-page site for a Moscow photo and print shop trading
since 2010. Pure black voids with CMYK glow accents, a printer and press that morph
through the hero, and a GSAP-pinned showcase that walks paper through each production
stage.

`TypeScript` `GSAP` `i18n`

### [coptic-moscow](https://github.com/Salama-Malek/coptic-moscow)

Trilingual (Arabic / Russian / English) parish notification app, built as a monorepo.
Clergy send announcements, voice messages and live-stream alerts to the congregation.
Right-to-left and left-to-right layouts in the same product, which is the interesting
constraint.

`TypeScript` `monorepo` `RTL`

### [MySilentPlan](https://github.com/Salama-Malek/MySilentPlan)

Expo and React Native personal productivity suite: planner, goals and streaks,
exercise, language practice and reading, in one application rather than six.

`React Native` `Expo` `TypeScript`

### [moneymate-mini](https://github.com/Salama-Malek/moneymate-mini)

React Native tracker for money lent and borrowed. Multi-currency, reminder
notifications, and every record stored locally on the device, so the app needs no
account and no server.

`React Native` `offline-first` `TypeScript`

### [bible-reading-companion](https://github.com/Salama-Malek/bible-reading-companion)

Daily reading plans for a church youth group, with reminders, confirmations, streak
history and analytics for the group leader.

`TypeScript` `notifications`

---

## Experience

**Full-Stack Developer** — NodeMaven · 2026 to present
Proxy infrastructure and open-source measurement tooling, plus a large WordPress
platform: custom SiteOrigin widgets, structured data, performance and multilingual
delivery across English, Russian and Chinese.

**Frontend Team Leader** — Informa Core Technologies · Feb 2025 to Jan 2026
Led frontend delivery for scalable web platforms and coordinated with backend teams
on user-facing systems.

**Assistant Project Manager** — ITSPORTS · Nov 2024 to Jan 2025
Project coordination and stakeholder communication between technical teams and clients.

**Freelance Coach** — EYouth · Oct 2024 to Dec 2024
Mentored graduates in software development, AI and career readiness.

---

## Stack

I work in a lot of ecosystems, but these are the ones I would defend in an interview:

| | |
|---|---|
| **Core** | TypeScript · React · Node.js · Python |
| **Frontend** | Next.js · Vite · Tailwind · React Native / Expo |
| **Backend** | Flask · Express · REST · WebSockets · PostgreSQL · MongoDB |
| **Platform** | Docker · Linux · Nginx · GitHub Actions · WordPress |

Also shipped production work in PHP, Java and C++, and comfortable in Bash and on
Red Hat, but I would not claim those as my strengths today.

---

## Currently

- Building measurement and leak-detection tooling that publishes its own limitations, not just its wins.
- Working on proxy and network infrastructure where the interesting bugs live below HTTP.
- Reducing friction in delivery: CI that tells the truth, docs whose quickstart actually runs.

---

<div align="center">
  <sub>
    <a href="https://www.linkedin.com/in/salama-malek/">LinkedIn</a> ·
    <a href="mailto:salamahassanein@gmail.com">salamahassanein@gmail.com</a>
  </sub>
</div>
