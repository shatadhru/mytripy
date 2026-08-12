import { Header } from '@/components/efferd/header';
import React from 'react'
import HeroSection from './components/hero/HeroSection';
import OfferSection from './components/offer/OfferSection';
import { Footer } from '@/components/efferd/footer';
import PopularDestinations from './components/populardestinations/PopluarDestiantionos';
import { Separator } from "@/components/ui/separator"
import Trending from './components/Flights/page';
import PackageSlider from './components/OurPackages/page';


function page() {
  return (
    <div>
      <Header />
     <div className='w-full h-full'>
       <HeroSection />
       <OfferSection />
       <PopularDestinations />
      <Separator />
      <Trending />
            <Separator />
<PackageSlider />
            <Separator />

     </div>
      <Footer />
    </div>
  )
}

export default page
