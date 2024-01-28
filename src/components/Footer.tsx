import SocialIcon from "./SocialIcon"
import whatsappIcon from '../assets/whatsappIcon.png'

const Footer = () => {
  return (
    <div className="bg-[#12243E] flex items-center justify-center relative py-4">
        <div className="absolute bottom-7 right-6 cursor-pointer">
            <img src={whatsappIcon} className="w-12 h-12"/>
        </div>
        <div className="flex items-center justify-between w-full max-w-4xl">
            <p className="text-white text-xs">
             © 2022 V NUMBER (88997654321) All rights reserved. 
             <span className="px-4">
                {" | "} 
             </span>
             <span className="">
                Privacy Policy
             </span>
            </p>

            <div className="text-white">
                <SocialIcon />
            </div>
        </div>
    </div>
  )
}

export default Footer