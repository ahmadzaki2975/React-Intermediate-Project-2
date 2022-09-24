import { showFormattedDate} from "../utils/dateFormat";
import { textCut } from "../utils/textCut";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LangContext from "../utils/langContext";

export const NoteCard = (props) => {
  const note = props.note;
  const { lang, setLang } = useContext(LangContext);

  return (
    <div
      className="note text-lg w-full bg-blue-500 rounded p-2 text-white"
      data-aos="fade-right"
    >
      <p className="font-semibold text-xl">{note.title}</p>
      <p className="text-sm">{showFormattedDate(note.createdAt)}</p>
      <div className="w-full h-[1px] bg-white mb-2"></div>
      <p className="text-[16px]">{textCut(note.body)}</p>
      <Link to={`/notes/${note.id}`}>
        <div className="font-semibold w-max py-1 rounded mt-2 cursor-pointer hover:underline">
          {
            lang === "en"
            ? <>More details &rarr;</>
            : <>Detail lebih &rarr;</>
          }
        </div>
      </Link>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
};