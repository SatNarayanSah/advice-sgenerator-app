import React, { useEffect, useState } from 'react'
import { FaDiceSix } from 'react-icons/fa'

const Body = () => {
    const [advice, setAdviece] =useState('')
    const handleRandomAdvice=async()=>{
        const response = await fetch('https://api.adviceslip.com/advice')
        const jsondata = await response.json();
        const {slip} =jsondata
        setAdviece(slip)
    }

useEffect(()=>{
    handleRandomAdvice();
},[]);
//two paramenter inside the useffect, first is a function and second one is the dependeencyarray
  return (
    <>
    <div className='h-screen bg-slate-800 flex justify-center items-center'>
        <div className='h-fit w-[310px] bg-slate-700 rounded-xl p-9 '>
            <p className='text-center font-bold text-[#57dea5]'>Advice #{advice.id}  </p>
            <p className='font-bold text-center text-[#d1e3ea]'>{advice.advice}</p>
            <div className='flex justify-center mt-3'>
                <button onClick={handleRandomAdvice} className='bg-lime-400 p-4 rounded-full'>
                   <FaDiceSix/>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body