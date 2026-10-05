import React from 'react'
import logoNexus from '../../assets/logo.png'
import { Link } from 'react-router'
import { FaTiktok } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='lg:mx-15 lg:my-10 my-8 mx-10'>
      <div className='flex justify-between flex-col lg:flex-row items-center gap-6'>
        <div className='md:divide-x divide-gray-700 flex flex-col md:flex-row gap-6'>
          <div>
            <Link>
              <img className='max-w-40 pr-5' src={logoNexus} alt="Logo Nexus"/>
            </Link>
          </div>
          <div className='bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent w-40'>
            <p>Mas que tecnologia, es tu estilo de vida.</p>
          </div>
        </div>
        <div className='bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent flex gap-10 md:gap-15 items-center'>
          <Link>Terminos y condiciones</Link>
          <Link>Politica de privacidad</Link>
          <Link>Soporte</Link>
        </div>
        <div className='text-white flex flex-row gap-10'>
          <FaInstagram className='w-8 h-auto'/>
          <FaFacebook className='w-8 h-auto'/>
          <FaTiktok className='w-8 h-auto'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer