import type { simulatorState } from '@/types/inputsSimulator'
import React, { type Dispatch, type FC, type HTMLInputTypeAttribute, type SetStateAction } from 'react'

type propInput ={
    label:string,
    type:HTMLInputTypeAttribute,
    simulatorKey:keyof simulatorState
    captureValue:Dispatch<SetStateAction<simulatorState>>,
    value:number
}

const InputComponent:FC<propInput> = ({label,type,captureValue,simulatorKey: simulatorType,value}) => {
  return (
    <div className='flex flex-col w-full p-3 bg-blue-950 rounded-2xl'>
        <label htmlFor={label.trim()}>{label}</label>
        <input value={value} className='bg-blue-900 rounded-xl focus:outline-1 text-gray-200 text-end' type={type}  id={label.trim()} onChange={(e)=>captureValue((prev)=>({
            ...prev,
            [simulatorType]: e.target.value
        }))} />
    </div>
    
  )
}

export default InputComponent
