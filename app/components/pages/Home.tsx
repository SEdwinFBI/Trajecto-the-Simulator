import React, { useRef } from 'react'
import Trajecto from '@canvas/Trajecto'
import Parametros from '@/components/forms/ParametrosSimulador'


const Home = () => {

  return (
    <section className='flex flex-col w-full justify-center content-center mt-4 text-white ' >
      <div className='grid lg:grid-cols-2 md:grid-cols-2  content-center w-full justify-between gap-5  '>
        <div className=' w-full rounded-2xl relative bg-black  border-purple-950 border-1 hover:border-purple-900   '  >
          <Trajecto />
        </div>
        <div className='flex flex-col justify-center content-center p-3 bg-blue-1000 rounded-2xl  border-purple-950 border-1 hover:border-purple-900'>
          <div className='text-center font-bold text-2xl mb-2'>
            <h1 className="text-2x1  font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400" >
              Parametros de simulacion
            </h1>
          </div>
          <Parametros />
        </div>
      </div>

      <footer className='flex flex-col content-center justify-center text-center mt-5 text-xs' >
      &copy; 2025 Trajecto by Edwin Baquiax. Todos los derechos reservados.
         </footer>
    </section>
  )
}

export default Home
