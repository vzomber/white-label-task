## Technical decisions

1. **Vite + React + TypeScript**  
   Chosen as a lightweight and modern setup for building the shell app quickly while keeping type safety.

2. **React Router — Declarative mode**  
   The project has only a few routes, so Declarative mode keeps routing simple and readable without unnecessary setup.

3. **Tailwind CSS**  
   Used for fast layout and utility styling in the shell app. Branded components still keep their own styles inside the theme package.

4. **TanStack Query**  
   Used for mocked API calls, loading/error states, and caching. For this MVP, the query cache also works as lightweight app state for current user/subscription data.

5. **Theme switching via `data-theme`**  
   Themes are switched by setting `document.documentElement.dataset.theme`. This keeps theme changes CSS-driven and avoids coupling the shell app to theme internals through extra React context.
