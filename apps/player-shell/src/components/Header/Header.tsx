import type { HeaderProps } from "./types";

export const Header = ({ children }: HeaderProps) => {
  return <h1 className="bg-gray-800 text-white p-4">{children}</h1>;
};
