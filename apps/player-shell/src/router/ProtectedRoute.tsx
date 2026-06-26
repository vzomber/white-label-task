import { Navigate, Outlet } from "react-router";
import { useGetCurrentUser } from "../query";
import { PAGES_URL } from ".";

export const ProtectedRoute = () => {
  const { data: user, isLoading } = useGetCurrentUser();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to={PAGES_URL.LOGIN} replace />;
  }

  return <Outlet />;
};
