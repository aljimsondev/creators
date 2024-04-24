"use client";

import Image from "next/image";
import React from "react";
import { Typography } from "@components/ui/typography";
import Searchbar from "src/components/elements/searchbar";
import { Container } from "src/components/ui/container";

function MainBanner() {
  const [searchText, setSearchText] = React.useState("");

  return (
    <div className="h-[65vh] w-full relative">
      <div className="w-full h-full relative pointer-events-none">
        <Image
          src="/assets/banner/main-banner.png"
          objectFit="cover"
          fill
          alt="banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-0 w-full h-full left-0 z-20">
        <Container className="h-full w-full">
          <div className="h-full w-full relative flex items-center justify-center text-center flex-col">
            <div>
              <Typography className="font-bold text-lg md:text-3xl lg:text-5xl">
                CREATE, DISCOVER.
              </Typography>
              <Typography className="font-bold text-4xl md:text-7xl lg:text-9xl">
                BECOME!
              </Typography>
            </div>
            <div className="mt-8">
              <Searchbar
                value={searchText}
                onChange={(e) => setSearchText(e?.target?.value)}
                onClearInput={() => setSearchText("")}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainBanner;
