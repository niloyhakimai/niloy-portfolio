
# ⚡ Niloy's Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer&logoColor=white)

A modern, high-performance personal portfolio website built with the latest web technologies. Designed to showcase projects, skills, and services with fluid animations and a responsive UI.

## 🚀 Features

- **Framework:** Built with **Next.js 15** (App Router) & **React 19**.
- **Styling:** Styled using **Tailwind CSS v4** for a clean and responsive design.
- **Animations:** Smooth transitions and interactions using **Framer Motion** & **React Parallax Tilt**.
- **Icons:** Integrated with **Lucide React** & **React Icons**.
- **Performance:** Optimized with modular components and efficient rendering.
- **UI Components:**
  - ✨ **Floating Particles** background effect.
  - 🔦 **Spotlight** and **Magic Button** effects.
  - 🧩 **Floating Navigation** for better UX.

## 📂 Project Structure

Here is an overview of the project's file structure:

```bash
niloy-portfolio/
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── globals.css     # Global styles (Tailwind imports)
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── sections/       # Page sections (Hero, Projects, Contact, etc.)
│   │   └── ui/             # UI elements (FloatingNav, MagicButton, Spotlight)
│   └── lib/                # Utility functions (utils.ts)
├── public/                 # Static assets (images, icons)
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration

🛠️ Tech Stack
| Technology | Purpose | |Data | Description | | --- | --- | | Next.js 15 | React Framework for Production (App Router) | | React 19 | UI Library | | Tailwind CSS v4 | Utility-first CSS Framework | | Framer Motion | Animation Library | | Lucide React | Icon Set | | TypeScript | Static Type Checking |

🏁 Getting Started
Follow these steps to set up the project locally on your machine.

Prerequisites
Make sure you have Node.js installed on your system.

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/niloy-portfolio.git](https://github.com/your-username/niloy-portfolio.git)
cd niloy-portfolio
Install dependencies:

Bash
npm install
# or
yarn install
# or
pnpm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

🎨 Customization
You can easily customize the portfolio content by editing the components inside src/components/sections/:

Hero Section: Edit src/components/sections/Hero.tsx

Projects: Update project data in src/components/sections/Projects.tsx

Skills: Modify src/components/sections/TechStack.tsx

Contact: Update email/social links in src/components/sections/Contact.tsx

🤝 Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

📄 License
This project is licensed under the MIT License.