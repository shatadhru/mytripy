import Image from "next/image";
import type React from "react";


export const Logo = () => (
	<div className="flex items-center gap-2">
		<Image src="/mrtripy.png" alt="Logo" width={90} height={40} />
	</div>
);
