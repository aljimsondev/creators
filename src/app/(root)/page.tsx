import * as React from "react";
import MainBanner from "src/components/client/banner/MainBanner";
import { Navbar } from "src/components/elements/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainBanner />
    </main>
  );
}
