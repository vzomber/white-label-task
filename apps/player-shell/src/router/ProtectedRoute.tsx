import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks";
import { PAGES_URL } from ".";

export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to={PAGES_URL.LOGIN} replace />;
  }

  return <Outlet />;
};
