# Astro Resume Theme

Astro Resume Theme is a customizable and responsive template designed to help you create a beautiful online resume or portfolio quickly. Built with Astro and styled using Tailwind CSS

## Usage

You can bootstrap a new Astro project using the following command:

```bash
# Bun
bun create astro@latest --template wasutz/astro-resume-theme

# npm 7+
npm create astro@latest -- --template wasutz/astro-resume-theme

# pnpm
pnpm dlx create-astro --template wasutz/astro-resume-theme

# yarn
yarn create astro --template wasutz/astro-resume-theme
```

## 🚀 Features

- Tailwind CSS for styling
- Themeable (defined in `src/styles/theme.css`)
- Dark mode
- Responsive
- Support MDX blog post

## 🧞 Commands

All commands are run from the root of the project, from a terminal:
(Could be use 'npm' instead of bun)

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |
