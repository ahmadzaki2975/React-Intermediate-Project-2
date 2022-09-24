import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import ThemeContext from "../utils/themeContext";
import LangContext from "../utils/langContext";

export const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  let divStyle = "flex justify-center w-full h-screen bg-white items-center";

  if (theme !== "light") {
    divStyle =
      "flex justify-center w-full h-screen bg-dark items-center text-white";
  }

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    if (token !== null) {
      navigate("/notes");
    }
  }),
    [];

  if (token == null) {
    return (
      <div className={divStyle}>
        <div className="flex flex-col items-center w-full px-5">
          <h1
            className="font-semibold text-5xl font-Poppins italic mb-5"
            data-aos="fade-right"
          >
            Notes<span className="text-blue-500">.</span>
          </h1>
          <p className="text-center" data-aos="fade-right" data-aos-delay="400">
            {lang === "en" ? (
              <>
                Welcome to Notes!
                <br />
                Register or Login to access your notes
              </>
            ) : (
              <>
                Selamat datang di Notes!
                <br />
                Daftar atau masuk untuk mengakses catatan Anda
              </>
            )}
          </p>
          <div className="w-full flex flex-col gap-2 mt-10">
            <Link
              to="/register"
              className="block bg-blue-500 p-1 rounded text-center text-white"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              {
                lang == "en" ? "Register" : "Daftar"
              }
            </Link>
            <Link
              to="/login"
              className="block bg-blue-500 p-1 rounded text-center text-white"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              {
                lang == "en" ? "Login" : "Masuk"
              }
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
