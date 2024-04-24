import Image from "next/image";
import React from "react";
import { Input } from "@components/ui/input";
import { Typography } from "@components/ui/typography";
import { IconSearch } from "@tabler/icons-react";

function MainBanner() {
  return (
    <div className="h-[70vh] bg-slate-500 w-full relative -top-navbar">
      <div className="w-full h-full relative pointer-events-none">
        <Image src="/assets/banner/main-banner.png" fill alt="banner" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-0 w-full h-full left-0 z-20">
        <div className="h-full w-full relative flex items-center justify-center text-center flex-col">
          <div>
            <Typography variant="h3" className="font-bold">
              CREATE, DISCOVER.
            </Typography>
            <Typography variant="h1">BECOME</Typography>
          </div>
          <div className="my-4">
            <div>
              <div className="w-[500px] bg-white h-[60px] flex items-center rounded-2xl overflow-hidden ring-1 ring-ring">
                <span className="h-full aspect-square flex items-center justify-center text-primary-foreground">
                  <IconSearch stroke={2} />
                </span>
                <Input
                  className="h-full flex-1 text-primary-foreground border-none ring-0 outline-none text-lg font-semibold focus-visible:ring-0 px-0 pr-2"
                  placeholder="Find your creators..."
                />
                <button className="bg-accent-secondary h-full px-6 font-semibold">
                  Search
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
