import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});


  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = () => {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");

      if (!token) {
        return;
      }

      setAuth({token: token, id: id});
       //navigate("/admin");

      console.log("si hay token " + token);
    };

    autenticarUsuario();
  },[]);



  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.clear();
    setAuth({});
  };


  return (
    <AuthContext.Provider
      value={{
        setAuth,
        auth,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
