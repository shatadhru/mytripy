import type { LinkItemType } from "@/components/efferd/sheard";
import {
  PlaneIcon,
  HotelIcon,
  MapIcon,
  BadgeCheckIcon,
  BookOpenIcon,
  BriefcaseIcon,
  UsersIcon,
  HandshakeIcon,
  FileTextIcon,
  ShieldIcon,
  RotateCcwIcon,
  HelpCircleIcon,
} from "lucide-react";

export const productLinks: LinkItemType[] = [
  {
    label: "Flights",
    href: "/flights",
    description: "Search and compare the best flight deals",
    icon: <PlaneIcon />,
  },
  {
    label: "Hotels",
    href: "/hotels",
    description: "Book hotels, resorts and apartments worldwide",
    icon: <HotelIcon />,
  },
  {
    label: "Holiday Packages",
    href: "/packages",
    description: "Discover curated travel packages",
    icon: <MapIcon />,
  },
  {
    label: "Visa Services",
    href: "/visa",
    description: "Fast and reliable visa assistance",
    icon: <BadgeCheckIcon />,
  },
  {
    label: "Travel Guides",
    href: "/guides",
    description: "Explore destinations with expert travel guides",
    icon: <BookOpenIcon />,
  },
  {
    label: "Corporate Travel",
    href: "/business",
    description: "Business travel solutions for companies",
    icon: <BriefcaseIcon />,
  },
];

export const companyLinks: LinkItemType[] = [
  {
    label: "About Us",
    href: "/about",
    description: "Learn more about Zaroo and our mission",
    icon: <UsersIcon />,
  },
  {
    label: "Partner With Us",
    href: "/partners",
    description: "Grow your business with Zaroo",
    icon: <HandshakeIcon />,
  },
];

export const companyLinks2: LinkItemType[] = [
  {
    label: "Terms of Service",
    href: "/terms",
    icon: <FileTextIcon />,
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
    icon: <ShieldIcon />,
  },
  {
    label: "Refund Policy",
    href: "/refund-policy",
    icon: <RotateCcwIcon />,
  },
  {
    label: "Help Center",
    href: "/help",
    icon: <HelpCircleIcon />,
  },
];