import React from 'react'
import { CiSearch } from "react-icons/ci"

const Filter = ({setSearch, setSelectMarca, productos, setSelectPrecio, setSelectCategoria, selectCategoria}) => {

    const marcasUnicas = [...new Set(productos.map(item => item.marca))]

    const getNavStyle = (activo) =>
        `font-semibold cursor-pointer hover:scale-110 transition-all ${activo ? 'border-2 rounded-2xl border-gray-400 text-white p-1 px-2' : 'font-semibold'}`

  return (
    <div className='flex flex-row my-10 justify-between'>
        <div className='flex flex-row gap-3'>
        <CiSearch className='w-9 h-auto'/>
        <input type="text" onChange={(evento) => setSearch(evento.target.value)} className='rounded-2xl border-2 border-gray-400 text-white w-sm p-2 hover:scale-105 transition-all' placeholder='Buscar productos...'/>
        </div>
        <div className='flex text-white gap-10 border-2 border-zinc-500 p-2 rounded-2xl px-10'>
            <button onClick={() => setSelectCategoria('todos')} className={getNavStyle(selectCategoria === 'todos')}>Todos</button>
            <button onClick={() => setSelectCategoria('celular')} className={getNavStyle(selectCategoria === 'celular')}>Celulares</button>
            <button onClick={() => setSelectCategoria('laptop')} className={getNavStyle(selectCategoria === 'laptop')}>Portatiles</button>
        </div>
        <div className='flex items-center'>
            <select onChange={(evento) => setSelectPrecio(evento.target.value)} className='text-white border-2 cursor-pointer border-zinc-500 p-2 rounded-2xl bg-black hover:scale-105 transition-all'>
                <option value="" selected>Precio: Todos</option>
                <option value="2M">Menos de 2 Millones</option>
                <option value="+2M">Entre 2 y 3 Millones</option>
                <option value="+3M">Entre 3 y 4 Millones</option>
                <option value="+4M">Entre 4 y 5 Millones</option>
                <option value="+5M">Mas de 5 Millones</option>
            </select>
        </div>
        <div className='flex items-center'>
            <select onChange={(evento) => setSelectMarca(evento.target.value)} className='bg-black text-white cursor-pointer border-2 border-zinc-500 p-2 rounded-2xl hover:scale-105 transition-all px-5'>
                <option value="" selected>Marca: Todas</option>
                {marcasUnicas.map((marca) => (
                    <option key={marca} value={marca}>{marca}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Filter