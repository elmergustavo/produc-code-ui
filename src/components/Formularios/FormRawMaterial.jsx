import { useRef, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import useRawMaterial from "../../hooks/useRawMaterial";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";


export default function FormRawMaterial({ setOpen, setAlert, product }) {
  const formRef = useRef(null);
  const [alertWarnig, setAlertWarnig] = useState(false);
  const { submitRawMateria } = useRawMaterial();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [stock, setStock] = useState("");
  
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, category, cost, stock].includes("")) {
      setAlertWarnig(true);

      return;
    }

    submitRawMateria({ name, stock, category, cost });
    
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
                  Precio
                </label>
                <input
                  defaultValue={product?.price}
                  type="text"
                  name="price"
                  id="price"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
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
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
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

      
    </>
  );
}
