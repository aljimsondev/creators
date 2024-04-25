import React, { ReactNode } from "react";
import { AppNavbar } from "src/components/elements/navbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AppNavbar
        position="sticky"
        options={{
          shrinkOptions: {
            shrinkClassname: "bg-primary-foreground/20 backdrop-blur-md",
          },
        }}
      />
      {children}
    </main>
  );
}

export default Layout;
