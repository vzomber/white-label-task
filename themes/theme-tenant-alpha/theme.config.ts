export const themeConfig = {
  id: "tenant-alpha",
  name: "Tenant Alpha",
  colors: {
    colorPrimary: "var(--color-primary)",
    colorSurface: "var(--color-surface)",
    colorText: "var(--color-text)",
    radiusBase: "var(--radius-base)",
    fontBrand: "var(--font-brand)",
    background: "var(--color-background)",
  },
  themes: ["default", "alpha"] as const,
  defaultTheme: "default",
};
