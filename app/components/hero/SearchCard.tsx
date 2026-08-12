import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { FaWalking } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import {
  RiSearchAi2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const items = [
  { label: "Dubai", value: "dubai" },
  { label: "Thailand", value: "thailand" },
  { label: "Bali", value: "bali" },
  { label: "Maldives", value: "maldives" },
  { label: "Singapore", value: "singapore" },
  { label: "Malaysia", value: "malaysia" },
];

const tripTypes = [
  { label: "City Escape", value: "city-escape" },
  { label: "Family Getaway", value: "family-getaway" },
  { label: "Heritage Journey", value: "heritage-journey" },
  { label: "Scenic Road Trip", value: "scenic-road-trip" },
  { label: "Luxury Dining", value: "luxury-dining" },
  { label: "Travel Planning", value: "travel-planning" },
  { label: "Water Sports", value: "water-sports" },
  { label: "Nature & Camping", value: "nature-camping" },
];

function SearchCard() {
  const [value, setValue] = React.useState([2, 5]);
  const [price, setPrice] = React.useState([600, 4500]);

  return (
    <div>
      <Card className="mt-6 w-full bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="font-semibold text-gray-800">
            Search for your next adventure
          </CardTitle>

          {/* Hide helper text on mobile */}
          <p className="hidden max-w-2xl text-sm text-muted-foreground sm:block">
            Choose your destination, trip style, duration, and budget to find
            the perfect getaway.
          </p>
        </CardHeader>

        <CardContent className="flex w-full flex-col gap-2 p-3.5 lg:flex-row">
          {/* Location */}
          <div className="w-full">
            <Select items={items}>
              <SelectTrigger className="w-full !h-10 border-gray-300 bg-gray-100 text-sm">
                <FaLocationDot className="text-primary" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {items.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="text-sm"
                    >
                      <FaLocationDot className="mr-2 text-primary" />
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Trip Type */}
          <div className="w-full">
            <Select items={tripTypes}>
              <SelectTrigger className="w-full !h-10 border-gray-300 bg-gray-100 text-sm">
                <FaWalking className="text-primary" />
                <SelectValue placeholder="Trip Type" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {tripTypes.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="flex items-center gap-2 text-sm"
                    >
                      <FaWalking className="text-primary" />
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Trip Days */}
          <div className="w-full">
            <Popover>
              <PopoverTrigger
                className="text-left"
                render={
                  <Button
                    className="w-full !h-10 border-gray-300 bg-gray-100 text-sm text-gray-500"
                    variant="outline"
                  />
                }
              >
                <IoMdTime className="text-primary" />
                {value[0]} - {value[1]} Days
              </PopoverTrigger>

              <PopoverContent>
                <PopoverHeader />

                <div className="mx-auto grid w-full max-w-xs gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="trip-days">Trip Days</Label>

                    <span className="text-sm text-muted-foreground">
                      {value[0]} - {value[1]} Days
                    </span>
                  </div>

                  <Slider
                    id="trip-days"
                    value={value}
                    onValueChange={(value) =>
                      setValue(value as number[])
                    }
                    min={1}
                    max={7}
                    step={1}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Price Range */}
          <div className="w-full">
            <Popover>
              <PopoverTrigger
                className="text-left"
                render={
                  <Button
                    className="w-full !h-10 border-gray-300 bg-gray-100 text-sm text-gray-500"
                    variant="outline"
                  />
                }
              >
                <RiMoneyDollarCircleLine className="text-primary" />
                {price[0]} - {price[1]} USD
              </PopoverTrigger>

              <PopoverContent>
                <PopoverHeader />

                <div className="mx-auto grid w-full max-w-xs gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="price-range">Price Range</Label>

                    <span className="text-sm text-muted-foreground">
                      {price[0]} - {price[1]} USD
                    </span>
                  </div>

                  <Slider
                    id="price-range"
                    value={price}
                    onValueChange={(value) =>
                      setPrice(value as number[])
                    }
                    min={100}
                    max={5000}
                    step={1}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search */}
          <div className="w-full lg:w-auto">
            <Button className="w-full min-w-[100px] !h-10 bg-primary text-sm text-white hover:bg-primary/90">
              <RiSearchAi2Line />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchCard;