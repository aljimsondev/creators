import Image from "next/image";
import React from "react";

function MainBanner() {
  return (
    <div className="h-[70vh] bg-slate-500 w-full relative -top-navbar">
      <div className="w-full h-full relative">
        <Image src="/assets/banner/main-banner.png" fill alt="banner" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export default MainBanner;
