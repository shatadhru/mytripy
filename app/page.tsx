import { Header } from '@/components/efferd/header';
import React from 'react'
import HeroSection from './components/hero/HeroSection';
import OfferSection from './components/offer/OfferSection';
import { Footer } from '@/components/efferd/footer';
import PopularDestinations from './components/populardestinations/PopluarDestiantionos';

function page() {
  return (
    <div>
      <Header />
     <div className='w-full h-full'>
       <HeroSection />
       <OfferSection />
       <PopularDestinations />
     </div>
      <Footer />
    </div>
  )
}

export default page
