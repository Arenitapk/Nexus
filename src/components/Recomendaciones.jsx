import React from 'react'
import imageIphone from '../assets/iphone17.png'
import imageMac from '../assets/mac.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa"

const Recomendaciones = () => {
  return (
    <section className='mx-auto px-2 md:px-5 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 lg:gap-6'>
            <div className='flex-1 w-full bg-gradient-to-r from-white via-gray-500 to-gray-600 p-0.5 rounded-2xl mb-5 h-[320px]'>
                <div className="flex bg-[url('./assets/bg-recomendaciones.jpg')] bg-cover rounded-2xl h-full overflow-hidden">
                    <div className='flex-1 flex flex-col bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent pl-5 lg:pl-15 pt-12'>
                        <p className='text-md lg:text-2xl'>CELULARES</p>
                        <h2 className='font-title text-4xl lg:text-6xl'>Ultimos lanzamientos</h2>
                        <p className='text-xl'>Lo mas avanzado en tus manos.</p>
                        <FaRegArrowAltCircleRight className='text-gray-400 w-13 h-auto pt-3'/>
                    </div>
                    <div className='flex-1 flex items-end justify-end'>
                        <img className='object-contain object-bottom max-w-[300px]' src={imageIphone} alt="Iphone 17 pro max" />
                    </div>
                </div>
            </div>
            <div className='flex-1 w-full bg-gradient-to-r from-white via-gray-500 to-gray-600 p-0.5 rounded-2xl h-[320px]'>
                <div className="flex bg-[url('./assets/bg-recomendaciones2.jpg')] bg-cover rounded-2xl h-full overflow-hidden">
                    <div className='flex-1 flex flex-col bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent pl-5 lg:pl-15 pt-12'>
                        <p className='text-2xl'>LAPTOPS</p>
                        <h2 className='font-title text-4xl lg:text-6xl'>Rendimiento sin limites</h2>
                        <p className='text-xl'>Potencia, diseño y productividad.</p>
                        <FaRegArrowAltCircleRight className='text-gray-400 w-13 h-auto pt-3'/>
                    </div>
                    <div className='flex-1 flex items-end justify-end'>
                        <img className='object-contain object-bottom max-w-[300px]' src={imageMac} alt="Mac ultimo modelo"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recomendaciones