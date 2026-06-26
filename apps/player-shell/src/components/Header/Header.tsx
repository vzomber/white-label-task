import { Link } from "react-router";
import { CommonQueryKeys, queryClient, useGetCurrentUser } from "../../query";
import { ThemeSwitcher } from "../Select";
import { PAGES_URL } from "../../router";

export const Header = () => {
  const { data: user } = useGetCurrentUser();
  const isHomePage = window.location.pathname === "/";
  const isUserLoggedIn = !!user;

  const handleLogout = () =>
    queryClient.setQueryData([CommonQueryKeys.CURRENT_USER], user);

  return (
    <h1 className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">
          {isHomePage ? (
            `Welcome, ${user?.name || "Guest"}!`
          ) : (
            <Link className="ml-2 mt-2" to={PAGES_URL.HOME}>
              Go home
            </Link>
          )}
        </span>

        <div className="flex items-center gap-4">
          {user && <ThemeSwitcher />}
          {isUserLoggedIn && (
            <Link
              className="text-gray-300 hover:text-white"
              onClick={handleLogout}
              to={PAGES_URL.LOGIN}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </h1>
  );
};
