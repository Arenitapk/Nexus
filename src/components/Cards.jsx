import React from 'react'

const Cards = ({producto}) => {
  return (
    <div className='bg-gradient-to-r from-white via-gray-500 to-gray-600 p-0.5 rounded-2xl w-[155px] md:w-[220px] lg:w-[220px] xl:w-[220px] 2xl:w-[250px] mt-5 hover:scale-110 cursor-pointer transition-all'>
        <div className='bg-black w-full rounded-2xl'>
            <div className='flex-1 flex items-start h-40 lg:h-60 overflow-hidden'>
                <img src={producto?.imagen} alt="imagen de producto" />
            </div>
            <div className='flex-2 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent h-38 px-8 pt-5'>
                <p>{producto?.categoria}</p>
                <h2 className='text-white font-semibold line-clamp-1'>{producto?.nombre}</h2>
                <h3>{producto?.almacenamiento}</h3>
                <h2 className='text-white font-semibold mt-2 lg:mt-5 text-md lg:text-xl'>${Number(producto?.precio).toLocaleString('es-CO')}</h2>
            </div>
        </div>
    </div>
  )
}

export default Cards