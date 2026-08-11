"use client"
import React from "react";
import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-aria-components";
import { CldImage } from 'next-cloudinary';









const destinations = [
 
  {
    placeName: "Indonesia",
    link: "/destinations/sajek-valley",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464120/1742287101_Bali_main_blog.jpg",
  },
  {
    placeName: "Baku",
    link: "/destinations/bandarban",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464224/images.jpg",
  },
  {
    placeName: "Sri Lanka",
    link: "/destinations/sylhet",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464267/Colombo.jpg",
  },
  {
    placeName: "Malaysia",
    link: "/destinations/maldives",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464192/914b79223054e0c03820624e0592834d.jpg",
  },
   {
    placeName: "Vietnam",
    link: "/destinations/coxs-bazar",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464270/images_1.jpg",
  },
];


function PopularDestinations() {
  return (
    <section className="w-full px-6 py-16 md:px-8 lg:px-12">
    
    
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex max-w-3xl flex-col items-start text-left">
          <Badge
            variant="destructive"
            className="mb-4 rounded-full px-4 py-1 text-xs bg-primary font-medium text-primary-foreground"
          >
            Mr.Tripy Spotlights
          </Badge>

          <h2
            className="font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(1.5rem, 5vw, 1rem)" }}
          >
            Where will you go next?
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-6 text-muted-foreground md:text-sm">
            Explore handpicked destinations and find your next unforgettable
            adventure.
          </p>
        </div>


<div className="flex flex-col items-center text-left mt-4">
 <Carousel className="w-full">
      <CarouselContent>
        {destinations.map((destination) => (
          <CarouselItem
            key={destination.placeName}
            className="basis-1/2  lg:basis-1/5"
          >
            <Link href={destination.link} className="block h-full">
              <Card className="overflow-hidden">
                <CardContent className="relative aspect-square p-0">
                  <CldImage
                    src={destination.imageUrl}
                    alt={destination.placeName}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <h3 className="text-xs lg:text-sm font-semibold text-white">
                      {destination.placeName}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
</div>



      </div>
    </section>
  );
}

export default PopularDestinations;