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
        <div className='relative w-full gap-16 flex items-center justify-center'>
            {procedure && procedure.map((items) => (
                <div key={items.step} className='flex flex-col -mt-8'>
                    <img src={items.imageUrl} className='w-[260px] h-[260px] drop-shadow-md'/>
                    <p className='bg-[#625EF6] px-[11px] py-2 text-2xl rounded-full text-white ring-4 ring-slate-200/60 w-12 h-12 absolute -top-16 ml-8 mt-2'>
                        {items.step}
                    </p>
                    <p className='font-bold absolute bottom-10 max-w-[180px] sm:ml-[2.5rem] text-center'>
                        {items.title}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ServiceProcedure