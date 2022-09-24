import { useState } from "react";
import { addNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import LangContext from "../utils/langContext";

export const NewNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const { lang, setLang } = useContext(LangContext);

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    if (localStorage.getItem("accessToken") == null) {
      navigate("/notes");
    }
  }, []);

  const handleNewNote = (e) => {
    e.preventDefault();
    if (title.length === 0 || body.length === 0) {
      alert("Please fill all the fields");
    } else {
      addNote({ title: title, body: body }).then((response) => {
        console.log(response);
        navigate("/notes");
      });
    }
  };

  if (token !== null) {
    return (
      <div className="mt-[80px] py-5 px-5 min-h-screen">
        <form
          className="w-full flex flex-col gap-2 bg-blue-400 p-5 rounded"
          onSubmit={(e) => {
            handleNewNote(e);
          }}
          data-aos="fade-right"
        >
          <h1 className="text-center font-semibold text-xl">
            {
              lang === "en" ? "Add a new note" : "Tambahkan catatan baru"
            }
          </h1>
          <input
            className="rounded p-1"
            type="text"
            placeholder={
              lang === "en" ? "Title" : "Judul"
            }
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="rounded p-1"
            placeholder={
              lang === "en" ? "Body" : "Isi"
            }
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <button
            className="bg-green-400 rounded mt-5 hover:bg-green-500"
            type="submit"
          >
            {
              lang === "en" ? "Add" : "Tambahkan"
            }
          </button>
          <div
            className="bg-white rounded text-center hover:bg-slate-200 cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            {
              lang === "en" ? "Back" : "Kembali"
            }
          </div>
        </form>
      </div>
    );
  }
};
