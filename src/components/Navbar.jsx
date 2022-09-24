import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LangContext from "../utils/langContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const { lang, setLang } = useContext(LangContext);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }),[]

  if(token !== null) {
    return (
      <>
        <div
          className="w-min bg-blue-500 p-5 rounded-full fixed top-0 right-0 z-10 m-7 cursor-pointer shadow-md text-white drop-shadow-[0_0_3px_white]"
          onClick={() => {
            toggleNav();
          }}
          title="Open Navigation"
        >
          <GiHamburgerMenu />
        </div>
        {
          isOpen
          ? (<div
            className="w-min fixed right-0 h-screen rounded mr-5 text-white flex items-center"
            id="navbar"
            data-aos="fade-left"
          >
            <div className="flex flex-col items-center py-10 px-5 bg-blue-400 rounded drop-shadow-[0_0_3px_white]">
              <h1 className="font-semibold text-lg">
                {
                  lang === "en" ? "Navigation" : "Navigasi"
                }
              </h1>
              <ul className="text-center">
                <li>
                  <Link to="/notes" className="block hover:underline" onClick={() => {toggleNav()}}>
                    {
                      lang === "en"
                      ? "Notes"
                      : "Catatan"
                    }
                  </Link>
                </li>
                <li>
                  <Link to="/archive" className="block hover:underline" onClick={() => {toggleNav()}}>
                    {
                      lang === "en"
                      ? "Archive"
                      : "Arsip"
                    }
                  </Link>
                </li>
              </ul>
            </div>
          </div>)
          : ""
        }
      </>
    );
  }
};
