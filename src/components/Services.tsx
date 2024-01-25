import Banner from '../assets/Banner.png'
import ServiceProcedure from './ServiceProcedure'

const Services = () => {
  return (
    <div id="ourServices" className="bg-gradient-to-r from-purple-100 to-purple-50 w-full h-[550px] relative">
        <div className="flex items-center justify-center">
            <img src={Banner} className='w-[250px]'/>
            <h1 className='absolute text-white font-semibold text-lg'>OUR SERVICES</h1>
        </div>

        <div className='my-20'>
            <ServiceProcedure />
        </div>
    </div>
  )
}

export default Services