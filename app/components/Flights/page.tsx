"use client";

import React from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const airlines = [
  {
    name: "Biman Bangladesh Airlines",
    country: "Bangladesh",
    code: "BG",
    description: "Bangladesh's national flag carrier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Biman_Airlines_logo.svg",
    link: "https://www.biman-airlines.com/",
  },
  {
    name: "US-Bangla Airlines",
    country: "Bangladesh",
    code: "BS",
    description: "Leading private airline from Bangladesh",
    logo: "https://cdn.simpleicons.org/usbanglaairlines",
    link: "https://usbair.com/",
  },
  {
    name: "Air India",
    country: "India",
    code: "AI",
    description: "India's flagship international airline",
    logo: "https://cdn.simpleicons.org/airindia",
    link: "https://www.airindia.com/",
  },
  {
    name: "IndiGo",
    country: "India",
    code: "6E",
    description: "India's largest airline by passengers",
    logo: "https://cdn.simpleicons.org/indigo",
    link: "https://www.goindigo.in/",
  },
  {
    name: "Vietnam Airlines",
    country: "Vietnam",
    code: "VN",
    description: "Vietnam's national flag carrier",
    logo: "https://cdn.simpleicons.org/vietnamairlines",
    link: "https://www.vietnamairlines.com/",
  },
  {
    name: "VietJet Air",
    country: "Vietnam",
    code: "VJ",
    description: "Popular low-cost airline from Vietnam",
    logo: "https://cdn.simpleicons.org/vietjetair",
    link: "https://www.vietjetair.com/",
  },
  {
    name: "Garuda Indonesia",
    country: "Indonesia",
    code: "GA",
    description: "Indonesia's national airline",
    logo: "https://cdn.simpleicons.org/garudaindonesia",
    link: "https://www.garuda-indonesia.com/",
  },
  {
    name: "Emirates",
    country: "United Arab Emirates",
    code: "EK",
    description: "Premium global airline from Dubai",
    logo: "https://cdn.simpleicons.org/emirates",
    link: "https://www.emirates.com/",
  },
  {
    name: "Qatar Airways",
    country: "Qatar",
    code: "QR",
    description: "Award-winning airline from Doha",
    logo: "https://cdn.simpleicons.org/qatarairways",
    link: "https://www.qatarairways.com/",
  },
  {
    name: "Singapore Airlines",
    country: "Singapore",
    code: "SQ",
    description: "Premium international airline",
    logo: "https://cdn.simpleicons.org/singaporeairlines",
    link: "https://www.singaporeair.com/",
  },
  {
    name: "Malaysia Airlines",
    country: "Malaysia",
    code: "MH",
    description: "Malaysia's national airline",
    logo: "https://cdn.simpleicons.org/malaysiaairlines",
    link: "https://www.malaysiaairlines.com/",
  },
  {
    name: "Turkish Airlines",
    country: "Türkiye",
    code: "TK",
    description: "Global airline connecting the world",
    logo: "https://cdn.simpleicons.org/turkishairlines",
    link: "https://www.turkishairlines.com/",
  },
  {
    name: "Saudia",
    country: "Saudi Arabia",
    code: "SV",
    description: "Saudi Arabia's national carrier",
    logo: "https://cdn.simpleicons.org/saudia",
    link: "https://www.saudia.com/",
  },
  {
    name: "Gulf Air",
    country: "Bahrain",
    code: "GF",
    description: "Bahrain's national carrier",
    logo: "https://cdn.simpleicons.org/gulfair",
    link: "https://www.gulfair.com/",
  },
];

function TopFlights() {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <section className="w-full px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="flex max-w-3xl flex-col items-start text-left">
          <Badge className="mb-4 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
            Top Airlines
          </Badge>

          <h2 className="text-2xl font-bold leading-[1.05] tracking-tight sm:text-3xl">
            Fly with the world's top airlines
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-6 text-muted-foreground sm:text-sm">
            Compare and book flights from leading airlines around the world.
            Find convenient routes, great fares, and a comfortable journey.
          </p>
        </div>

        {/* Airlines */}
        <div className="relative mt-6">

          <div
            className={`
              grid grid-cols-1 gap-3
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              ${!showAll ? "max-h-[470px] overflow-hidden sm:max-h-none" : ""}
            `}
          >
            {airlines.map((airline) => (
              <Link
                key={airline.code}
                href={airline.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Item
                  className="
                    h-full rounded-xl border bg-card
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-primary/30
                    hover:shadow-md
                  "
                >
                  {/* Logo */}
                  <ItemMedia
                    variant="icon"
                    className="size-12 shrink-0 rounded-lg border bg-white p-2.5"
                  >
                    <img
                      src={airline.logo}
                      alt={`${airline.name} logo`}
                      className="size-full object-contain"
                      loading="lazy"
                    />
                  </ItemMedia>

                  {/* Content */}
                  <ItemContent>
                    <ItemTitle className="line-clamp-1 text-sm font-semibold">
                      {airline.name}
                    </ItemTitle>

                    <ItemDescription className="line-clamp-1 text-xs">
                      {airline.country} · {airline.description}
                    </ItemDescription>
                  </ItemContent>

                  {/* IATA */}
                  <div
                    className="
                      rounded-md bg-muted px-2 py-1
                      text-[10px] font-semibold
                      text-muted-foreground
                      transition-colors
                      group-hover:bg-primary/10
                      group-hover:text-primary
                    "
                  >
                    {airline.code}
                  </div>
                </Item>
              </Link>
            ))}
          </div>

          {/* Mobile Floating View All */}
          {!showAll && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-background via-background/90 to-transparent pb-2 pt-16 sm:hidden">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="
                  pointer-events-auto
                  flex items-center gap-2
                  rounded-full
                  border
                  bg-background
                  px-5 py-2.5
                  text-sm font-medium
                  shadow-lg
                  transition-all
                  hover:border-primary
                  hover:text-primary
                  active:scale-95
                "
              >
                View all airlines
                <span className="text-primary">→</span>
              </button>
            </div>
          )}

          {/* Mobile Collapse */}
          {showAll && (
            <div className="mt-4 flex justify-center sm:hidden">
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="
                  rounded-full
                  border
                  px-5 py-2
                  text-sm font-medium
                  text-muted-foreground
                  transition-colors
                  hover:border-primary
                  hover:text-primary
                "
              >
                Show less ↑
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default TopFlights;