import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import partis from "@/datas/partisPolitique.json"
import { NavLink, useParams } from 'react-router-dom'
import { slugify } from './ProgrammeDetail'
import { Calendar, MoveLeft } from 'lucide-react'

function DetailPartiPolitique() {

  const { id } = useParams()

  const detail = partis.find((x) => slugify(x.nom) === id)
  console.log(detail)

  return (
    <>
      <Navigation />
      <div className='relative flex flex-col gap-4 px-[6.5%] py-16'>
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
        <NavLink className="relative flex gap-2.5 px-4 py-1 rounded-[5px] text-[.85rem] hover:bg-destructive bg-secondary w-fit items-center transition-all duration-300 text-white" to='/partis-politique'><MoveLeft /> Listes des partis</NavLink>
        <div className='flex relative items-start gap-4'>
        <img className='w-[80px] h-[80px]' src={detail?.image} alt={detail?.sigle} />
        <div className=''>
          <h2 className='text-[1.9rem] md:text-[3.1rem] leading-[0.9] relative uppercase font-bold text-white'>{detail?.sigle}</h2>
          <span className='text-[1.2rem] max-w-xl text-center md:text-[2rem] relative capitalize text-white'>{detail?.nom}</span>
          <ul className=''>
            <li></li>
          </ul>
          {/* <Breadcrumbs /> */}
        </div>
        </div>
      </div>
      <div className='px-[6.5%] grid  gap-8 grid-cols-3 py-20'>
        <div className='col-span-2 bg-red-100'>
          hello world
        </div>
        <div className='col-span-1 sticky top-[40px]'>
          <div className='bg-gray-200 pt-6 px-6 rounded-[5px]'>
              <h2 className='font-bold text-[1.4rem]'>Informations</h2>
              <div className='flex flex-col'>
                <div className='py-4 flex items-center gap-3 border-b border-white'>
                    <Calendar />
                    <div className=''>
                        <h3>Foundation</h3>
                        <span>2012</span>
                    </div>
                </div>
                <div className='py-4 flex items-center gap-3 border-b border-white'>
                    <Calendar />
                    <div className=''>
                        <h3>Foundation</h3>
                        <span>2012</span>
                    </div>
                </div>
                <div className='py-4 flex items-center gap-3 border-b-0 border-white'>
                    <Calendar />
                    <div className=''>
                        <h3>Foundation</h3>
                        <span>2012</span>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailPartiPolitique