## Run instructions

pnpm install && pnpm dev

## Project general structure

```text
white-label-task/
├─ apps/
│  └─ player-shell/
│     └─ src/
│        ├─ api/
│        ├─ components/
│        ├─ mocks/
│        ├─ pages/
│        ├─ query/ (React Query layer)
│        ├─ router/
│        ├─ TenantContext/
│        └─ main.tsx
├─ packages/
│  └─ themes/
│     └─ theme-tenant-alpha/
│        ├─ theme.config.js
│        ├─ tokens.css
│        ├─ BrandButton/
│        └─ BrandCard/
├─ README.md
├─ DECISIONS.md
└─ ARCHITECTURE.md
```

## Notes

- The mock APIs include a delay to test the loading state. The delay can be changed in the API layer.
- The project is configured as a pnpm workspace. Common scripts can be run from the project root, for example:
  - `pnpm dev`
  - `pnpm lint`
  - `pnpm test`
