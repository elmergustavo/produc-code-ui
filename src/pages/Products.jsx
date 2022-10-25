import React, { useState } from "react";
import { Header, Modal } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import CollapsibleTable from "../components/Products/CollapsibleTable";
import useProduct from "../hooks/useProduct";


const Products = () => {
  const { currentColor, currentMode, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const [modal, setModal] = useState(false);

  const { products } = useProduct();

  return (
    <>
      <div
        className={`${
          currentMode === "Dark" ? "bg-[#33373E]" : "bg-[#fff]"
        } m-2 md:m-10 mt-24 p-2 md:p-10  rounded-3xl`}
      >
        <Header category="Página" title="Productos" />
        <div className="flex justify-end mb-4">
          <span className="sm:ml-3">
            <button
              style={{ backgroundColor: currentColor }}
              type="button"
              className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
              bg-sky-500 text-white text-center mt-5 flex gap-2 items-center justify-center"
              onClick={() => setModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Agregar Materia prima
            </button>
          </span>
        </div>

        <CollapsibleTable products={products} />

        <Modal
          modal={modal}
          setModal={setModal}
          name="Visualización de Productos"
          size={"sm:max-w-7xl"}
        >
          
        </Modal>
      </div>
    </>
  );
};

export default Products;
