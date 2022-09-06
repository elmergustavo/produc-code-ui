import { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import useProveedor from "../hooks/useProveedor";
export default function FormProvider({ setOpen, setAlert, product }) {
  const formRef = useRef(null);

  const { submitProveedor} = useProveedor()
  const [name, setName] =useState('')
  const [direction, setDirection] = useState('')
  const [description, setDescription] = useState('')

  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleSubmit = e => {
    e.preventDefault();

    if([name,direction, description].includes('')) {
      alert("campos vacios")

      return
    }

    submitProveedor({name,direction,description})

  };

  return (
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
                Descripcion
              </label>
              <input
                defaultValue={product?.price}
                type="text"
                name="price"
                id="price"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                defaultValue={product?.category}
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              >
                <option value="1">Azucar</option>
              
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Telefono
              </label>
              <input
                defaultValue={product?.title}
                type="text"
                name="title"
                id="title"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
                defaultValue={product?.price}
                type="text"
                name="price"
                id="price"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          defaultValue={product?.images}
                          id="images"
                          name="images"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">Cargar Imagen</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
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
  );
}
