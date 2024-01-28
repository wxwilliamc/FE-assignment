import TopCarBg from '../assets/Top_CarBg.png'
import CompanyLogo from './CompanyLogo'
import MenuItems from './MenuItems'
import SocialIcon from './SocialIcon'
import EmailIcon from '../assets/Email.png'

export type Items = {
  id: string
  label: string
}

interface HeaderProps {
  items: Items[]
}

const Header = ({ items }: HeaderProps) => {
  return (
    <div className='relative'>
        <img src={TopCarBg} className='h-fit'/>

        <div className='flex items-center justify-center absolute top-2 w-full gap-52'>
            <CompanyLogo />
            <MenuItems items={items}/>
            <SocialIcon />
        </div>

        <div>
            <img src={EmailIcon} className='px-[10px] py-2 bg-[#625EF6] rounded-full w-16 h-16 ring-1 ring-white absolute sm:top-80 sm:right-80 -mx-8'/>
        </div>
    </div>
  )
}

export default Header