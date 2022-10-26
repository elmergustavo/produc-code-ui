import React, { useRef, useState } from "react";
import useProduct from "../../hooks/useProduct";
import { useStateContext } from "../../contexts/ContextProvider";
import Notification from "../Notification";

const FormCreateOrder = ({ idProduct }) => {
  const formRef = useRef(null);
  const [order, setOrder] = useState("");
  const [sale, setSale] = useState("");

  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const { createOrderProduct, notify, setNotify } = useProduct();

  const handleSubmit = (e) => {
    e.preventDefault();

    createOrderProduct({ order, sale, idProduct: idProduct });
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="overflow-hidden ">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cantidad a Ordenar
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Venta del Día
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              style={{ backgroundColor: currentColor }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Guardar
            </button>
          </div>
        </div>
      </form>

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default FormCreateOrder;
