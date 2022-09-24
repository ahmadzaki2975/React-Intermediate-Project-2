import { createContext } from "react";

const LangContext = createContext(
  {
    lang: "en",
    setLang: (lang) => {}, 
  }
);

export default LangContext;