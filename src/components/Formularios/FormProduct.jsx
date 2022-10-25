import { useRef, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import useProduct from "../../hooks/useProduct";

const FormProduct = ({ setOpen, setAlert, product }) => {
  const formRef = useRef(null);
  const [alertWarnig, setAlertWarnig] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState(true);
  const [stocks, setStocks] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryQuantity, setDeliveryQuantity] = useState("");

  const { products, submitProducto, notify, setNotify, modal, setModal } = useProduct();

  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, category, type, status, stocks,description, deliveryQuantity].includes("")) {
      setAlertWarnig(true);

      return;
    }

    submitProducto({ name, category, type, status, stocks,description, deliveryQuantity});
  };
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {alertWarnig ? (
          <Alert variant="filled" severity="warning">
            Todos los campos son necesarios
          </Alert>
        ) : (
          ""
        )}
      </Stack>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="overflow-hidden ">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  defaultValue={product?.title}
                  type="text"
                  name="title"
                  id="title"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Categoria
                </label>
                <input
                  defaultValue={product?.price}
                  type="text"
                  name="price"
                  id="price"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo
                </label>
                <input
                  defaultValue={product?.price}
                  type="text"
                  name="price"
                  id="price"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stock
                </label>
                <input
                  defaultValue={product?.title}
                  type="text"
                  name="title"
                  id="title"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={stocks}
                  onChange={(e) => setStocks(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estado
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                >
                  <option value={true} >Activo</option>
                  <option value={false}>Inactivo</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tiempo de entrega (días)
                </label>
                <input
                  defaultValue={product?.title}
                  type="text"
                  name="title"
                  id="title"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={deliveryQuantity}
                  onChange={(e) => setDeliveryQuantity(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripcion
                </label>
                <textarea
                  type="text"
                  name="price"
                  id="price"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
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
    </>
  );
};

export default FormProduct;
