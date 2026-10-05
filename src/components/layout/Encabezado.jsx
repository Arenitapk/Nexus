import React from 'react'
import { NavLink } from 'react-router'
import logoNexus from '../../assets/logo.png'
import { RiShoppingCartLine } from "react-icons/ri"
import MenuHamburguesa from './MenuHamburguesa'

const Encabezado = () => {

  const navStyle = ({isActive}) => 
    `font-semibold transition-all duration-200 ${isActive ? 'text-white border-b-2 border-white' : 'text-transparent'}`

  return (
    <header className='absolute w-full flex overflow-hidden'>
        <nav className='flex w-full justify-between mx-[3vh] md:mx-[8vh] lg:mx-[15vh] xl:mx-[20vh] my-3 p-3'>
            <div>
              <NavLink className='flex' to={'/'}>
                <img className='max-w-30' src={logoNexus} alt="Logo Nexus"/>
              </NavLink>
            </div>
            <div className='hidden lg:flex bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent text-xl gap-10'>
              <NavLink className={navStyle} to={'/'}>Home</NavLink>
              <NavLink className={navStyle} to={'/productos'}>Productos</NavLink>
              <NavLink className={navStyle} to={'/nosotros'}>Nosotros</NavLink>
              <NavLink className={navStyle} to={'/contacto'}>Contacto</NavLink>
            </div>
            <div className='flex flex-row gap-6'>
              <NavLink to={'/'}>
                <RiShoppingCartLine className='text-white w-7 h-auto'/>
              </NavLink>
              <MenuHamburguesa/>
            </div>
        </nav>
    </header>
  )
}

export default Encabezado