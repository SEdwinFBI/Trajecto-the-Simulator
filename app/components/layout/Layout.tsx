import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <main className='container p-2 w-full h-screen content-center '>
      <div className='text-center mb-5'>
        <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400'>Simulador de Movimiento parabolico  y tiro vertical</h1>
      </div>
      <Outlet/>
    </main>
  )
}

export default Layout
