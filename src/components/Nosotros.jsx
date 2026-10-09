import React from 'react'

const Nosotros = () => {
  return (
    <>
    <section className="bg-[url('./assets/bg-nosotros.png')] bg-cover py-35">
        <div className='bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text w-4xl mx-15 w-2xl'>
            <p>SOBRE NEXUS</p>
            <h1 className='font-title text-7xl w-md'>Tecnologia que nos conecta</h1>
            <h2 className='text-7xl'>Bienvenido a NEXUS</h2>
            <p className='w-md text-xl pt-5'>Somos una tienda online de tencologia creada para personas que viven la innovacion, nuestro proposito es acercarte a los mejores dispositivos, con un servicio seguro, confiable y una experiencia de compra unica.</p>
        </div>
    </section>
    <section className='pt-15'>
        <div className='mx-15 flex flex-row gap-15'>
          <div className='flex-1 bg-gradient-to-r from-white via-gray-400 to-gray-700 p-0.5 rounded-2xl'>
            <div className=''>
              <img className='rounded-2xl' src="/src/assets/imageNosotros.png" alt="imagen de tienda Nexus" />
            </div>
          </div>
          <div className='flex-1 bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text'>
            <p>NUESTRA HISTORIA</p>
            <h2 className='font-title text-7xl'>Lo que nos impulsa</h2>
            <p className='w-md pb-5'>Nexus nacio de una idea simple: hacer que la tecnologia sea mas accesible, confiable y emocionante para todos.</p>
            <p className='w-md pb-5'>Desde el primer dia, hemos trabajado para construir una comunidad que comparte la misma pasion: explorar, crear y vivir un mundo mas conectado.</p>
            <div className='flex flex-row gap-30'>
              <div className='flex flex-col'>
                <h3 className='font-title text-6xl'>+10K</h3>
                <p>Clientes satisfechos</p>
              </div>
              <div className='flex flex-col'>
                <h3 className='font-title text-6xl'>+5</h3>
                <p>Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Nosotros