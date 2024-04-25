"use client";

import React, { HTMLAttributes } from "react";
import Navbar from "./Navbar";
import { Container } from "src/components/ui/container";
import { Button } from "src/components/ui/button";
import { NavbarProps } from "src/types/client";
import { cn } from "src/lib/utils";
import { useRouter } from "next/navigation";

function NavButton({
  theme,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { theme?: NavbarProps["theme"] }) {
  return (
    <Button
      className={cn(
        "uppercase bg-transparent border-2 rounded-full",
        theme === "dark"
          ? "border-white text-white hover:bg-primary/10"
          : "hover:bg-primary-foreground/10",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

function AppNavbar({ theme = "dark", ...props }: NavbarProps) {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    return router.push(path);
  };

  return (
    <Navbar theme={theme} {...props}>
      <Container className="h-full w-full flex items-center justify-between">
        <h1
          className={cn(
            theme === "dark" ? "text-primary" : "text-primary-foreground"
          )}
        >
          Navbar
        </h1>
        <div className="flex items-center justify-center gap-2">
          <NavButton theme={theme} onClick={() => handleRedirect("/login")}>
            Login
          </NavButton>
          <NavButton
            onClick={() => handleRedirect("/signup")}
            theme={theme}
            className={cn(
              theme === "dark"
                ? "bg-accent-primary/25 hover:bg-accent-primary/50 border-accent-primary"
                : "bg-accent-primary/50 hover:bg-accent-primary border-accent-primary text-primary-foreground"
            )}
          >
            Signup
          </NavButton>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
