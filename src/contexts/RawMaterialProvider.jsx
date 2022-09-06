import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const RawMateriaContext = createContext();

const RawMaterialProvider = ({ children }) => {
  const [materiaPrima, setMateriaPrima] = useState([]);

  useEffect(() => {
    const obtenerMateriaPrima = async () => {
      try {
        const { data } = await clienteAxios(
          "/rawMaterialRoutes/getAllRawMaterial"
        );
        console.log(data);
        setMateriaPrima(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerMateriaPrima();
  }, []);

  const submitRawMateria = async (rawMaterial) => {
    try {
      const { data } = await clienteAxios.post(
        "/rawMaterialRoutes/createRawMaterial",
        rawMaterial
      );
      setMateriaPrima([...materiaPrima, data])
      console.log(data);
      alert(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RawMateriaContext.Provider
      value={{
        materiaPrima,
        submitRawMateria
      }}
    >
      {children}
    </RawMateriaContext.Provider>
  );
};

export { RawMaterialProvider };

export default RawMateriaContext;
