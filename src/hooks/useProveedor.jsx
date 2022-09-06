import {useContext} from 'react'
import ProveedorContext from '../contexts/ProveedorProvider'

const useProveedor = () => {
  return useContext(ProveedorContext)
}

export default useProveedor