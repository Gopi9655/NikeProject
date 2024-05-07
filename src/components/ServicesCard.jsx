import React from 'react'

const ServicesCard = ({imgURL,label,subtext}) => {
  return (
    <div className='shadow-3xl flex-1 sm:w-[30px] sm:min-w-[350px]  w-full rounded-[20px] shadow-3xl px-10 py-16'> 
        <div className='flex justify-center items-center bg-coral-red rounded-full w-11 h-11' >
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='font-palanquin mt-5 text-3xl leading-normal font-bold ' >{label}</h3>
        <p className='mt-3 font-montserrat break-word text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServicesCard