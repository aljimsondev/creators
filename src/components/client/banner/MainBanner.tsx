import Image from "next/image";
import React from "react";

function MainBanner() {
  return (
    <div className="h-[70vh] bg-slate-500 w-full relative">
      <div className="w-full h-full relative">
        <Image src="/assets/banner/main-banner.png" fill alt="banner" />
      </div>
    </div>
  );
}

export default MainBanner;
