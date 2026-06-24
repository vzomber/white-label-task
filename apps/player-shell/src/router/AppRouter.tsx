import { BrowserRouter, Route, Routes } from "react-router";
import { BillingPage, HomePage, LoginPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/account/billing" element={<BillingPage />} />
        </Route>
        <Route path="*" element={<div>{"Page not found"}</div>} />
      </Routes>
    </BrowserRouter>
  );
};
