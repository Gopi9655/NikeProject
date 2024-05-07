import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import Shoecard from "../components/Shoecard"
import { shoes, statistics } from "../constants"
import { useState } from "react"

const Hero = () => {
   const [bigShoeImage,setbigShoeImage] = useState(bigShoe1)


  return (
    <section id="home" className="w-full  p-2 flex xl:flex-row flex-col min-h-screen justify-center
    max-container" >
  <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <p className="font-montserrat text-coral-red text-xl">Our Summer Collection</p>
      <h1 className="mt-10  font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold text-8xl ">
       <span className="xl:bg-white xl:whitespace-nowrap relative  z-10
        pr-10">The New Arrival </span>
         <br />
        <span className=" text-coral-red inline-block mt-3"> Nike </span> Shoes
      </h1>
    <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm"> Discover stylish new arrivals, quality,comfort,and innovation for ur active life </p>
    <Button label="Shop now" iconURL = {arrowRight} />
   <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
      {statistics.map((stat) => (
        <div key={stat.label} >
          <p className="font-palanquin text-4xl  font-bold">{stat.value}</p>
          <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
        </div>
     ))}
   </div>
  </div>
    <div className=" flex  relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img src={bigShoeImage} alt="big shoe" width={610} height={500} className="z-10  object-contain relative "></img>
      <div className="flex gap-4 sm:gap-6 absolute -bottom-[13%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe) =>(
          <div key={shoe}>
          <Shoecard imgURL={shoe}
          changeBigshoeImage={(shoe)=>{setbigShoeImage(shoe)}}
          bigShoeImage={bigShoeImage}
           />
          </div>
        ))}
      </div>
    </div>
 


    </section>
  )
}

export default Hero