import BottomCarBg from '../assets/Bottom_CarBg.png'
import Location from '../assets/Location.png'
import Phone from '../assets/phone.png'

type ContactDetails = {
    icon?: string
    label: string
}[]

const contactDetails: ContactDetails = [
    {
        icon: Location,
        label: "Menara The Stride, Bukit Bintang City Centre, No. 2, Jalan Hang Tuah, 55100 Kuala Lumpur",
    },
    {
        icon: Phone,
        label: "+6 011 8888 6999",
    },
    {
        label: "interest@vnumber.com",
    },
]

const Contact = () => {
    return (
        <div id='ourContact' className='w-full relative flex flex-col items-center justify-start'>
            <img src={BottomCarBg} />
            <section className='absolute text-center py-12'>
                <h1 className='text-purple-700 font-semibold text-2xl'>GET IN TOUCH</h1>
                <p className='text-gray-600 max-w-[500px] px-2'>
                    Thank you for your interest in V Number. If you have any enquiries,
                    welcome to contact us!
                </p>
            </section>

            <section className='absolute top-44'>
                {contactDetails && contactDetails.map((item, index) => (
                    <div key={index} className='my-4'>
                        <div className='bg-white opacity-85 rounded-full h-16 max-w-[540px]'>
                            <div className='flex items-center h-full px-2'>
                                {item.icon && <img className='bg-purple-700 p-2 rounded-full text-white w-12 h-12'
                                    src={item.icon}
                                />}

                                {!item.icon && <span className='ml-12'></span>}

                                <p className='font-semibold flex items-center h-full px-12'>
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Contact