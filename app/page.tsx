import { Header } from '@/components/efferd/header';
import React from 'react'
import HeroSection from './components/hero/HeroSection';
import OfferSection from './components/offer/OfferSection';

function page() {
  return (
    <div>
      <Header />
     <div className='w-full h-full'>
       <HeroSection />
       <OfferSection />
     </div>
      
    </div>
  )
}

export default page
