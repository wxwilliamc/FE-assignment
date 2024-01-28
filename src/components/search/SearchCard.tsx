import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SearchCarPlate from "./SearchCarPlate"
import CategoryReset from "./CategoryReset"
import AllPlates from "./AllPlates"

const SearchCard = () => {
    return (
        <>
        <div className="max-w-[820px] mx-auto">
            {/* Search Filter */}
            <section className="flex items-center justify-center relative mb-4 shadow-xl">
                <Card className="-mt-24">
                    <CardHeader>
                        <CardTitle className="text-lg">Search a Car Plate {">"}</CardTitle>
                    </CardHeader>

                    <CardContent className="-mt-2 -mb-3">
                        <SearchCarPlate />
                    </CardContent>
                </Card>
            </section>

            <section className="-ml-6 mb-8">
                <CategoryReset />
            </section>

            <section className="-mx-6 mb-8">
                <AllPlates />
            </section>
            </div>
        </>

    )
}

export default SearchCard