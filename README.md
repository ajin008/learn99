📚 Mini LMS App
A minimal Learning Management System (LMS) starter built with Next.js 15, TypeScript, and TailwindCSS.
This project is designed as a foundation for building online course platforms, featuring a clean developer workflow with TypeScript type checking, ESLint linting, and Prettier formatting.

🚀 Features

⚡ Next.js 15 (App Router) with TypeScript

🎨 TailwindCSS for styling

✅ ESLint + Prettier with flat config for clean, consistent code

🔒 Strict type-checking using tsc --noEmit

🧹 Pre-commit safe workflow → check lint + types before pushing

📦 Ready for future LMS features (auth, courses, payments, dashboard)

📂 Project Structure
my-app/
├── public/ # Static assets
├── src/
│ └── app/ # Next.js App Router (pages, layouts, etc.)
├── eslint.config.mjs # ESLint flat config
├── .prettierrc # Prettier configuration
├── package.json # Scripts and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

🛠️ Setup

Clone the repo

git clone https://github.com/your-username/mini-lms-app.git
cd mini-lms-app/my-app

Install dependencies

npm install

Run dev server

npm run dev

Open in browser
http://localhost:3000

📏 Scripts
Command Description
npm run dev Start development server
npm run build Build for production
npm run start Start production server
npm run lint Run ESLint to check for code issues
npm run lint:fix Auto-fix lint/formatting issues where possible
npm run typecheck Run TypeScript + ESLint checks together

👉 The recommended workflow:

npm run typecheck

Fix issues → rerun → then commit.

🔧 Developer Workflow

Write your code → run npm run typecheck.

If formatting issues appear, run npm run lint:fix.

Only commit when the project passes with 0 errors.

(Optional: add Husky pre-commit hook to enforce checks before committing.)

📌 Roadmap

User authentication (Supabase / NextAuth)

Course dashboard (enrollments, progress tracking)

Payment integration (Stripe, Razorpay, GPay)

Multi-language landing page

Admin panel for uploading courses
