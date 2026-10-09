import React from 'react'
import { useState } from 'react'
import { IoIosMenu } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import { NavLink } from 'react-router'
import logoNexus from '../../assets/logo.png'


const MenuHamburguesa = () => {

    const [abierto, setAbierto] = useState(false)

    const funcionMenu = () => {
        setAbierto(!abierto)
    }

    const navStyle = ({isActive}) => 
    `font-semibold transition-all duration-200 ${isActive ? 'text-white border-b-2 border-white' : 'text-transparent'}`

  return (
    <div className='relative lg:hidden'>
        <button className='cursor-pointer' onClick={funcionMenu}>
            <IoIosMenu className='text-white w-8 h-auto'/>
        </button>
            <div className={`fixed bg-gradient-to-b from-white via-gray-500 to-gray-600 px-0.5 top-0 h-full w-80 shadow-4xl transform ${abierto ? '-translate-x-55' : 'translate-x-full'} transition-all duration-300 ease-in-out z-50`}>
                <div className='bg-black h-full p-5'>
                    <button className='cursor-pointer' onClick={funcionMenu}>
                        <IoCloseOutline className='text-white w-8 h-auto'/>
                    </button>
                    <div className='flex justify-center'>
                        <ul className='flex flex-col mx-auto text-2xl gap-6 pt-20 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent'>
                            <NavLink className={navStyle} to={'/'}>Home</NavLink>
                            <NavLink className={navStyle} to={'/productos'}>Productos</NavLink>
                            <NavLink className={navStyle} to={'/nosotros'}>Nosotros</NavLink>
                            <NavLink className={navStyle} to={'/contacto'}>Contacto</NavLink>
                        </ul>
                    </div>
                    <div className='flex justify-center mt-25'>
                        <img className='max-w-50' src={logoNexus} alt="Logo Nexus"/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MenuHamburguesa