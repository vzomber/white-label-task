## Architecture

1. **Shell app**
   The shell app owns routing, pages, business logic, API adapters, mocks, React Query hooks, validation, and application state.

2. **Theme package**
   The theme package owns branded UI components, design tokens, and styles. It does not contain business logic or API calls.

3. **Tenant context**
   `TenantContext` is provided at the top level of the app and stores tenant-specific configuration such as `brandId`, `locale`, and `currency`.

4. **User and billing state**
   User and subscription data are loaded through mocked API adapters and stored in the TanStack Query cache. This allows pages and components to access shared server-like state consistently.
