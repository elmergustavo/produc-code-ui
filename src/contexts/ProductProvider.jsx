import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const { data } = await clienteAxios("/product/getAllProduct");
        setProducts(data.body);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };

export default ProductContext;
