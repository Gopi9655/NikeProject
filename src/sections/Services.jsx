import { services } from "../constants"
import ServicesCard from "../components/ServicesCard"
const Services = () => {
  return (
<section className="max-container flex flex-wrap justify-center gap-9 ">
{services.map((service) =>
      <ServicesCard key={service.label} imgURL ={service.imgURL} label={service.label} subtext={service.subtext} />
)}

</section>  )
}

export default Services