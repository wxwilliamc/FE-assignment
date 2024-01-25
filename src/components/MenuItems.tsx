import { Items } from "./Header"

interface MenuItemsProps {
    items: Items[]
  }

const MenuItems = ({ items }: MenuItemsProps) => {
  return (
    <div className="flex items-center justify-center gap-8">
        {items && items.map((item, index) => (
            <a href={item.id} key={index} className="text-purple-700/75 cursor-pointer hover:text-blue-700 transition-all">
                {item.label}
            </a>
        ))}
    </div>
  )
}

export default MenuItems