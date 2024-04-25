"use client";

import React, { HTMLAttributes } from "react";
import Navbar from "./Navbar";
import { Container } from "src/components/ui/container";
import { Button } from "src/components/ui/button";
import { NavbarProps } from "src/types/client";
import { cn } from "src/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Typography } from "src/components/ui/typography";
import Link from "next/link";

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
          ? "border-white text-white hover:bg-primary/20"
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
      <Container className="h-full w-full relative flex items-center justify-between">
        <Link href="/">
          <div className="flex relative flex-row w-max items-center">
            <span className="h-[40px] aspect-square relative">
              <Image alt="favicon" src="/favicon.ico" fill />
            </span>
            <div>
              <Typography variant="h6">Brand</Typography>
            </div>
          </div>
        </Link>
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
