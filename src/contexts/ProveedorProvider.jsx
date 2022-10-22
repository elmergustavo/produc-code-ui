import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
const ProveedorContext = createContext();

const ProveedorProvider = ({ children }) => {
  const [proveedores, setProveedor] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const obtenerProveedores = async () => {
      try {
        const { data } = await clienteAxios("/supplier/getAllSuppliers");
        setProveedor(data)
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProveedores();

  },[]);

  const submitProveedor = async (proveedor) => {
    try {
      const { data } = await clienteAxios.post(
        "/supplier/createSupplier",
        proveedor
      );
      setProveedor([...proveedores, data])
      console.log(data);
      alert(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProveedorContext.Provider
      value={{
        proveedores,
        submitProveedor,
      }}
    >
      {children}
    </ProveedorContext.Provider>
  );
};

export { ProveedorProvider };

export default ProveedorContext;
