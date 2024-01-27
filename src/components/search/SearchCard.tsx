import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SearchCarPlate from "./SearchCarPlate"

const SearchCard = () => {
    return (
        <>
            {/* Search Filter */}
            <section className="flex items-center justify-center max-w-[820px] mx-auto relative">
                <Card className="-mt-24">
                    <CardHeader>
                        <CardTitle className="text-lg">Search a Car Plate {">"}</CardTitle>
                    </CardHeader>

                    <CardContent className="-mt-2 -mb-8">
                        <SearchCarPlate />
                    </CardContent>

                    <CardFooter>
                    </CardFooter>
                </Card>
            </section>

            <section>
                {/* Reset Button */}
                {/* Reset Car Plate Category */}
                {/* Reset Car Plate Range Prices */}
                {/* Reset States Listing */}
            </section>

            <section>
                {/* All exist plates / Search results */}
                {/* Pagination */}
            </section>
        </>

    )
}

export default SearchCard