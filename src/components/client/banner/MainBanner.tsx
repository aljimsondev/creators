import Image from "next/image";
import React from "react";
import { Typography } from "src/components/ui/typography";

function MainBanner() {
  return (
    <div className="h-[70vh] bg-slate-500 w-full relative -top-navbar">
      <div className="w-full h-full relative pointer-events-none">
        <Image src="/assets/banner/main-banner.png" fill alt="banner" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-0 w-full h-full left-0 z-20">
        <div className="h-full w-full relative flex items-center justify-center text-center flex-col">
          <Typography variant="h3" className="font-bold">
            CREATE, DISCOVER.
          </Typography>
          <Typography variant="h1">BECOME</Typography>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
