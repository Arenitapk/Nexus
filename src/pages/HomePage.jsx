import React from 'react'
import Encabezado from '../components/layout/Encabezado'
import Hero from '../components/Hero'
import Recomendaciones from '../components/Recomendaciones'
import ProductosDestacados from '../products/ProductosDestacados'
import VerAccesorios from '../VerAccesorios'

const HomePage = () => {
  return (
    <div>
        <Encabezado/>
        <Hero/>
        <Recomendaciones/>
        <ProductosDestacados/>
        <VerAccesorios/>
    </div>
  )
}

export default HomePage