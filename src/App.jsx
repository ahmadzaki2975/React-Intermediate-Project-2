import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import UserContext from "./utils/userContext";
import { Notes } from "./pages/notes";
import { Archive } from "./pages/archive";
import { NewNote } from "./pages/newNote";
import { NoteDetails } from "./pages/noteDetails";
import { NotFound } from "./pages/notFound";
import ThemeContext from "./utils/themeContext";
import { ThemeBtn } from "./components/ThemeBtn";
import LangContext from "./utils/langContext";
import { Menu } from "./components/Menu";

document.addEventListener("DOMContentLoaded", (e) => {
  AOS.init({
    duration: 1000,
  });
});

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    if(localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
    if(localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    }
  }, []);

  return (
    <BrowserRouter>
      <LangContext.Provider value={{ lang, setLang }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <header>
            <Navbar />
            <Menu />
          </header>
          <main
            className={
              theme == "light"
                ? "overflow-x-hidden w-full font-Poppins"
                : "overflow-x-hidden w-full font-Poppins bg-dark"
            }
          >
            <div className="max-w-[450px] mx-auto ">
              <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                  //? Home Route
                  <Route path="/" element={<Home />} />
                  //? Notes Route
                  <Route path="/notes" element={<Notes />} />
                  //? Archive Route
                  <Route path="/archive" element={<Archive />} />
                  //? Register Route
                  <Route path="/register" element={<Register />} />
                  //? Login Route
                  <Route path="/login" element={<Login />} />
                  //? New Note Route
                  <Route path="/new" element={<NewNote />} />
                  //? Note Details Route
                  <Route path="/notes/:id" element={<NoteDetails />} />
                  //! Not Found Route
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </UserContext.Provider>
            </div>
          </main>
        </ThemeContext.Provider>
      </LangContext.Provider>
    </BrowserRouter>
  );
}

export default App;
