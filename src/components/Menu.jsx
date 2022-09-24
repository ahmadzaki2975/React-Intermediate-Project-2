import { ThemeBtn } from "./ThemeBtn";
import { LangBtn } from "./LangBtn";
import {BsFillGearFill as GearIcon} from "react-icons/bs";

export const Menu = () => {
  return (
    <div className="flex items-center justify-between fixed w-8 m-2">
      <div className="flex flex-col items-start h-8 overflow-y-hidden rounded hover:h-max transition ease-in shadow-md text-white drop-shadow-[0_0_3px_white]">
        <div className="bg-blue-500 w-8 p-2 text-center h-8 ">
          <GearIcon />
        </div>
        <div>
          <ThemeBtn />
        </div>
        <div>
          <LangBtn />
        </div>
      </div>
    </div>
  );
}