import * as React from "react";
import MainBanner from "src/components/client/banner/MainBanner";
import { FeaturedSection } from "src/components/client/section/home";
import { AppNavbar } from "src/components/elements/navbar";

export default function Home() {
  return (
    <main>
      <AppNavbar
        position="sticky"
        options={{
          shrinkOptions: {
            shrinkClassname: "bg-primary-foreground/30 backdrop-blur-md",
          },
        }}
      />
      <div className="-top-navbar relative">
        <MainBanner />
        <FeaturedSection />
        <FeaturedSection />
      </div>
    </main>
  );
}
