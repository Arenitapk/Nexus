import React from 'react'
import { Link } from 'react-router'

const VerAccesorios = () => {
  return (
    <div className='lg:mx-10 md:mx-8 mx-5'>
        <div className='rounded-2xl bg-gradient-to-r from-white via-gray-500 to-gray-600 p-0.5'>
            <div className="bg-[url('./assets/fondoAccesorios.png')] bg-cover bg-center bg-centerd rounded-2xl flex flex-row h-50 px-10 py-10 justify-between">
                <div className='bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent flex flex-col h-full'>
                    <p className='text-sm'>TU MUNDO, EN TUS MANOS</p>
                    <h2 className='font-title text-xl md:text-4xl  w-40 md:w-85'>Accesorios que complementan tu estilo</h2>
                </div>
                <div className='bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent flex items-start hover:scale-105 transition-all h-8'>
                    <Link>Ver accesorios →</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerAccesorios