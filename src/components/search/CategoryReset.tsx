import { RotateCcw, X } from "lucide-react"
import { Button } from "../ui/button"

const CategoryReset = () => {
    return (
        <div className="flex items-center justify-start w-full gap-2">
            <Button className="rounded-full text-[10px]">
                <p className="px-2 flex gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Reset
                </p>
            </Button>

            <Button className="rounded-full gap-2 bg-[#625EF6] w-28">
                <p className="pl-2 w-full text-[10px]">
                    1 Digit Number
                </p>
                <p className="flex items-center justify-end w-full">
                    <X className="w-4 h-4 opacity-50" />
                </p>
            </Button>

            <Button className="rounded-full gap-2 bg-[#625EF6]">
                <p className="pl-2 w-full text-[10px]">
                    RM 100,000 - 200,000
                </p>
                <p className="flex items-center justify-end w-full">
                    <X className="w-4 h-4 opacity-50" />
                </p>
            </Button>

            <Button className="rounded-full gap-2 bg-[#625EF6]">
                <p className="pl-2 w-full text-[10px]">
                    B (Selangor)
                </p>
                <p className="flex items-center justify-end w-full">
                    <X className="w-4 h-4 opacity-50" />
                </p>
            </Button>
        </div>
    )
}

export default CategoryReset