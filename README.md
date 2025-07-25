# GregTheAI

## Features

- **AI Chatbot Playground**: Interact with a chatbot in a sleek, responsive chat UI.
- **Authentication**: JWT and session-based authentication flows (sign in, sign up, protected routes).
- **Modern UI/UX**: Built with Tailwind CSS, Radix UI, and custom components for a delightful user experience.
- **Form Validation**: Uses React Hook Form and Zod for robust form validation.
- **API Integration**: Easily connect to backend APIs for authentication and chat.
- **Dark/Light Mode**: Theme toggling with persistence.
- **Animations**: Smooth UI animations using GSAP and MagicUI.
- **TypeScript Strictness**: Fully typed for safety and maintainability.

## Project Structure

```
components.json
next.config.ts
package.json
tsconfig.json
public/
src/
  app/
    ... (routing, layouts, pages)
  components/
    ... (UI, chat, forms, landing page, etc.)
  contexts/
    AuthContext.tsx
  lib/
    axios.ts, jwt.ts, utils.ts
  services/
    auth.service.ts
  types/
    index.ts
  ...
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Lint the codebase

## Tech Stack

- **Framework:** Next.js 15, React 19
- **Styling:** Tailwind CSS, Radix UI, MagicUI
- **Forms:** React Hook Form, Zod
- **State/Context:** React Context API
- **API:** Axios
- **Animation:** GSAP
- **Icons:** Lucide React

## Authentication

- JWT and session-based authentication
- Context-driven auth state (`AuthContext`)
- Example usage in `src/contexts/AuthContext.tsx` and `src/components/Navbar.tsx`

MIT

---
# frontend
