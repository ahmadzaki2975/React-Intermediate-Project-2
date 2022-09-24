import { FaBackward } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 right-0">
      <Link to={"/new"}>
        <div
          className="bg-blue-500 z-10 rounded-full p-5 m-5 cursor-pointer shadow-md text-white drop-shadow-[0_0_3px_white]"
          title="New Note"
          onClick={() => {navigate(-1)}}
          
        >
          <FaBackward />
        </div>
      </Link>
    </div>
  );
};