import React from 'react'
import imageHero from '../assets/heroProductos.png'

import { TbTruckDelivery } from "react-icons/tb"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { FaStore } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import { Link } from 'react-router'

const Hero = () => {
  return (
    <>
    <section className="bg-[url('./assets/hero.png')] bg-cover max-h-full overflow-hidden">
      <div className='flex flex-wrap justify-between'>
        <div className='flex-1 pt-[18vh] flex flex-col ml-[5vh] md:ml-[10vh] lg:ml-[12vh] xl:ml-[20vh] min-w-[350px] bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent'>
          <p className='text-white w-md mb-[1vh] text-xl'>TECNOLOGIA SIN LIMITES</p>
          <h1 className='text-6xl md:text-6xl lg:text-7xl font-title'>Celulares y portatiles</h1>
          <h2 className='text-6xl md:text-6xl lg:text-7xl mb-[3vh] lg:mb-[7vh] font-title'>Un mundo sin fronteras</h2>
          <p className='text-white w-80 lg:w-md mb-[5vh] lg:mb-[7vh] text-xl'>Rendimiento diseño y libertad en un solo lugar. Descubre la tecnologia que se adapta a ti</p>
          <Link className='border-white lg:mb-[10vh] rounded-2xl p-2 border-2 text-white text-xl lg:text-2xl font-semibold w-50 lg:w-sm hover:scale-105 transition-all text-center'>
          Explorar Productos
          </Link>
        </div>
        <div className='flex-2 min-w-[500px] lg:min-w-[530px] w-[800px] flex items-end justify-end'>
          <img className='w-full' src={imageHero} alt="productos del hero" />
        </div>
      </div>
    </section>
    <div className='flex flex-wrap pb-5 lg:divide-x lg:divide-gray-800 pt-5'>
      <div className='flex-1 flex flex-row items-center justify-items-start md:justify-center gap-5 p-5'>
      <TbTruckDelivery className='text-white w-12 h-auto'/>
        <div>
          <h3 className='text-white'>Envios rapidos</h3>
          <p className='text-gray-500'>A todo el pais</p>
        </div>
      </div>
      <div className='flex-1 flex flex-row items-center justify-items-start md:justify-center gap-5 p-5'>
      <AiFillSafetyCertificate className='text-white w-12 h-auto'/>
        <div>
          <h3 className='text-white'>Compra segura</h3>
          <p className='text-gray-500'>100% confiable</p>
        </div>
      </div>
      <div className='flex-1 flex flex-row items-center justify-items-start md:justify-center gap-5 p-5'>
      <FaStore className='text-white w-12 h-auto'/>
        <div>
          <h3 className='text-white'>Multiples formas</h3>
          <p className='text-gray-500'>de pago</p>
        </div>
      </div>
      <div className='flex-1 flex flex-row items-center justify-items-start md:justify-center gap-5 p-5'>
      <BiSupport className='text-white w-12 h-auto'/>
        <div>
          <h3 className='text-white'>Atencion personalizada</h3>
          <p className='text-gray-500'>Siempre para ti</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero