import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/layout/MainLayout'
import useProducts from './components/custsomHook/useProducts'
import HomePage from './pages/HomePage'
import AllProducts from './products/AllProducts'

const App = () => {

  const {productos, cargando, fetchProductos} = useProducts()

  useEffect(() => {
    fetchProductos()
  },[])

  if(cargando) {
    <h1>Cargando manito</h1>
  }

  console.log("productos",productos)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {index: true, element: <HomePage/>},
        {path: '/productos', element: <AllProducts/>}
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App