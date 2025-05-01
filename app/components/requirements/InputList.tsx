import  { useState, type FC,type Dispatch,type SetStateAction } from 'react'
import { type simulatorState } from '@/types/inputsSimulator'

type PropsInputList ={
        simulatorKey:keyof simulatorState
        captureValue:Dispatch<SetStateAction<simulatorState>>
}

const InputList:FC<PropsInputList> = ({captureValue,simulatorKey: simulatorType}) => {
    
  return (
    <select
    className="p-3 w-full bg-blue-950 text-white  rounded-lg border border-gray-700 focus:outline-0  focus:ring-blue-900 mb-3"
    onChange={(e) => captureValue((prev) => ({
      ...prev,
      [simulatorType]: e.target.value
    }))}
  >
    <option value={1}>Movimiento Parabólico</option>
    <option value={2}>Tiro Vertical</option>
  </select>
  )
}

export default InputList
