"use client";

import React from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";

import type { CarouselApi } from "@/components/ui/carousel";

const destinations = [
  {
    placeName: "Indonesia",
    link: "/destinations/indonesia",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464120/1742287101_Bali_main_blog.jpg",
  },
  {
    placeName: "Baku",
    link: "/destinations/baku",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464224/images.jpg",
  },
  {
    placeName: "Sri Lanka",
    link: "/destinations/sri-lanka",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464267/Colombo.jpg",
  },
  {
    placeName: "Malaysia",
    link: "/destinations/malaysia",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464192/914b79223054e0c03820624e0592834d.jpg",
  },
  {
    placeName: "Vietnam",
    link: "/destinations/vietnam",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464270/images_1.jpg",
  },
  {
    placeName: "Malaysia",
    link: "/destinations/malaysia",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464192/914b79223054e0c03820624e0592834d.jpg",
  },
  {
    placeName: "Vietnam",
    link: "/destinations/vietnam",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464270/images_1.jpg",
  },
  {
    placeName: "Malaysia",
    link: "/destinations/malaysia",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464192/914b79223054e0c03820624e0592834d.jpg",
  },
  {
    placeName: "Vietnam",
    link: "/destinations/vietnam",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464270/images_1.jpg",
  },
  {
    placeName: "Malaysia",
    link: "/destinations/malaysia",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464192/914b79223054e0c03820624e0592834d.jpg",
  },
  {
    placeName: "Vietnam",
    link: "/destinations/vietnam",
    imageUrl:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464270/images_1.jpg",
  },
];

function PopularDestinations() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="w-full px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-start text-left">
          <Badge className="mb-4 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
            Mr.Tripy Spotlights
          </Badge>

          <h2 className="text-2xl font-bold leading-[1.05] tracking-tight sm:text-3xl">
            Where will you go next?
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-6 text-muted-foreground sm:text-sm">
            Explore handpicked destinations and find your next unforgettable
            adventure.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-6 w-full">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
            }}
          >
            <CarouselContent className="-ml-3">
              {destinations.map((destination, index) => (
                <CarouselItem
                  key={`${destination.placeName}-${index}`}
                  className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/5"
                >
                  <Link
                    href={destination.link}
                    className="group block"
                  >
                    <Card className="relative aspect-[4/5] overflow-hidden rounded-xl border-0 p-0">

                      {/* Image */}
                      <CldImage
                        src={destination.imageUrl}
                        alt={destination.placeName}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                      {/* Destination */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                        <h3 className="text-sm font-semibold leading-tight text-white sm:text-base">
                          {destination.placeName}
                        </h3>
                      </div>

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