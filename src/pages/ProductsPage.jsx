import React from 'react'
import useProducts from '../components/custsomHook/useProducts'
import { useState } from 'react'

const ProductsPage = () => {

    const {productos, setProductos, fetchProductos} = useProducts()

    const [search, setSearch] = useState()

  return (
    <div>
        
    </div>
  )
}

export default ProductsPage