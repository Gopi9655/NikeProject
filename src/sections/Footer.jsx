import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container"> 
    <div className="flex justify-between items-start gap-20  flex-wrap  max-lg:flex-col">
    <div className="flex flex-col items-start">
      <a href="/">
      <img  src={footerLogo} 
      width={150}
      height={46}   />
      </a>
      <p className=" mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Get Shoes ready for the new term at your nearest nike store. Find your perfect size in store.Get rewards</p>
      <div className="mt-8 flex  items-center gap-5">
      {socialMedia.map((item)=>(
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
        <img src={item.src} alt= {item.alt} width={24} height={24} />
        </div>
          ))}

      </div>
  
      </div>

      <div className="flex flex-1 justify-between lg:gap-10 gap-40 flex-wrap ">
      {footerLinks.map((section)=>(
        <div className="flex flex-col items-start gap-4">
        <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">{section.title} </h4>
        <ul className="">
        {section.links.map((link)=>(
          <li key={link.name} className=" text-white mt-3 text-white-400 leading-normal hover:text-slate-gray">
          <a href={link.name}> {link.name}</a>
           
          </li>

        ))}

        </ul>


        
        </div>
      ))}

      </div>

    </div>
    <div className="flex justify-between text-white-400 mt-24  max-sm:flex-col max-sm:items-center">
    <div className="flex flex-1  justify-start items-center gap-2 font-montserrat cursor-pointer">
    <img src={copyrightSign} alt="copyright sign" width={20} height={20} />
    <p>Copyrights All Rights. Reserved</p>

    </div>
    <p className="font-montserrat cursor-pointer"> Terms and condition</p>

 

    </div>

    </footer>
  )
}

export default Footer