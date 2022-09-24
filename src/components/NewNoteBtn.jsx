import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NewNoteBtn = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <Link to={"/new"}>
        <div
          className="bg-blue-400 rounded-full p-5 m-8 cursor-pointer shadow-md text-white drop-shadow-[0_0_3px_white]"
          title="New Note"
        >
          <FaPlus />
        </div>
      </Link>
    </div>
  );
};
