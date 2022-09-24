import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/userContext";
import { useNavigate } from "react-router-dom";
import { getActiveNotes, getUserLogged } from "../utils/api";
import { NotePlaceholder } from "../components/NotePlaceholder";
import { NewNoteBtn } from "../components/NewNoteBtn";
import { NoteCard } from "../components/NoteCard";
import ThemeContext from "../utils/themeContext";
import LangContext from "../utils/langContext";

export const Notes = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [notes, setNotes] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  let style = "text-center font-semibold text-xl font-Poppins mb-5 mt-10";
  if (theme !== "light") {
    style =
      "text-center font-semibold text-xl font-Poppins mb-5 mt-10 text-white";
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/login");
    } else if (user === null) {
      getUserLogged().then((response) => {
        setUser(response.data);
      });
    }

    getActiveNotes().then((response) => {
      if (notes == null) {
        setTimeout(() => {
          setNotes(response.data);
        }, 3000);
      }
    });
  }),
    [];

  if (user !== null) {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <div
              className={
                theme === "light" ? "min-h-screen" : "min-h-screen bg-dark"
              }
            >
              <div className="user-data m-5 text-lg bg-blue-500 rounded p-2 text-white">
                <p className="">
                  {lang === "en" ? (
                    <>
                      Hello,{" "}
                      <span className="font-semibold">{user.user.name}</span>
                    </>
                  ) : (
                    <>
                      Halo,{" "}
                      <span className="font-semibold">{user.user.name}</span>
                    </>
                  )}
                </p>
                <div
                  className="bg-red-700 text-[14px] font-semibold w-min px-3 py-1 rounded mt-2 cursor-pointer hover:bg-red-600"
                  title="Logout"
                  onClick={() => {
                    setUser(null);
                    navigate("/");
                    localStorage.removeItem("accessToken");
                  }}
                >
                  {lang === "en" ? "Logout" : "Keluar"}
                </div>
              </div>
              <h1 className={style}>Notes</h1>
              <div className="grid gap-1 px-5 max-w-full overflow-x-hidden grid-cols-1 pb-20">
                {notes !== null ? (
                  notes.length > 0 ? (
                    notes.map((note) => {
                      return <NoteCard note={note} key={note.id} />;
                    })
                  ) : (
                    <p
                      className={
                        theme === "light"
                          ? "text-center text-lg font-semibold mt-10"
                          : "text-center text-lg font-semibold mt-10 text-white"
                      }
                    >
                      {lang === "en"
                        ? "No notes found"
                        : "Tidak ada catatan"}
                    </p>
                  )
                ) : (
                  <div className="grid grid-cols-1 gap-1">
                    <NotePlaceholder />
                    <NotePlaceholder />
                    <NotePlaceholder />
                  </div>
                )}
              </div>
              <NewNoteBtn />
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
};
