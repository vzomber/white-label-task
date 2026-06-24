import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TenantProvider, type TenantContextValue } from "./TenantContext/";
import { AppRouter } from "./router";
import "./index.css";

export const defaultTenantContextValue: TenantContextValue = {
  brandId: "default",
  locale: "en-US",
  currency: "USD",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TenantProvider value={defaultTenantContextValue}>
      <AppRouter />
    </TenantProvider>
  </StrictMode>,
);
