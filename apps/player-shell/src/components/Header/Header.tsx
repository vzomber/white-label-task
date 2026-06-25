import type { HeaderProps } from "./types";

export const Header = ({ children }: HeaderProps) => {
  const setTheme = (theme: "default" | "alpha") => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };

  return (
    <h1 className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        {children}

        <div>
          <button onClick={() => setTheme("default")}>1</button>
          <button onClick={() => setTheme("alpha")}>2</button>
        </div>
      </div>
    </h1>
  );
};
