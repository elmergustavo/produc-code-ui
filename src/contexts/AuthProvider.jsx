import {useState, useEffect, createContext} from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})

    useEffect(() => {
        const  autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if(!token) {
                return
            }

            console.log('si hay token')
        }

        autenticarUsuario()
    })
  return (
    <AuthContext.Provider
        value={{
            setAuth,
            auth
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export {
    AuthProvider
}

export default AuthContext;