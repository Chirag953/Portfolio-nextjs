# Design: Premium Portfolio UI

## Context
The portfolio website needs a modern, professional UI that effectively showcases the developer's work to hiring managers. The design must balance visual appeal with performance and maintainability. Using Next.js App Router and Tailwind CSS provides a solid foundation for rapid development and responsive design.

## Goals / Non-Goals

### Goals
- Create a visually appealing, modern portfolio that stands out
- Implement dark/light theme for user preference
- Build reusable component system for maintainability
- Ensure fully responsive design across all devices
- Maintain fast load times and good performance
- Use static data for simplicity (projects.json)
- Professional aesthetic suitable for hiring managers

### Non-Goals
- Backend API or database integration (static data only)
- User authentication or accounts
- Complex animations or heavy JavaScript libraries
- Blog or CMS functionality
- Real-time features

## Decisions

### Decision: Static JSON for Project Data
**Why**: Simple, fast, and sufficient for current needs. No backend required.
**Alternatives considered**: 
- Database/API: Overkill for static portfolio content
- Markdown files: Less structured, harder to parse
- External CMS: Adds complexity and external dependency

### Decision: Theme Toggle with CSS Variables
**Why**: Clean implementation using CSS custom properties allows easy theme switching without JavaScript overhead for styling.
**Alternatives considered**:
- CSS-in-JS: Adds runtime overhead
- Separate stylesheets: Harder to maintain
- Tailwind dark mode: Works well with CSS variables

### Decision: Component-Based Architecture
**Why**: Reusable components reduce code duplication and ensure design consistency.
**Alternatives considered**:
- Page-specific components: Would lead to duplication
- Utility-only approach: Less maintainable for complex UI

### Decision: Server Components by Default
**Why**: Next.js App Router performance benefits. Use Client Components only for interactivity (theme toggle, animations).
**Alternatives considered**:
- All Client Components: Worse performance, larger bundle
- Mix based on feature: Current approach balances performance and interactivity needs

### Decision: Mailto or Simple Contact Form
**Why**: No backend required. Mailto is simplest; form can be added later if needed.
**Alternatives considered**:
- Form with backend: Requires API endpoint
- Third-party form service: External dependency
- Email service API: Adds complexity and cost

## Risks / Trade-offs

- **Risk**: Theme toggle may cause flash of unstyled content
  - **Mitigation**: Use Next.js theme provider with SSR-safe implementation, store preference in localStorage

- **Risk**: Static JSON limits scalability
  - **Mitigation**: Structure data well; migration path exists to API/CMS later if needed

- **Risk**: Too many animations may impact performance
  - **Mitigation**: Use CSS transitions, limit JavaScript animations, test on low-end devices

- **Trade-off**: Simplicity vs. Feature Richness
  - **Decision**: Favor simplicity first; features can be added incrementally

## Migration Plan

1. Create new components and pages alongside existing code
2. Test thoroughly before removing old implementations
3. Update root layout to include theme provider
4. Deploy to Vercel for testing
5. Monitor performance and fix any issues

**Rollback**: Keep current simple page.tsx as fallback if needed during migration.

## Open Questions
- Should contact form include fields beyond email (name, message, etc.)?
- Do we need a navigation menu or just direct page links?
- Should projects have filtering/categorization features?
