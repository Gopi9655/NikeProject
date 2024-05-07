import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col ">
    <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       We provide you 
    <span className="text-coral-red">Super</span>
    <br />
    <span className="text-coral-red">Quality</span> Shoes
  
    </h2>
    <p className="mt-6 lg:max-w-lg info-text">
      
At the heart of our ethos lies an unwavering commitment to excellence. We pride ourselves on providing superlative quality in every aspect of our offerings.
    </p>
    <p className="mt-4 lg:max-w-lg info-text">Experience unparalleled excellence as we redefine standards with our superior quality guarantee.</p>
    <div className="mt-11">
    <Button label="view details" />
    </div>
    </div>
  
    <div className="flex flex-1 justify-center items-center ">
    <img src={shoe8} alt="shoe" width={440} height={490} className="object-contain" />

    </div>

    </section>
  )
}

export default SuperQuality