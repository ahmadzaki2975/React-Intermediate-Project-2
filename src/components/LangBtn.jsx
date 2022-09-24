import { useContext } from "react";
import LangContext from "../utils/langContext";

export const LangBtn = () => {
  const { lang, setLang } = useContext(LangContext);

  const handleClick = () => {
    if (lang === "en") {
      setLang("id");
      localStorage.setItem("lang", "id");
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
    }
  };

  return (
    <button
      className="flex items-center justify-center w-8 p-1 rounded bg-purple-500 text-white"
      onClick={handleClick}
    >
      {lang === "en" ? "EN" : "ID"}
    </button>
  );
}