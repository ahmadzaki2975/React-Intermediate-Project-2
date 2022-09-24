import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../utils/themeContext";
import { Link } from "react-router-dom";
import LangContext from "../utils/langContext";

export const NotFound = () => {
  const counter = useRef(0);
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  let style =
    "flex flex-col justify-center text-center font-semibold min-h-screen text-xl font-Poppins";
  if (theme !== "light") {
    style =
      "flex flex-col justify-center text-center font-semibold min-h-screen text-xl font-Poppins text-white";
  }

  return (
    <div className={style}>
      <h1 className="text-2xl font-Poppins font-semibold ">
        {lang === "en" ? (
          <>
            <span className="text-red-500">404</span> Page Not Found
          </>
        ) : (
          <>
            <span className="text-red-500">404</span> Halaman tidak ditemukan
          </>
        )}
      </h1>
      <p>
        {lang === "en" ? (
          <>
            Back to{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline font-semibold"
            >
              Home
            </Link>
          </>
        ) : (
          <>
            Kembali ke{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline font-semibold"
            >
              Beranda
            </Link>
          </>
        )}
      </p>
    </div>
  );
};
