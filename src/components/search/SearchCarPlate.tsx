import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import BlackCover from '@/assets/BlackCover.png'
import PurpleCover from '@/assets/PurpleCover.png'
import LightPurpleCover from '@/assets/LightPurpleCover.png'

const CarPlateCategory = [
    "1 Digit", "2 Digit", "3 Digit", "4 Digit", "Double Digit", "Triple Digit"
]

const Prices = [
    "Under RM 50,000",
    "RM 50,000 - 80,000",
    "RM 80,000 - 100,000",
    "RM 100,000 - 200,000",
    "RM 200,000 - 300,000",
    "RM 300,000 - 400,000",
    "RM 400,000 - 500,000",
]

const States = [
    "A (Perak)",
    "B (Selangor)",
    "C (Pahang)",
    "D (Kelantan)",
    "E Series",
    "F Series",
    "G Series",
    "IM Series"
]

const SearchCarPlate = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Search */}
            <section className="min-w-[820px] flex items-center gap-2">
                <Search className="w-5 h-5 ml-4 absolute" />
                <Input placeholder="Enter your preferred number. Eg: VAC1" className="pl-12 min-w-[680px]" />
                <Button className="w-full text-xs font-light">Search</Button>
            </section>

            {/* Category */}
            <section className="flex items-center my-4 gap-2 relative">
                {CarPlateCategory.slice(0, 1).map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={BlackCover} className="w-56 h-20 rounded-md" />
                        <div className="font-semibold text-white/90 absolute flex flex-col items-center">
                            <p>{item}</p>
                            <p>{" Number "}</p>
                        </div>
                    </div>
                ))}

                {CarPlateCategory.slice(1, 4).map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={PurpleCover} className="w-56 h-20 rounded-md" />
                        <div className="font-semibold text-white/90 absolute flex flex-col items-center">
                            <p>{item}</p>
                            <p>{" Number "}</p>
                        </div>
                    </div>
                ))}

                {CarPlateCategory.slice(4, 7).map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={LightPurpleCover} className="w-56 h-20 rounded-md" />
                        <div className="font-semibold text-white/90 absolute flex flex-col items-center">
                            <p>{item}</p>
                            <p>{" Number "}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Price Range */}
            <section className="flex items-center justify-start w-full gap-2">
                {Prices.map((price, index) => (
                    <div key={index} className="bg-[#E5E5FF] text-center rounded-sm w-full ">
                       <p className="sm:text-[8px] py-1 px-2">
                            {price}
                       </p>
                    </div>
                ))}
            </section>

            {/* States Category */}
            <section className="flex items-center justify-center w-full sm:mt-3 gap-1">
                <Button className="rounded-full bg-slate-300 w-4 h-6 mr-1 relative" size={"sm"}>
                    <ChevronLeft className="w-5 h-5 absolute pr-[1px]"/>
                </Button>

                {States.map((state, index) => (
                    <div key={index} className="ring-1 ring-slate-300 text-center rounded-full w-full">
                       <p className="sm:text-[8px] py-1 px-4 font-semibold">
                            {state}
                       </p>
                    </div>
                ))}

                <Button className="rounded-full bg-slate-300 w-4 h-6 ml-1 relative" size={"sm"}>
                    <ChevronRight className="w-5 h-5 absolute pl-[1px]"/>
                </Button>
            </section>
        </div>
    )
}

export default SearchCarPlate