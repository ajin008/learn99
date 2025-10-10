export const module1Lessons = [
  {
    id: "1-1",
    question: "What is vibe coding?",
    answer: `
    Vibe coding means building apps, websites, or automations **without memorizing code**. 
    Instead of writing every line, you just describe what you want in plain English, and AI tools write or generate it for you.
    
    👉 Example:  
    If you wanted a webpage that says "Hello World" with a red background, instead of learning HTML and CSS, 
    you could just ask ChatGPT:  
    "Make me a simple webpage with a red background and 'Hello World' in the center."  
    
    In seconds, you’ll have the code ready to run.
        `,
  },
  {
    id: "1-2",
    question:
      "How AI tools like ChatGPT, Claude, Replit, Bubble, and Supabase help you build without coding?",
    answer: `
    Each tool takes away a part of the 'hard work' of traditional coding:
    
    - **ChatGPT / Claude**: They generate and explain code when you describe what you want.  
    - **Replit**: A playground where you can paste that code and run it instantly, no setup.  
    - **Bubble**: Lets you build apps visually by dragging and dropping, no code required.  
    - **Supabase**: Gives you ready-made databases, authentication, and storage, so you don’t need to build a backend from scratch.  
    
    👉 Example:  
    Imagine you want to build a simple "Notes App".  
    - Ask ChatGPT for the front-end code.  
    - Paste it in Replit to see it working.  
    - Use Supabase to store your notes.  
    - If you don’t want to code at all, you could use Bubble to drag-and-drop your app design.  
    
    Together, these tools mean you can **ship something useful in hours, not months**.
        `,
  },
  {
    id: "1-3",
    question: "Mindset: Don’t learn code, learn how to talk to AI.",
    answer: `
    The biggest shift is this:  
    Instead of thinking "I must master Python/JavaScript first," you think "I must master how to **ask AI properly**."  
    
    👉 Example:  
    Bad Prompt: "Make a website."  
    Good Prompt: "Make a simple website with a centered title 'My Portfolio', 
    a short paragraph about me, and a blue button that says 'Contact Me'."  
    
    The second prompt gives AI enough context to produce exactly what you imagine.  
    So the skill is not writing code — it’s learning how to **explain clearly** what you want.  
    That’s vibe coding.
        `,
  },
];

export const module2Lessons = [
  {
    id: "2-1",
    question: "How to write coding prompts for AI?",
    answer: `
  Writing prompts is like giving instructions to a junior developer.  
  The clearer and more specific you are, the better the output.
  
  👉 Example:  
  ❌ Bad Prompt: "Make a website."  
  ✅ Good Prompt: "Make a responsive landing page with a centered title 'My Portfolio', 
  a short paragraph about me, and a footer with social links. Use Tailwind CSS."  
      `,
  },
  {
    id: "2-2",
    question: "What are prompt patterns (Explain → Generate → Fix → Deploy)?",
    answer: `
  Prompting works best when you treat it as a cycle:
  
  1. **Explain**: Tell the AI what you want and your context.  
  2. **Generate**: Get the first draft of code or output.  
  3. **Fix**: Ask the AI to debug or adjust based on errors.  
  4. **Deploy**: Run it on Replit, Vercel, or your platform.  
  
  👉 Example:  
  - Explain: "I want a to-do app with React and local storage."  
  - Generate: AI gives starter code.  
  - Fix: "It crashes when adding tasks. Fix the error."  
  - Deploy: Copy to Vercel → app is live.  
      `,
  },
  {
    id: "2-3",
    question: "Example: 'Build me a landing page with HTML/CSS' prompt",
    answer: `
  👉 Example Prompt:  
  "Create a simple landing page with:  
  - A headline 'Learn Vibe Coding'  
  - A subheading 'Build faster with AI'  
  - A call-to-action button 'Start Now'  
  - Use HTML and CSS with a modern design."  
  
  The AI will instantly generate a full webpage.  
  Copy → paste into Replit or Vercel → you’ve deployed in minutes.  
      `,
  },
];
