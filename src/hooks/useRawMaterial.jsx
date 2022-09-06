import {useContext} from 'react'
import RawMateriaContext from '../contexts/RawMaterialProvider'

const useRawMaterial = () => {
  return (
    useContext(RawMateriaContext)
  )
}

export default useRawMaterial