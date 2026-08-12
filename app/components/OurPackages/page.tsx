"use client";

import React from "react";
import Link from "next/link";

import { CldImage } from "next-cloudinary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Clock3,
  MapPin,
  Star,
  ArrowRight,
  Users,
} from "lucide-react";

import type { CarouselApi } from "@/components/ui/carousel";

const packages = [
  {
    id: "bali",
    title: "Bali Tropical Escape",
    location: "Bali, Indonesia",
    duration: "5 Days / 4 Nights",
    guests: "2–4 Guests",
    rating: 4.9,
    reviews: 128,
    price: 699,
    oldPrice: 849,
    discount: 18,
    tag: "Popular",
    image:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464120/1742287101_Bali_main_blog.jpg",
    href: "/packages/bali-tropical-escape",
  },
  {
    id: "dubai",
    title: "Dubai Luxury Getaway",
    location: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    guests: "2–4 Guests",
    rating: 4.8,
    reviews: 96,
    price: 799,
    oldPrice: 949,
    discount: 16,
    tag: "Best Seller",
    image:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464224/images.jpg",
    href: "/packages/dubai-luxury-getaway",
  },
  {
    id: "malaysia",
    title: "Malaysia Discovery",
    location: "Kuala Lumpur, Malaysia",
    duration: "5 Days / 4 Nights",
    guests: "2–6 Guests",
    rating: 4.7,
    reviews: 74,
    price: 599,
    oldPrice: 699,
    discount: 14,
    tag: "Great Value",
    image:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464192/914b79223054e0c03820624e0592834d.jpg",
    href: "/packages/malaysia-discovery",
  },
  {
    id: "vietnam",
    title: "Vietnam Adventure",
    location: "Ho Chi Minh City, Vietnam",
    duration: "6 Days / 5 Nights",
    guests: "2–6 Guests",
    rating: 4.9,
    reviews: 112,
    price: 749,
    oldPrice: 899,
    discount: 17,
    tag: "Trending",
    image:
      "https://res.cloudinary.com/rwcavbjs/image/upload/v1786464270/images_1.jpg",
    href: "/packages/vietnam-adventure",
  },
  {
    id: "singapore",
    title: "Singapore City Escape",
    location: "Singapore",
    duration: "4 Days / 3 Nights",
    guests: "2–4 Guests",
    rating: 4.8,
    reviews: 87,
    price: 679,
    oldPrice: 799,
    discount: 15,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200",
    href: "/packages/singapore-city-escape",
  },
  {
    id: "thailand",
    title: "Thailand Beach Holiday",
    location: "Phuket, Thailand",
    duration: "5 Days / 4 Nights",
    guests: "2–6 Guests",
    rating: 4.9,
    reviews: 143,
    price: 629,
    oldPrice: 749,
    discount: 16,
    tag: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    href: "/packages/thailand-beach-holiday",
  },
];

function PackageCard({
  pkg,
}: {
  pkg: (typeof packages)[number];
}) {
  return (
    <Card className="group overflow-hidden rounded-2xl border bg-card p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={pkg.href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <CldImage
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {pkg.tag && (
            <Badge className="absolute left-3 top-3 rounded-full bg-white/95 text-foreground">
              {pkg.tag}
            </Badge>
          )}

          <Badge className="absolute right-3 top-3 rounded-full bg-primary text-primary-foreground">
            {pkg.discount}% OFF
          </Badge>

          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-medium text-white">
            <MapPin className="size-3.5" />
            {pkg.location}
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={pkg.href}>
          <h3 className="line-clamp-1 text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
            {pkg.title}
          </h3>
        </Link>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock3 className="size-3.5" />
            {pkg.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Users className="size-3.5" />
            {pkg.guests}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-semibold">
            <Star className="size-3.5 fill-primary text-primary" />
            {pkg.rating}
          </span>

          <span className="text-xs text-muted-foreground">
            ({pkg.reviews} reviews)
          </span>
        </div>

        <div className="my-4 h-px bg-border" />

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] text-muted-foreground">
              Starting from
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">
                ${pkg.price}
              </span>

              <span className="text-xs text-muted-foreground line-through">
                ${pkg.oldPrice}
              </span>
            </div>

            <p className="text-[11px] text-muted-foreground">
              per person
            </p>
          </div>

          <Button
          >
            <Link href={pkg.href} className="flex items-center gap-2">
              View <ArrowRight className="" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PackageSlider() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section className="w-full px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Badge className="mb-4 rounded-full bg-primary px-4 py-1 text-xs">
              Holiday Packages
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Trips worth packing for
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Handpicked holiday packages with great stays,
              experiences, and unforgettable destinations.
            </p>
          </div>

          <Button
        size="sm"
            variant="outline"
            className="hidden rounded-full sm:flex"
          >
            <Link href="/packages" className="flex items-center gap-2" >
              View all
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        {/* Slider */}
        <div className="mt-7">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {packages.map((pkg) => (
                <CarouselItem
                  key={pkg.id}
                  className="
                    basis-[88%] pl-4
                    sm:basis-1/2
                    lg:basis-1/3
                    xl:basis-1/4
                  "
                >
                  <PackageCard pkg={pkg} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Button
            variant="outline"
            className="rounded-full"
          >
            <Link href="/packages" className="flex items-center gap-2">
              View all packages
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}


