# SE Lab Git — Portfolio

A static frontend portfolio built with **React + Vite**, deployed automatically on **GitLab Pages** via GitLab CI/CD.

🌐 **Live Demo:** https://YOUR_USERNAME.gitlab.io/se-lab-git/

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — protected, merge only via MR |
| `dev` | Main development integration branch |
| `feature/ui` | UI components: Navbar, Hero, Footer |
| `feature/about` | Pages: About, Projects |
| `hotfix/navbar-fix` | Fix sticky navbar and brand name |

---

## Commit History Summary

| Commit Message | Branch |
|----------------|--------|
| init: initialize React Vite project structure | main |
| config: set vite base path for GitLab Pages | dev |
| ci: add GitLab CI/CD pipeline | dev |
| feat(ui): add Navbar component | feature/ui |
| feat(ui): add Hero section | feature/ui |
| feat(ui): add Footer component | feature/ui |
| feat(ui): integrate components into App | feature/ui |
| feat(about): add About page | feature/about |
| feat(about): add Projects page | feature/about |
| feat(about): add About and Projects to App | feature/about |
| fix: resolve conflict feature/ui and feature/about | dev |
| feat: add Contact section | dev |
| feat: integrate Contact into App | dev |
| style: add global CSS reset | dev |
| feat(projects): add fourth project and tech stack | dev |
| style(about): improve About layout | dev |
| hotfix: make Navbar sticky and fix brand name | hotfix/navbar-fix |
| style(navbar): add font-weight to nav links | dev |
| fix: resolve conflict hotfix and dev in Navbar | dev |
| style(hero): update Hero subtitle | dev |
| style(footer): add GitLab link | dev |
| build: verify production build | dev |
| docs: complete README documentation | dev |

---

## Conflicts Resolved

### Conflict 1 — `src/App.jsx`
- **Where:** merge `feature/about` → `dev`
- **Cause:** هر دو branch فایل App.jsx را با import های متفاوت ویرایش کرده بودند
- **Resolution:** ترکیب هر دو نسخه با تمام import ها و ترتیب صحیح کامپوننت‌ها

### Conflict 2 — `src/components/Navbar.jsx`
- **Where:** merge `hotfix/navbar-fix` → `dev`
- **Cause:** hotfix برند و sticky را تغییر داد، dev هم font-weight را تغییر داد
- **Resolution:** نگه‌داشتن هر دو تغییر (sticky + brand از hotfix، font-weight از dev)

---

## CI/CD Pipeline

GitLab CI/CD به صورت خودکار بعد از هر push به `main` اجرا می‌شود:
1. **build:** نصب dependencies و build پروژه
2. **deploy:** انتقال خروجی به GitLab Pages

Pipeline file: `.gitlab-ci.yml`





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
