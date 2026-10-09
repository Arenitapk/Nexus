import React from 'react'
import { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router'

const ProductosDestacados = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/productos')
        .then(resultado => resultado.json())
        .then(data => {
            setProductos(data)
        })
    },[])

    console.log('productos:', productos)

    const celulares = productos.filter((p) => p.categoria === 'Celular').slice(0, 3)
    const portatiles = productos.filter((p) => p.categoria === 'Portátil').slice(0, 2)

    const destacados = [
        celulares[0],
        portatiles[0],
        celulares[1],
        portatiles[1],
        celulares[2]
    ]

  return (
    <section>
        <div className='px-5 lg:px-15 py-8'>
            <div className=' flex flex-row justify-between bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent md:px-8'>
                <div className='flex flex-col gap-5'>
                    <h3>PRODUCTOS DESTACADOS</h3>
                    <h2 className='font-title text-3xl lg:text-6xl'>Lo mejor, aqui</h2>
                </div>
                <Link className='flex text-xl lg:text-2xl items-end'>
                    Ver todos →
                </Link>
            </div>
            <div className='grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 place-items-center'>
                {destacados.map((producto) => {
                    return (
                    <Cards key={producto?.id} producto={producto}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default ProductosDestacados