import NewBanner from '@/assets/New.png'
import { PlatesData } from '@/lib/plates-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const PlateCard = () => {

    const [plates] = useState(PlatesData);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 20;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, plates.length)
    const currentPlates = plates.slice(startIndex, endIndex);
    const totalPages = Math.ceil(plates.length / itemsPerPage);

    console.log(startIndex, endIndex, currentPlates)

    const visiblePages = 5

    const pageNumbers = [];

    if (totalPages <= visiblePages) {
        // If total pages are less than or equal to the visible pages, display all pages
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        // Add the first five pages
        for (let i = 1; i <= visiblePages; i++) {
            pageNumbers.push(i);
        }

        // Add the ellipsis if there are pages after the visible pages
        if (totalPages > 5) {
            pageNumbers.push('...');
        }

        // Always show the last few pages after the ellipsis
        const startPageAfterEllipsis = Math.max(totalPages - 3, visiblePages + 1);
        for (let i = startPageAfterEllipsis; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    }

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(plates.length / itemsPerPage)));
    }

    console.log(currentPage)

    return (
        <>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8'>
                {currentPlates.map((plate, index) => (
                    <div className='shadow-lg w-full h-[140px] p-[2px] rounded-md pb-2' key={index}>
                        {index === 0 && currentPage === 1 && (
                            <p className='relative'>
                                <img src={NewBanner} className='absolute w-12 h-4 right-0' />
                            </p>
                        )}
                        <div className='h-4/6 from-[#E5E5FF] to-slate-50 bg-gradient-to-r flex items-center justify-center'>
                            <p className='text-[#625EF6] font-semibold text-2xl'>
                                {plate.PlateNumber}
                            </p>
                        </div>
                        <div className='h-2/6 mt-1 px-2 flex flex-col items-start justify-center'>
                            <p className='text-[8px] font-bold opacity-60 -mb-1'>{plate.Category}</p>
                            <p className='font-bold'>{plate.Price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <section className='flex items-center justify-center w-full'>
                <Button variant={'ghost'} className='rounded-full' onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <ChevronLeft />
                </Button>

                {pageNumbers.map((pageNumber, index) => {
                    const isCurrentPage = pageNumber === currentPage;
                    return (
                        <span key={index} onClick={() => setCurrentPage(pageNumber)}>
                            <p className={cn('ring-1 ring-slate-200 rounded-full px-4 py-2 mx-2 cursor-pointer transition-all hover:bg-black hover:text-white', isCurrentPage ? 'bg-black text-white' : '')}>
                                {pageNumber}
                            </p>
                        </span>
                    )
                })}

                <Button variant={'ghost'} className='rounded-full' onClick={handleNextPage} disabled={currentPage  === Math.ceil(plates.length / itemsPerPage)}>
                    <ChevronRight />
                </Button>
            </section>
        </>
    )
}

export default PlateCard