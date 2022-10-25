import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [product, setProduct] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMateria, setModalMateria] = useState(false);
  const [modalEliminarProduct, setModalEliminarProduct] = useState(false);

  useEffect(() => {
    

    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const { data } = await clienteAxios("/product/getAllProduct");
      setProducts(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  const submitProducto = async (product) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };

      const { data } = await clienteAxios.post(
        "/product/createProduct",
        product,
        config
      );
      setProducts([...products, data.body]);

      setNotify({
        isOpen: true,
        message: "Producto Guardado Correctamente",
        type: "success",
      });
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProducto = async () => {
    try {
      await clienteAxios.delete(`product/deleteProduct/${product}`);

      const { data } = await clienteAxios("/product/getAllProduct");
      setProducts(data.body);

      setNotify({
        isOpen: true,
        message: "Producto Eliminado Correctamente",
        type: "success",
      });
      setModalEliminarProduct(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalEliminarProduct = (nameProduct) => {
    setProduct(nameProduct);
    console.log(nameProduct);
    setModalEliminarProduct(!modalEliminarProduct);
  };

  const addMaterialProduct = async (
    idProduct,
    idMaterialPrima,
    amountMaterial
  ) => {
    const { data } = await clienteAxios.put(
      `/product/AddMaterial/${idProduct}`,
      { id: idMaterialPrima, amount: amountMaterial }
    );
    obtenerProductos();
    setModalMateria(false);
    setNotify({
      isOpen: true,
      message: "Materia Prima Agregado Correctamente",
      type: "success",
    });

   
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        submitProducto,
        notify,
        setNotify,
        modal,
        setModal,
        deleteProducto,
        handleModalEliminarProduct,
        modalEliminarProduct,
        setModalEliminarProduct,
        product,
        addMaterialProduct,
        modalMateria,
        setModalMateria
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };

export default ProductContext;
