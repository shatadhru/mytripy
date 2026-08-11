import Image from "next/image";
import type React from "react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => (
  <div className={`flex items-center gap-2 ${className ?? ""}`}>
    <Image
      src="/mrtripy.png"
      alt="Mr.Tripy Logo"
      width={90}
      height={40}
    />
  </div>
);