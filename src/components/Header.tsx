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

        <div className='flex items-center justify-center absolute top-2 w-full gap-32'>
            <CompanyLogo />
            <MenuItems items={items}/>
            <SocialIcon />
        </div>

        <div>
            <img src={EmailIcon} className='p-3 bg-purple-700 rounded-full w-16 h-16 ring-1 ring-white absolute top-64 right-60'/>
        </div>
    </div>
  )
}

export default Header