"use client";

import Image from "next/image";
import React from "react";
import { Input } from "@components/ui/input";
import { Typography } from "@components/ui/typography";
import { IconSearch } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Separator } from "src/components/ui/separator";
import Searchbar from "src/components/elements/searchbar";

function MainBanner() {
  const [searchText, setSearchText] = React.useState("");

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
            <Searchbar
              value={searchText}
              onChange={(e) => setSearchText(e?.target?.value)}
              onClearInput={() => setSearchText("")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
