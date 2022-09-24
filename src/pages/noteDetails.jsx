import { useState, useContext } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackBtn } from "../components/BackButton";
import { getNote } from "../utils/api";
import { showFormattedDate } from "../utils/dateFormat";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/api";
import { NotePlaceholder } from "../components/NotePlaceholder";
import ThemeContext from "../utils/themeContext";
import LangContext from "../utils/langContext";

export const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  let style = "text-center font-semibold text-xl font-Poppins mb-5";
  if (theme !== "light") {
    style = "text-center font-semibold text-xl font-Poppins mb-5 text-white";
  }


  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/login");
    }
    getNote(id).then((response) => {
      if (note == null) {
        setTimeout(() => {
          setNote(response.data);
        }, 3000);
      }
    });
  }),
    [id];

  if (note !== null) {
    return (
      <div className="mt-[80px] pt-5 min-h-screen">
        <h1 className={style}>
          {lang === "en" ? "Note Details" : "Detail Catatan"}
        </h1>
        <div className="mt-5 p-5 bg-blue-500 text-white">
          <h1 className="text-xl font-semibold">{note.title}</h1>
          <p>{showFormattedDate(note.createdAt)}</p>
          <div className="w-full h-[1px] bg-white mb-2"></div>
          <p>{note.body}</p>
          <div className="flex gap-1 justify-end mt-2">
            <div
              className="w-min bg-red-500 px-3 py-1 rounded cursor-pointer hover:bg-red-600"
              onClick={() => {
                deleteNote(note.id).then((response) => {
                  alert("Note deleted successfully");
                  navigate("/notes");
                });
              }}
            >
              {
                lang === "en" ? "Delete" : "Hapus"
              }
            </div>
            <div
              className="w-max bg-slate-400 px-3 py-1 rounded cursor-pointer hover:bg-slate-300"
              onClick={() => {
                if (note.archived) {
                  unarchiveNote(note.id).then((response) => {
                    alert("Note unarchived successfully");
                    navigate("/notes");
                  });
                } else {
                  archiveNote(note.id).then((response) => {
                    alert("Note archived successfully");
                    navigate("/archive");
                  });
                }
              }}
            >
              {
                note.archived ? (
                  lang === "en" ? "Unarchive" : "Keluarkan dari Arsip"
                ) : (
                  lang === "en" ? "Archive" : "Arsipkan"
                )
              }
            </div>
          </div>
          <BackBtn />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-[80px] pt-5 min-h-screen">
        <h1 className={style}>
          {
            lang === "en" ? "Note Details" : "Detail Catatan"
          }
        </h1>
        <NotePlaceholder />
      </div>
    );
  }
};
