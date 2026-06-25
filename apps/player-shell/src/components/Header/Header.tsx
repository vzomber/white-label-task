import { useGetCurrentUser } from "../../query";
import { ThemeSwitcher } from "../Select";
import type { HeaderProps } from "./types";

export const Header = ({ children }: HeaderProps) => {
  const { data: user } = useGetCurrentUser();

  return (
    <h1 className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        {children}

        {!!user && <ThemeSwitcher />}
      </div>
    </h1>
  );
};
