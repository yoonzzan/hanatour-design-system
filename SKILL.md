---
name: hanatour-design-system
description: Apply the Hanatour Design System (Tailwind tokens, React Components) to any current frontend project. Use when the user asks to "apply hanatour design", "하나투어 디자인", "하나투어 컴포넌트", or when starting a web project under the Hanatour brand.
---

# Hanatour Design System Agent Skill 🚀

You are acting as an expert Frontend Architect familiar with the **Hanatour Design System**. 
When triggered, follow these exact steps to inject and apply the design system into the user's current project.

## 1. Context Assessment
Check if the current working directory is a frontend project (look for `package.json`). If it isn't, ask the user to navigate to their project directory or ask if they want you to create one (e.g., using `npx create-next-app`).

## 2. Check for Tailwind CSS
The Hanatour Design System is extremely dependent on Tailwind CSS.
Run commands to check if `tailwind.config.js` or `tailwind.config.ts` exists.
If missing, inform the user and request permission to install `tailwindcss`, `postcss`, and `autoprefixer`.

## 3. Automated Injection
A setup script is provided to automate the configuration. Run it from the root of the project:

```bash
node <YOUR_SKILL_PATH>/scripts/setup.js
```

The script will:
-   Automatically detect the `./src/components` or `./components` folder and copy Hanatour components.
-   Merge the `theme.extend` tokens from `resources/tailwind.config.js` into the existing Tailwind config.

## 4. Design Guidelines Reference
Always reference the following resources within this skill's directory for visual accuracy:
-   **Design Guide**: `resources/hanatour-design-system.md` (Read this to understand core rules like Master Purple `#5E2BB8` usage).
-   **Tailwind Reference**: `resources/tailwind.config.js` (Reference for all available `ht-` prefixes).

## 5. Final Verification
Notify the user once the components and tokens have been successfully injected. Show them a simple code snippet importing a `<Button>` and utilizing a Hanatour Tailwind class like `bg-ht-master-purple` to prove the integration is complete.

## DO NOT:
- Do not use random colors outside of the system.
- Do not use absolute paths in your internal scripts when copying resources.
- Always follow the `ht-` prefix convention.
