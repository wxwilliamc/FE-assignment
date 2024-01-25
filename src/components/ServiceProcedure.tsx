import Car from '../assets/Car.png'
import File from '../assets/FIle.png'
import Insurance from '../assets/Insurance.png'

const procedure = [
    {
        step: "01",
        imageUrl: Car,
        title: "New & Used Vehicle Transfer & Registration"
    },
    {
        step: "02",
        imageUrl: File,
        title: "Vehicle PUSPAKOM & Interchange Services"
    },
    {
        step: "03",
        imageUrl: Insurance,
        title: "Vehicle Insurance Agent"
    },
]

const ServiceProcedure = () => {
  return (
    <div className='relative w-full gap-12 flex items-center justify-center'>
        {procedure && procedure.map((items) => (
            <div key={items.step} className='flex'>
                <p className='bg-blue-600 ml-8 px-3 py-2 text-2xl rounded-full text-white absolute -top-6'>
                    {items.step}
                </p>
                <img src={items.imageUrl} className='w-[300px] h-[300px]'/>
                <p className='font-semibold absolute bottom-8 max-w-[180px] ml-[4.5rem]'>
                    {items.title}
                </p>
            </div>
        ))}
    </div>
  )
}

export default ServiceProcedure