import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TenantProvider, type TenantContextValue } from "./TenantContext/";
import { AppRouter } from "./router";
import "./index.css";

export const defaultTenantContextValue: TenantContextValue = {
  brandId: "default",
  locale: "en-US",
  currency: "USD",
};

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TenantProvider value={defaultTenantContextValue}>
        <AppRouter />
      </TenantProvider>
    </QueryClientProvider>
  </StrictMode>,
);
