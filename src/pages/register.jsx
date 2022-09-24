import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import { useEffect } from "react";
import ThemeContext from "../utils/themeContext";
import LangContext from "../utils/langContext";

export const Register = () => {
  const navigate = useNavigate();
  const {theme, setTheme} = useContext(ThemeContext);
  const {lang, setLang} = useContext(LangContext);

  let divStyle = "flex justify-center min-h-screen items-center w-full"
  if(theme !== "light") {
    divStyle = "flex justify-center min-h-screen items-center w-full bg-dark text-white"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      alert("Username must be atleast 3 characters long");
    } else if (password.length < 6) {
      alert("Password must be atleast 6 characters long");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userData = { name: name, email: email, password: password };
      register(userData)
        .then((response) => {
          console.log(response);
          alert("User registered successfully");
          navigate("/login");
        })
        .catch((err) => {
          alert(err.data.message);
        });
    }
  };

  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("accessToken") !== null) {
      navigate("/notes");
    }
  }, [])

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
            lang === "en" ? "Register" : "Daftar"
          }
        </h1>
        <label htmlFor="username" data-aos="fade-right" data-aos-delay="400">
          {
            lang === "en" ? "Username" : "Nama Pengguna"
          }
        </label>
        <input
          className="outline outline-1 rounded w-full text-center text-black"
          type="text"
          name="username"
          id="username"
          value={name}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          data-aos="fade-right" data-aos-delay="500"
        />
        <label htmlFor="email" data-aos="fade-right" data-aos-delay="600">Email</label>
        <input
          className="outline outline-1 rounded w-full text-center text-black"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          data-aos="fade-right" data-aos-delay="600"
        />
        <label htmlFor="password" data-aos="fade-right" data-aos-delay="700">Password</label>
        <input
          className="outline outline-1 rounded w-full text-center text-black" 
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          data-aos="fade-right" data-aos-delay="800"
        />
        <label htmlFor="confirmPassword" data-aos="fade-right" data-aos-delay="900">
          {
            lang === "en" ? "Confirm Password" : "Konfirmasi Password"
          }
        </label>
        <input
          className="outline outline-1 rounded w-full text-center text-black"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          data-aos="fade-right" data-aos-delay="1000"
        />
        <button
          className="bg-blue-500 w-full rounded text-white py-1 mt-2 hover:bg-blue-600"
          type="submit"
          data-aos="fade-right" data-aos-delay="1100"
        >
          {
            lang === "en" ? "Register" : "Daftar"
          }
        </button>
        <div
          className="border-blue-500 border text-blue-500 w-full rounded py-1 mt-2 hover:bg-slate-200 cursor-pointer text-center"
          onClick={() => {
            navigate("/");
          }}
          data-aos="fade-right" data-aos-delay="1200"
        >
          {
            lang === "en" ? "Back to Home" : "Kembali ke Beranda"
          }
        </div>
      </form>
    </div>
  );
};
