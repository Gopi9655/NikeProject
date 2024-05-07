import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgUrl,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
    <img
    src={imgUrl} alt={name}
    className='w-[280px] height-[280px]'

     />
     <div className='mt-8 flex justify-start gap-2.5'>
     <img src={star} alt='rating' width={24} height={24}  />
     <p className='font-montserrat text-l leading-normal text-slate-gray'> (4.5)</p>
 

     </div>
     <h3 className='mt-2 leading-normal text-2xl font-semibold font-palanquin'>{name}</h3>
     <p className='mt-2 font-semibold font-montserrat text-coral-red text-1xl leading-normal'>{price}</p>
        
    </div>
  )
}

export default PopularProductsCard