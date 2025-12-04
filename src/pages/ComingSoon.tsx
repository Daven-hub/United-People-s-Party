import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <div>
         <Navigation />
         <div className='bg-[#F7F9F9] h-[calc(90vh-50px)] flex flex-col items-center justify-center'>
                <span className='font-semibold text-[3rem] max-md:text-[1.4rem] text-center'>Site en cour de construction ...</span>
                <span className='font-medium text-[1.3rem] max-md:text-[.9rem] space-x-3'>Nous contactez via <NavLink className={'text-blue-700 font-semibold'} to={'mailto:info@cng-ngc.org'}>info@cng-ngc.org</NavLink></span>
                <NavLink className='bg-primary w-full md:w-[23%] text-center text-white mt-4 text-[.92rem] px-6 py-2.5 rounded-md' to={'/'}>Retour vers la page d'acceuil</NavLink>
            </div>
            <Footer />
       </div>
  )
}
