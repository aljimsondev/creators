import React, { ReactNode } from "react";
import { AppNavbar } from "src/components/elements/navbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AppNavbar position="relative" shrink={false} theme="light" />
      {children}
    </main>
  );
}

export default Layout;
