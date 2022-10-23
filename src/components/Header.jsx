import React from "react";
import { useStateContext } from "../contexts/ContextProvider";



const Header = ({ category, title }) => {


  const { currentMode } = useStateContext();
  return (
    <div className=" mb-10">
      <p
        className={`${
          currentMode === "Dark" ? "text-[#fff]" : "text-slate-500"
        } text-lg`}
      >
        {category}
      </p>
      <p
        className={`${
          currentMode === "Dark" ? "text-[#fff]" : "text-slate-900"
        } text-3xl font-extrabold tracking-tight`}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
