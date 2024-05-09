import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col  gap-10 max-container">
    <div className="flex-1">
    <img src={offer} width={773} height={687} alt="offer"
    className="object-contain w-full "
    />

    </div>
    <div className="flex flex-1 flex-col ">
    <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
    <span className="text-coral-red">Special</span> Offer
  
    </h2>
    <p className="mt-6 lg:max-w-lg info-text">
      
        
Unlock your potential with our exclusive Nike Special Offer! Elevate your game with premium gear at unbeatable prices. Don't miss out - shop now and gear up for greatness.
    </p>
    <p className="mt-4 lg:max-w-lg info-text"> Experience the pinnacle of performance with our limited-time Nike Special Offer. From iconic sneakers to cutting-edge activewear, seize the opportunity to elevate your style and stride. Shop today and step into excellence.</p>
    <div className="mt-11 flex flex-wrap gap-4">
    <Button label="Shop Now" iconURL={arrowRight} />
    <Button label="learn more " backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
    </div>
    </div>
    


    </section>
  )
}

export default SpecialOffer;