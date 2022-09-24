import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/userContext";
import { getUserLogged, login } from "../utils/api";
import { useEffect } from "react";
import ThemeContext from "../utils/themeContext";
import LangContext from "../utils/langContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  let divStyle = "flex justify-center min-h-screen items-center w-full";
  if (theme !== "light") {
    divStyle =
      "flex justify-center min-h-screen items-center w-full bg-dark text-white";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { email: email, password: password };
    login(loginData)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        getUserLogged().then((response) => {
          if (response.error == false) {
            // alert("Login successful");
            setUser(response.data);
            navigate("/notes");
          }
        });
        navigate("/notes");
      })
      .catch((err) => {
        alert(err.data.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      navigate("/notes");
    }
  }, []);

  return (
    <div className={divStyle}>
      <form
        className="flex flex-col gap-1 items-center w-full p-10"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-xl font-semibold" data-aos="fade-right">
          {
            lang === "en"
            ? "Login"
            : "Masuk"
          }
        </h1>
        <label htmlFor="email" data-aos="fade-right" data-aos-delay="300">
          Email
        </label>
        <input
          className="outline outline-1 rounded w-full text-center"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <label htmlFor="password" data-aos="fade-right" data-aos-delay="500">
          Password
        </label>
        <input
          className="outline outline-1 rounded w-full text-center text-black"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <button
          className="bg-blue-500 w-full rounded text-white py-1 mt-2 hover:bg-blue-600"
          type="submit"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          {
            lang === "en"
            ? "Login"
            : "Masuk"
          }
        </button>
        <div
          className="border-blue-500 border text-blue-500 w-full rounded py-1 mt-2 hover:bg-slate-200 cursor-pointer text-center"
          onClick={() => {
            navigate("/");
          }}
          data-aos="fade-right"
          data-aos-delay="800"
        >
          {
            lang === "en"
            ? "Back to Home"
            : "Kembali ke Beranda"
          }
        </div>
      </form>
    </div>
  );
};
