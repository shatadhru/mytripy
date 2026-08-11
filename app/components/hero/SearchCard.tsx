import React from 'react'
import { Card, CardHeader, CardTitle , CardContent} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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



import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';

import { FaWalking } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime  } from "react-icons/io";

import { RiSearchAi2Line } from "react-icons/ri";





function SearchCard() {

const [value, setValue] = React.useState([2, 5]);
const [price, setPrice] = React.useState([600, 4500]);

  return (
    <div>
      
<Card className="mt-6 w-full  bg-white  shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className=" font-semibold text-gray-800">
                Search for your next adventure
              </CardTitle>
            </CardHeader>   
            <CardContent className=" p-3.5 flex flex-col lg:flex-row  gap-2 w-full">
 <div className="w-full">

<Select items={items}>
  <SelectTrigger className="w-full !h-10 text-sm bg-gray-100 border-gray-300">
     <FaLocationDot className="text-primary" />   
    <SelectValue placeholder="Location" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value} className="text-sm">
     <FaLocationDot className="mr-2 text-primary" />     {item.label}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>
        </div>
     <div className="w-full ">

<Select items={tripTypes}>
  <SelectTrigger className="w-full !h-10 text-sm bg-gray-100 border-gray-300">
      <FaWalking className="text-primary"/>    
    <SelectValue placeholder="Trip Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {tripTypes.map((item) => (
        <SelectItem key={item.value} value={item.value} className="text-sm gap-2 items-center flex">
      <FaWalking className="text-primary"/>    {item.label}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>
        </div>






     <div className="w-full lg:mt-0">

      <Popover>
  <PopoverTrigger className="text-left" render={<Button className="w-full !h-10 text-sm text-gray-500 bg-gray-100 border-gray-300" variant="outline" />}>
  <IoMdTime  className="text-primary" />
     {value[0]} Days - {value[1]} Days
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
    </PopoverHeader>
     <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Trip Days</Label>
        <span className="text-sm text-muted-foreground">
     {value[0]} - {value[1]} Days
        </span>
      </div>
   <Slider
  id="slider-demo-temperature"
  value={value}
  onValueChange={(value) => setValue(value as number[])}
  min={1}
  max={7}
  step={1}
/>
    </div>
  </PopoverContent>
</Popover>

        </div>

 <div className="w-full  lg:mt-0">
   <Popover>
  <PopoverTrigger className="text-left" render={<Button className="w-full !h-10 text-sm text-gray-500 bg-gray-100 border-gray-300" variant="outline" />}>
  <IoMdTime  className="text-primary" />
     {price[0]} - {price[1]} USD
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
    </PopoverHeader>
     <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Price Range</Label>
        <span className="text-sm text-muted-foreground">
     {price[0]} - {price[1]} USD
        </span>
      </div>
   <Slider
  id="slider-demo-temperature"
  value={price}
  onValueChange={(value) => setPrice(value as number[])}
  min={100}
  max={5000}
  step={1}
/>
    </div>
  </PopoverContent>
</Popover>
        </div>

        <div>
          <Button className="w-full min-w-[100px] !h-10 text-sm bg-primary text-white hover:bg-primary/90">
           <RiSearchAi2Line />
 Search
          </Button>
        </div>


    </CardContent>
            </Card>
    </div>
  )
}

export default SearchCard
