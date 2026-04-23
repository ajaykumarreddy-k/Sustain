<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Sustain Banner" width="100%">

  # 🌿 Sustain Food Donation App
  
  **Transforming food surplus into community sustenance with AI-powered verification.**

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-Framework-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
  [![Gemini AI](https://img.shields.io/badge/Gemini_1.5_Pro-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

  <p align="center">
    Built with a <b>Wabi-sabi</b> philosophy — embracing community, connection, and real-world impact.
  </p>
</div>

<hr />

## ✨ Core Pillars

- **🤖 AI Quality Snap**: Integrated with **Google Gemini 1.5 Pro Vision** to instantly classify food freshness and safety from simple snapshots.
- **📍 Local Discovery**: Real-time geolocation using **Nominatim** and interactive maps to connect donors with nearby receivers.
- **🛡️ Secure Handover**: End-to-end verification via unique 6-digit tokens and QR code handshakes to ensure safety for both parties.
- **📊 Impact Analytics**: Transparent tracking of meals rescued and waste prevented, visualizing the ripple effect of every donation.

## 🛠️ The Resilient Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)

### Backend & Infrastructure
- **API**: [FastAPI](https://fastapi.tiangolo.com/) (Pythonic speed & Pydantic validation)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL + Real-time)
- **Auth**: [Supabase Auth](https://supabase.com/auth) (JWT & RLS)
- **Platform**: [Ionic Capacitor](https://capacitorjs.com/) (PWA-to-Native Bridge)

## 📂 Repository Structure

```text
.
├── src/                      # 🎨 Frontend (React 19 UI)
│   ├── components/           # Modular UI library
│   ├── App.tsx               # Main Landing/App experience
│   └── index.css             # Wabi-sabi design system
├── backend/                  # ⚙️ Backend (FastAPI Layer)
│   ├── app/                  # Router & Business Logic
│   └── services/             # AI (Gemini) & Database logic
└── public/                   # 📦 Static assets & PWA manifest
```

## 🚀 Quick Ignition

### 1. Requirements
- Node.js 18+
- Python 3.11+
- Bun (Preferred)

### 2. Setup
```bash
# Clone the vision
git clone https://github.com/ajaykumarreddy-k/Sustain
cd Sustain

# Install dependencies
bun install
```

### 3. Environment Config
Create a `.env` in the root:
```env
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
GEMINI_API_KEY=your_vision_key
```

### 4. Run Development
```bash
bun dev
```

<hr />

<div align="center">
  <p><b>© 2026 Sustain Food Donation App</b></p>
  <p>Made with ❤️ by <b>Ajay</b> • Designed by <b>Ajay and Team</b></p>
  <p><i>"Ending hunger, one snapshot at a time."</i></p>
</div>
