import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className=' rounded-full flex items-center justify-center bg-coral-red text-white border-coral-red py-3 px-7 border font-montserrat leading-none' >{label}
   {iconURL && <img src={iconURL} alt='arrow_right' className='ml-2 rounded-full w-5 h-5'></img>}</button>
)
}

export default Button