# Project Context

## Purpose
Personal Portfolio Website showcasing skills, projects, contact information, and resume. The site serves as a professional online presence to demonstrate capabilities to potential employers, clients, and collaborators.

## Tech Stack
- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans, Geist Mono (via Next.js Google Fonts)
- **Linting**: ESLint with Next.js config
- **Deployment**: Vercel
- **Version Control**: GitHub
- **Development Tools**: Cursor IDE, OpenSpec

## Project Structure
```
portfolio/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [other pages]/     # About, Projects, Contact pages
├── public/                 # Static assets
├── openspec/              # OpenSpec specifications and changes
└── package.json           # Dependencies and scripts
```

## Pages and Features
- **Home**: Landing page with introduction
- **About**: Personal background and skills
- **Projects**: Portfolio of work projects (static JSON data)
- **Contact**: Contact form and information

## Project Conventions

### Code Style
- TypeScript strict mode enabled
- Use functional components with React 19
- Follow Next.js App Router conventions
- Path aliases: `@/*` maps to project root
- ESLint with Next.js configuration for code quality
- Consistent formatting expected (use ESLint/Prettier)

### Architecture Patterns
- **App Router**: Use Next.js App Router for all routing
- **Server Components**: Default to Server Components, use Client Components only when needed
- **Static Data**: Projects stored as static JSON files for now (no database)
- **Component Organization**: Co-locate components with pages or in shared components directory
- **TypeScript**: Strict typing throughout the application
- **Tailwind CSS**: Utility-first styling approach

### Testing Strategy
- Testing approach to be determined as project evolves
- Consider unit tests for components and integration tests for critical flows

### Git Workflow
- CI/CD Pipeline: Cursor → GitHub → Vercel
- Commits should be meaningful and follow conventional commit format when possible
- Main branch deploys automatically to Vercel

## Domain Context
- **Portfolio Website**: Standard personal portfolio structure
- **Static Content**: Projects data is static JSON (may evolve to CMS later)
- **Responsive Design**: Should work across all device sizes
- **Performance**: Optimize for fast load times and good Lighthouse scores
- **SEO**: Proper metadata and semantic HTML for search engine optimization

## Important Constraints
- **Static Data**: Projects are stored as static JSON (no backend API currently)
- **Deployment**: Must work with Vercel's deployment platform
- **Browser Support**: Target modern browsers (ES2017+)
- **No Authentication**: Public-facing site with no user accounts
- **File Size**: Keep bundle sizes reasonable for fast loading

## External Dependencies
- **Vercel**: Hosting and deployment platform
- **GitHub**: Version control and CI/CD integration
- **Next.js Fonts**: Google Fonts (Geist family) via Next.js optimization
- **No External APIs**: Currently no third-party API integrations
