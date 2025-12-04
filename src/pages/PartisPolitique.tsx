import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PaginationCNG from '@/components/PaginationCNG'
import React, { useState } from 'react'
import partis from "@/datas/partisPolitique.json" 
import { NavLink } from 'react-router-dom'
import { ArrowRight, MoveRight } from 'lucide-react'
import { slugify } from './ProgrammeDetail'

function PartisPolitique() {

    const itemsPerPage= 8
    const [currentPage, setCurrentPage] = useState(1);
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = partis.slice(start, start + itemsPerPage);
    return (
        <>
            <Navigation />
            <div className='relative flex flex-col gap-4 justify-center items-center px-[6.5%] py-20'>
                <div className="absolute w-full h-full aspect-video inset-0">
                    <img
                        src={"/hero.jpg"}
                        alt={"hero"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-destructive/80 to-secondary/90" />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-foc-blue/100 via-foc-blue/50 to-foc-blue/60" /> */}
                    <div className="absolute inset-0 bg-black/50 md:bg-black/30" />
                </div>
                <h2 className='text-[1.9rem] md:text-[3rem] leading-[0.9] relative capitalize font-bold text-white'>Nos Partis Membres</h2>
                <span className='text-[0.9rem] max-w-xl text-center md:text-[1.2rem] relative capitalize text-white'>Découvrez les partis politiques qui composent notre coalition pour l'avenir du Cameroun</span>
                <Breadcrumbs />
            </div>
            <div className='py-16 md:py-20 bg-gray-50 flex flex-col gap-20 px-[6.5%]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16'>
                    {currentItems.map((x,ind)=>
                        // <div className='flex relative bg-primary flex-col gap-3 pb-12 border'>
                            <div className='h-[370px] md:h-[385px] rounded-t-[5px] relative w-full'>
                                <img className='w-full rounded-t-[5px] object-cover object-top h-full' src={x.imgPresi} alt='' />
                                <div className='absolute right-[0] aspect-video border-4 border-t-0 border-white p-1 bg-primary rounded-[2px] overflow-hidden top-[0] w-[80px] h-[75px]'>
                                        <img className='object-contain w-full h-full' src={x.image} alt={x.sigle} />
                                    </div>
                                <div className='absolute border bg-white -bottom-[9.5%] right-0 w-[95%] md:w-[90%] pt-5 pb-12 flex flex-col gap-3 px-6'>
                                    <h1 className='text-[1.3rem] text-primary leading-[1.3] font-bold'>{x.nom} ({x.sigle})</h1>
                                    <p className='text-gray-70 truncate-multiline text-[.8rem]'>{x.description}</p>
                                    <NavLink className="absolute flex items-center gap-3 bottom-0 text-[.85rem] hover:text-destructive py-1.5 px-3 left-0 border-t font-semibold w-full" to={"/partis-politique/"+slugify(x.nom)}>Plus de détail <MoveRight /></NavLink>
                                </div>
                            </div>
                        // </div>
                    )}
                </div>
                <PaginationCNG itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} currentItems={currentItems} items={partis}/>
            </div>
            <Footer />
        </>
    )
}

export default PartisPolitique