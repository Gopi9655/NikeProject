import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({imgURL,customerName,feedback,rating}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
    <img src={imgURL} alt='customer' className='rounded-full w-[120px] h-[120px] object-cover' ></img>
    <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
    <div className='flex mt-3 justify-center items-center gap-2'>
        <img src={star} className='w-[24] h-[24]' alt='star object-contain m-0'></img>
        <p className='text-xl text-slate-gray font-montserrat text-center justify-center items-center '>{rating}</p>
    </div>
    <h3 className='font-palanquin  text-center font-bold text-3xl mt-1'>{customerName}</h3>

    </div>
  )
}

export default CustomerReviewCard