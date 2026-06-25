import { useState } from "react";
import { Theme, type ThemeType } from "./types";

const themeOptions = Object.values(Theme);

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeType>(Theme.DEFAULT);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextTheme = e.target.value as ThemeType;

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <p>Theme: </p>
      <select value={theme} onChange={handleChange}>
        {themeOptions.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};
