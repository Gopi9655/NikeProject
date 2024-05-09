import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`rounded-full  flex items-center justify-center py-3 px-7 border font-montserrat leading-none text-lg ${backgroundColor?`${backgroundColor} ${textColor} ${borderColor}`:" bg-coral-red  border-coral-red  text-white" }  ${fullWidth && "w-full"} `} >{label}
   {iconURL && <img src={iconURL} alt='arrow_right' className='ml-2 rounded-full w-5 h-5'></img>}</button>
)
}

export default Button