import React, { useState } from "react";
import Img from "../../assets/img/logo.jpg";
import Production from "../../assets/img/production.svg";
import clienteAxios from "../../config/clienteAxios";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setAuth} = useAuth();

  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      alert("Todos los campos son Obligatorios");

      return;
    }

    try {
      console.log(email, password);
      const { data } = await clienteAxios.post("/user/signIn", {
        email,
        password,
      });
      console.log("xdxdxd")
      console.log(data)
      localStorage.setItem('token', data.body.token)
      localStorage.setItem('id', data.body.id)

      setAuth(data.body)
  
    
      navigate('/admin')
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="block text-center rounded-lg md:grid md:grid-cols-1/5col  lg:grid-cols-2">
      <div className="container_left hidden bg-gray-100 md:block">
        <img className="h-screen w-full object-cover" src={Img} alt="" />
      </div>
      <div className="container_right flex flex-col justify-center bg-white h-screen p-5">
        <div className="flex justify-center">
          <img className="w-[400px]  " src={Production} />
        </div>
        <h3 className="text-2xl font-bold  text-left pl-12 ">
          Bienvenido a productCode👋
        </h3>
        <form
          onSubmit={handleSubmit}
          className="h-screen flex flex-col p-12 gap-5"
        >
          <h3 className="text-2xl font-medium text-left">
            Ingrese a su cuenta
          </h3>
          <div className="flex flex-col items-start gap-1">
            <label className="font-medium text-sm" type="email">
              Correo Electronico
            </label>
            <input
              id="email"
              className="w-full bg-blue-50 p-2 rounded-md text-sm outline-none"
              type="email"
              name="email"
              placeholder="Ingrese su Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="font-medium text-sm" type="password">
              Contraseña
            </label>
            <input
              className="w-full bg-blue-50 p-2 rounded-md outline-none text-sm"
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember_password flex justify-between w-full">
            <label className="remember_password_left flex items-center gap-1 cursor-pointer">
              <input type="checkbox" />
              <span className="text-sm">recordar contraseña</span>
            </label>
            <div className="remember_password_right">
              <a className="text-blue-500 text-sm" href="">
                ¿Contraseña olvidada?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-blue-400"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
        <div className="pb-5">
          <span>¿No tienes cuenta?</span>
          <a className="text-blue-500" href="">
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
