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
🛠️ Tech StackTechnologyPurposeNext.js 15React Framework for Production (App Router)React 19UI LibraryTailwind CSS v4Utility-first CSS FrameworkFramer MotionAnimation LibraryLucide ReactIcon SetTypeScriptStatic Type Checking🏁 Getting StartedFollow these steps to set up the project locally on your machine.PrerequisitesMake sure you have Node.js installed on your system.InstallationClone the repository:Bashgit clone [https://github.com/niloyhakimai/niloy-portfolio.git](https://github.com/niloyhakimai/niloy-portfolio.git)
cd niloy-portfolio
Install dependencies:Bashnpm install
# or
yarn install
# or
pnpm install
Run the development server:Bashnpm run dev
Open http://localhost:3000 with your browser to see the result.🎨 CustomizationYou can easily customize the portfolio content by editing the components inside src/components/sections/:Hero Section: Edit src/components/sections/Hero.tsxProjects: Update project data in src/components/sections/Projects.tsxSkills: Modify src/components/sections/TechStack.tsxContact: Update email/social links in src/components/sections/Contact.tsx🤝 ContributingContributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.📄 LicenseThis project is licensed under the MIT License.<p align="center">Built with ❤️ by <strong>Niloy</strong></p>