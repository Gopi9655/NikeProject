import React from 'react'

const Shoecard = ({imgURL,changeBigshoeImage,bigShoeImage}) => {
   
  const handleOnClick = ()=>{
    if(bigShoeImage!==imgURL.bigShoe){
      changeBigshoeImage(imgURL.bigShoe)
    }
  }
    
  return (
    <div className={`border-2 rounded-xl cursor-pointer 
    ${bigShoeImage===imgURL.bigShoe?'border-coral-red':'border-transparent'}
     `}>
        <div className='flex justify-center items-center cursor-pointer bg-card bg-center bg-cover sm:w-40  sm:h-40 rounded-xl max-sm:p-4' onClick={handleOnClick}>
            <img src={imgURL.thumbnail} width={127} height={103} className='object-contain' ></img>
        </div>
    </div>
  )
}

export default Shoecard