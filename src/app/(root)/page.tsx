import * as React from "react";
import MainBanner from "src/components/client/banner/MainBanner";
import { AppNavbar } from "src/components/elements/navbar";

export default function Home() {
  return (
    <main>
      <AppNavbar
        position="sticky"
        shrink={false}
        options={{ background: "bg-primary-foreground/70" }}
      />
      <MainBanner />
      <div className="h-[200vh]"></div>
    </main>
  );
}
