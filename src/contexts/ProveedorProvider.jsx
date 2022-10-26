import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
const ProveedorContext = createContext();

const ProveedorProvider = ({ children }) => {
  const [proveedores, setProveedor] = useState([]);
  const { auth } = useAuth();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const obtenerProveedores = async () => {
      try {
        const { data } = await clienteAxios("/supplier/getAllSuppliers");
        setProveedor(data.body);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProveedores();
  }, [auth]);

  const submitProveedor = async (proveedor) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;


      console.log("--------------------------------------------")
      console.log(proveedor)

      const config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };
      const { data } = await clienteAxios.post(
        "/supplier/createSupplier",
        proveedor,
        config
      );
      setProveedor([...proveedores, data.body]);
      console.log(data.body);

      setNotify({
        isOpen: true,
        message: "Proveedor agregado Correctamente",
        type: "success",
      });
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProveedorContext.Provider
      value={{
        proveedores,
        submitProveedor,
        notify,
        setNotify,
        modal,
        setModal,
      }}
    >
      {children}
    </ProveedorContext.Provider>
  );
};

export { ProveedorProvider };

export default ProveedorContext;
