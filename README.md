# Minimalist Developer Portfolio (React + Vite + Tailwind CSS v3.4.1)

A clean, modern, light-themed developer portfolio website built with **React 18**, **Vite**, **React Router DOM**, **Tailwind CSS 3.4.1**, and **Lucide Icons**.

## 🚀 Features

- **Home (`/`)**: Hero section, tagline, quick bio, social links, stats counters, featured startup block, and resume download.
- **Education & Skills (`/education-skills`)**: Academic history, vertical career timeline (School → College → Leadership Position → Co-Founder Startup), and categorized skill badges.
- **Projects (`/projects`)**: Filterable project cards with tab support for **Individual** vs **Group** projects, status badges (*Completed* / *In Progress*), GitHub/Demo links, roles, and teammates.
- **Certificates (`/certificates`)**: Card grid displaying certificate issuers, dates, preview thumbnails, credential IDs, verify links, and search filtering.
- **Startup Showcase Card**: Highlight block for co-founder startup role, active users, growth metrics, and tech stack.
- **Data-Driven Architecture**: All text, projects, skills, education, and social links are stored in `src/data/` JS files for zero-code content editing.

## 📁 File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── resume.pdf             # Replace with your actual resume PDF
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # @tailwind base/components/utilities directives
│   ├── assets/
│   ├── data/
│   │   ├── profile.js         # Name, tagline, bio, contact links, stats
│   │   ├── education.js       # Degrees, institution, year, CGPA/percentage
│   │   ├── timeline.js        # Journey milestones (school → college → position → startup)
│   │   ├── skills.js          # Categorized skills list
│   │   ├── certificates.js    # Certificate entries with verify links
│   │   ├── projects.js        # individualProjects & groupProjects
│   │   └── startup.js         # Startup details & metrics
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Timeline.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── CertificateCard.jsx
│   │   ├── SkillBadge.jsx
│   │   └── StartupCard.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── EducationSkills.jsx
│       ├── Certificates.jsx
│       └── Projects.jsx
└── README.md
```

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
The application will open at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

## ✏️ Customizing Your Content

Simply edit the JSON/JS files in `src/data/`:
1. `src/data/profile.js` — Update your name, tagline, email, social URLs, and bio.
2. `src/data/education.js` — Update your degree, college, scores, and coursework.
3. `src/data/timeline.js` — Add your personal journey milestones.
4. `src/data/skills.js` — Adjust your technical skills & proficiency levels.
5. `src/data/certificates.js` — Add your verified certificates.
6. `src/data/projects.js` — Add your individual & group projects.
7. `src/data/startup.js` — Edit startup details or co-founder highlights.
8. `public/resume.pdf` — Replace with your own `resume.pdf` file.

## 📄 License
MIT License.
