import React, { useEffect, useState } from 'react'
import InputList from '@requirements/InputList'
import InputComponent from '@requirements/InputComponent'
import { simulatorValuesInitial, type simulatorState } from '@/types/inputsSimulator'
import { type AppDispatch } from '@store/store'
import { useDispatch } from 'react-redux'
import { setParameters } from '@store/actions/actions'

const Parametros = () => {
  const [inputList, setInputList] = useState<simulatorState>(simulatorValuesInitial);
  const dispatch = useDispatch<AppDispatch>();


  const handleDispatch = () => {
    dispatch(setParameters(inputList));
  }

  useEffect(() => {
    if(inputList.grade < 0 || inputList.grade > 90){
      setInputList((prev) => ({ ...prev, grade: 45 }))
    }
    if(inputList.speed < 0 ){
      setInputList((prev) => ({ ...prev, speed: 0 }))
    }
    if(inputList.kg < 0 ){
      setInputList((prev) => ({ ...prev, kg: 0 }))
    }
    if (inputList.type != 1) {
      setInputList((prev) => ({ ...prev, grade: 90 }))
    }
  }, [inputList])

  return (
    <div className=' rounded-2xl'>
      <InputList captureValue={setInputList} simulatorKey='type' />
      <div className='grid grid-cols-2 gap-3 text-center '>
        <InputComponent value={inputList.grade} captureValue={setInputList} label='Angulo de lanzamiento (θ)' simulatorKey={'grade'} type='number' />
        <InputComponent value={inputList.speed} captureValue={setInputList} label='Velocidad Inicial (m/s)' simulatorKey={'speed'} type='number' />
        <InputComponent value={inputList.kg} captureValue={setInputList} label='Masa del objeto (kg)' simulatorKey={'kg'} type='number' />
        {/* <InputComponent captureValue={setInputList} label='Altura Inicial (m)' simulatorKey={'heightMeters'} type='number' /> */}
      </div>
      <button
        className=' p-3 rounded-2xl mt-5 w-full cursor-pointer  bg-gradient-to-r from-purple-800 to-cyan-400 active: active:from-purple-500 active:to-cyan-200'
        onClick={handleDispatch}
      >
        Simular
      </button>

    </div>
  )
}

export default Parametros
