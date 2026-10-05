import React from 'react'
import { useState } from 'react'

const useProducts = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const fetchProductos = () => {
        fetch('http://localhost:3000/productos')
        .then(resultado => resultado.json())
        .then(data => {
            setProductos(data)
            setCargando(false)
        })
    }
    
  return {
    productos,
    setProductos,
    cargando,
    setCargando,
    fetchProductos
  }
}

export default useProducts