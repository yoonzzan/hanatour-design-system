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

## 3. Inject Resources
A set of pre-built Hanatour-specific resources is located in your skill's directory: `~/.gemini/antigravity/skills/hanatour-design-system/resources/`.

- **Components**: Copy the folder `resources/hanatour-components` into the current project's component directory (typically `./src/components/hanatour-components/` or `./components/hanatour-components/`).
- **Tailwind Config**: Merge the color tokens, font families, and border radii provided in `resources/tailwind.config.js` into the current project's `tailwind.config.js`. DO NOT overwrite their config blindly; safely merge the `theme.extend` objects.
- **Design Rules Guide**: Read `resources/hanatour-design-system.md` to understand how colors should be applied (e.g., CTA buttons must be Master Purple `#5E2BB8` or Accent Yellow `#FFE338`). 

## 4. Final Verification
Notify the user once the components and tokens have been successfully injected. Show them a simple code snippet from their new project importing a `<Button>` and utilizing a Hanatour Tailwind class like `bg-ht-master-purple` to prove the integration is complete.

## DO NOT:
- Do not use random colors outside of the system.
- Do not make CTA buttons gray or any color strictly forbidden by the design guide.
- Always use `ht-` prefixes as defined in the config.
