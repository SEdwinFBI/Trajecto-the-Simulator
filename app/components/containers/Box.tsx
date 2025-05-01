import React, { Children, type FC, type ReactNode } from 'react'
type PropsBox={
  children:ReactNode
}

const Box:FC<PropsBox> = ({children}) => {
  return (
    <div className='w-full h-full '>
      {children}
    </div>
  )
}

export default Box
