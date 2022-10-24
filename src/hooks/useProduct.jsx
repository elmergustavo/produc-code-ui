import {useContext} from 'react'
import ProductContext from '../contexts/ProductProvider'
const useProduct = () => {
  return useContext(ProductContext)
}

export default useProduct