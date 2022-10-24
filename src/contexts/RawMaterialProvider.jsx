import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const RawMateriaContext = createContext();

const RawMaterialProvider = ({ children }) => {
  const [materiaPrima, setMateriaPrima] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const obtenerMateriaPrima = async () => {
      try {
        const { data } = await clienteAxios(
          "/rawMaterialRoutes/getAllRawMaterial"
        );
        console.log(data.body);
        setMateriaPrima(data.body);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerMateriaPrima();
  }, []);

  const submitRawMateria = async (rawMaterial) => {
    try {

      const token = localStorage.getItem("token");
        if (!token) return;

      const config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };

      const { data } = await clienteAxios.post(
        "/rawMaterialRoutes/createRawMaterial",
        rawMaterial,
        config
      );
      setMateriaPrima([...materiaPrima, data.body])

      setNotify({
        isOpen: true,
        message: "Materia Guardado Correctamente",
        type: "success",
      });
      setModal(false);
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RawMateriaContext.Provider
      value={{
        materiaPrima,
        submitRawMateria,
        notify,
        setNotify,
        modal,
        setModal
      }}
    >
      {children}
    </RawMateriaContext.Provider>
  );
};

export { RawMaterialProvider };

export default RawMateriaContext;
