import Banner from '../assets/Banner.png'
import ServiceProcedure from './ServiceProcedure'
import ServiceBg from '@/assets/Service_Bg.png'

const Services = () => {
  return (
    <div id="ourServices" className="w-full h-[550px] relative mt-16">
        <img src={ServiceBg} className='absolute'/>
        <div className="flex items-center justify-center">
            <img src={Banner} className='w-[350px] absolute top-0 drop-shadow-xl'/>
            <h1 className='absolute text-white font-semibold text-2xl top-3'>OUR SERVICES</h1>
        </div>

        <div className='mt-48'>
            <ServiceProcedure />
        </div>
    </div>
  )
}

export default Services