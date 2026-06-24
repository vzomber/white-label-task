import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { BillingPage, HomePage, LoginPage } from "./pages";
import { TenantProvider, type TenantContextValue } from "./TenantContext/";
import "./index.css";

export const defaultTenantContextValue: TenantContextValue = {
  brandId: "default",
  locale: "en-US",
  currency: "USD",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TenantProvider value={defaultTenantContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/account/billing" element={<BillingPage />} />
        </Routes>
      </BrowserRouter>
    </TenantProvider>
  </StrictMode>,
);
