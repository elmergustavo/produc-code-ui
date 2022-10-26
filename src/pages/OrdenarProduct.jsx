import React from "react";
import { Header } from "../components";
import ModalTableProducts from "../components/Products/ModalTableProducts";
import { useStateContext } from "../contexts/ContextProvider";

const OrdenarProduct = () => {
  const { currentColor, currentMode, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  return (
    <>
      <div
        className={`${
          currentMode === "Dark" ? "bg-[#33373E]" : "bg-[#fff]"
        } m-2 md:m-10 mt-24 p-2 md:p-10  rounded-3xl`}
      >
        <Header category="Página" title="Crear Orden" />
     

        <ModalTableProducts />

      
      </div>
    </>
  );
};

export default OrdenarProduct;
