import { useRef, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import useProveedor from "../../hooks/useProveedor";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function FormProvider({ setOpen, setAlert, product }) {
  const formRef = useRef(null);

  const { submitProveedor} = useProveedor()
  const [name, setName] =useState('')
  const [direction, setDirection] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [alertWarnig, setAlertWarnig] = useState(false);

  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleSubmit = e => {
    e.preventDefault();

    if([name,direction, description].includes('')) {
      setAlertWarnig(true);

      return
    }

    submitProveedor({name,direction,description,email,phone})

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
      <div className="overflow-hidden">
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
                Direccion
              </label>
              <input
                defaultValue={product?.price}
                type="text"
                name="price"
                id="price"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={direction}
              onChange={(e) => setDirection(e.target.value)}
              />
            </div>


            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Telefono
              </label>
              <input
                defaultValue={product?.telefono}
                type="text"
                name="price"
                id="price"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            </div>


            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electronico
              </label>
              <input
           
                type="text"
                name="price"
                id="price"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              >
                
              </textarea>
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
