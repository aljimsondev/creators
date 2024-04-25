import React, { ReactNode } from "react";
import { AppNavbar } from "src/components/elements/navbar";

function LoginPageLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AppNavbar />
      {children}
    </main>
  );
}

export default LoginPageLayout;
