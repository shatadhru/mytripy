"use client";

import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import SearchCard from "./SearchCard";
import { RiSearchAi2Line } from "react-icons/ri";


function HeroSection() {
  return (
    <section className="relative h-[600px] lg:h-[500px]  w-full overflow-hidden">

      {/* Background */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="!absolute inset-0 !z-0 h-full w-full"
      >
        <SwiperSlide className="!h-full">
          <Image
            src="/hero1.webp"
            alt=""
            width={1920}
            height={500}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="!h-full">
          <Image
            src="/hero2.avif"
            alt=""
            width={1920}
            height={500}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <Image
            src="/hero3.webp"
            alt=""
            width={1920}
            height={500}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <Image
            src="/hero4.webp"
            alt=""
            width={1920}
            height={500}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5">

          <h1 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-white">
            Welcome To Mr.Tripy
          </h1>

          <p className="mt-2 text-[clamp(1rem,2vw,1rem)] text-white">
            Find your next unforgettable journey.
          </p>
          
<SearchCard />
<div className="mt-4 flex flex-wrap w-full text-center gap-x-5 gap-y-2 text-sm text-white/75">
  <span>✦ 500+ Tours</span>
  <span>✦ Best Price Guarantee</span>
  <span>✦ Easy Booking</span>
  <span>✦ Trusted by Travelers</span>
</div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;