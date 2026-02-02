# ⚡ Niloy's Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer&logoColor=white)

A modern, high-performance personal portfolio website built with the latest web technologies. Designed to showcase projects, skills, and services with fluid animations and a responsive UI.

---

## 🚀 Features

- **Framework:** Built with **Next.js 15 (App Router)** & **React 19**
- **Styling:** Styled using **Tailwind CSS v4** for a clean and responsive design
- **Animations:** Smooth transitions and interactions using **Framer Motion** & **React Parallax Tilt**
- **AI Integration:** Custom **Cartoon Chatbot** powered by **Groq API (Llama 3.3)**
- **Icons:** Integrated with **Lucide React** & **React Icons**
- **Performance:** Optimized with modular components and efficient rendering

### ✨ UI Highlights

- 🌌 **Space-Themed AI Chatbot** — Animated, floating, and interactive assistant that responds in **Bangla & English**
- ✨ **Floating Particles** — Dynamic animated background
- 🔦 **Spotlight & Magic Buttons** — Interactive UI effects
- 🧩 **Floating Navigation** — Smooth user experience

---

## 📂 Project Structure

```bash
niloy-portfolio/
├── src/
│   ├── app/                     # Next.js App Router (Pages & Layouts)
│   │   ├── api/chat/            # Backend API route for Groq AI
│   │   ├── globals.css          # Global styles (Tailwind imports)
│   │   ├── layout.tsx           # Root layout (Chatbot included here)
│   │   └── page.tsx             # Homepage
│   ├── components/              # Reusable React components
│   │   ├── layout/              # Layout components (Navbar, Footer)
│   │   ├── sections/            # Page sections (Hero, Projects, Contact, etc.)
│   │   └── ui/                  # UI elements (CartoonChatbot, FloatingNav, etc.)
│   └── lib/                     # Utility functions (utils.ts)
├── public/                      # Static assets (images, icons)
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 🛠️ Tech Stack

| Technology        | Purpose                                      |
|------------------|----------------------------------------------|
| Next.js 15       | React Framework for Production (App Router)  |
| React 19         | UI Library                                   |
| Tailwind CSS v4  | Utility-first CSS Framework                  |
| Framer Motion    | Animation Library                            |
| Groq SDK         | AI Integration (Llama 3.3 Model)             |
| Lucide React     | Icon Set                                     |
| TypeScript       | Static Type Checking                         |

---

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### 📌 Prerequisites

Make sure you have **Node.js** installed.

### 📥 Installation

Clone the repository:

```bash
git clone https://github.com/niloyhakimai/niloy-portfolio.git
cd niloy-portfolio
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 🔑 Environment Variables (Required for AI Chatbot)

Create a file named `.env.local` in the root directory and add:

```env
GROQ_API_KEY=your_groq_api_key_here
```

You can get a free API key from: https://console.groq.com

### ▶️ Run the Development Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🎨 Customization

Edit content easily from:

```
src/components/sections/
```

| Section | File to Edit |
|--------|--------------|
| Hero Section | `Hero.tsx` |
| Projects | `Projects.tsx` |
| Skills / Tech Stack | `TechStack.tsx` |
| Contact Info | `Contact.tsx` |
| AI Personality | `src/app/api/chat/route.ts` |

---

## 🤝 Contributing

Contributions are welcome!  
If you'd like to improve something, feel free to open a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">
Built with ❤️ by <strong>Niloy Hakim</strong>
</p>
