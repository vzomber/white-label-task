## Run instructions

````text
pnpm install
pnpm dev```

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
````
