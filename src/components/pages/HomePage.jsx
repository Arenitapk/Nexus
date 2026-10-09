import React from 'react'
import Encabezado from '../layout/Encabezado'
import Hero from '../Hero'
import Recomendaciones from '../Recomendaciones'
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