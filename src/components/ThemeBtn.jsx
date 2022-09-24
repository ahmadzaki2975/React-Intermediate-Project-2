import { useContext } from "react";
import ThemeContext from "../utils/themeContext";
import {BsSunFill as SunIcon, BsMoonFill as MoonIcon} from "react-icons/bs";

export const ThemeBtn = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  let style = "flex items-center w-8 p-2 justify-center rounded text-white"
  if (theme === "light") {
    style += " bg-yellow-500";
  } else {
    style += " bg-gray-500";
  }

  return (
    <button
      className={style}
      onClick={handleClick}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}