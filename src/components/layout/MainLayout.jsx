import React from 'react'
import { Outlet } from 'react-router'
import Encabezado from './Encabezado'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div>
      <Encabezado/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout