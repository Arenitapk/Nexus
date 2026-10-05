import Filter from '../components/Filter'
import React from 'react'
import { useEffect, useState } from 'react'
import useProducts from '../components/custsomHook/useProducts'
import Cards from '../components/Cards'

const AllProducts = () => {

    const [productos, setProductos] = useState([])
    const [search, setSearch] = useState('')
    const [selectMarca, setSelectMarca] = useState('')
    const [selectPrecio, setSelectPrecio] = useState('')
    const [selectCategoria, setSelectCategoria] = useState('todos')

    useEffect(() => {
        fetch('http://localhost:3000/productos')
        .then(resultado => resultado.json())
        .then(data => {
            setProductos(data)
        })
    },[])

    console.log("search:", search)
    console.log("marca:", selectMarca)

    const filtradoTotal = productos.filter((item) => {
            
        const BusquedaFiltrada = 
        search.toLowerCase() === '' || item.nombre.toLowerCase().includes(search)

        const filtradoPrecios = selectPrecio === "" ||
                             (selectPrecio === "2M" && item.precio < 2000000) ||
                             (selectPrecio === "+2M" && item.precio >= 2000000 && item.precio < 3000000) ||
                             (selectPrecio === "+3M" && item.precio >= 3000000 && item.precio < 4000000) ||
                             (selectPrecio === "+4M" && item.precio >= 4000000 && item.precio < 5000000) ||
                             (selectPrecio === "+5M" && item.precio >= 5000000)
            
        const MarcaFiltrada =  selectMarca === '' || item.marca.includes(selectMarca)          


        const categoriaFiltrada = selectCategoria === 'todos' ||
                                    (selectCategoria === 'celular' && item.categoria.includes('Celular')) ||
                                    (selectCategoria === 'laptop' && item.categoria.includes('Portátil'))

            return BusquedaFiltrada && filtradoPrecios && MarcaFiltrada && categoriaFiltrada
            })

    const productosAleatorios = filtradoTotal ? [...filtradoTotal].sort(() => Math.random() - 0.5) : [];

  return (
    <section className="">
        <div className="text-white bg-[url('./assets/fondoProductos.png')] bg-cover lg:px-25 pt-25 pb-8">
            <p>CATALOGO DE PRODUCTOS</p>
            <h1 className='font-title text-6xl'>Todos los productos</h1>
        <Filter productos={productos} setSearch={setSearch} setSelectMarca={setSelectMarca} setSelectPrecio={setSelectPrecio} setSelectCategoria={setSelectCategoria} selectCategoria={selectCategoria}/>
        </div>

        <div className='grid lg:grid-cols-5 place-items-center'>

            {productosAleatorios.map((producto) => {
            return (
            <Cards  key={producto?.id} producto={producto}/>
            )
        })}
        </div>
    </section>
  )
}

export default AllProducts