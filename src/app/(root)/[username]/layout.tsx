import React, { ReactNode } from "react";
import { AppNavbar } from "src/components/elements/navbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AppNavbar position="relative" />
      {children}
    </main>
  );
}

export default Layout;
