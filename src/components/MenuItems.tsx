import { Items } from "./Header"

interface MenuItemsProps {
    items: Items[]
  }

const MenuItems = ({ items }: MenuItemsProps) => {
  return (
    <div className="flex items-center justify-center gap-8">
        {items && items.map((item, index) => (
            <a href={item.id} key={index} className="text-[#625EF6] cursor-pointer hover:opacity-75 transition-all mt-6">
                {item.label}
            </a>
        ))}
    </div>
  )
}

export default MenuItems