import React, { DOMAttributes, HTMLAttributes } from "react";
import Navbar from "./Navbar";
import { Container } from "src/components/ui/container";
import { Button } from "src/components/ui/button";
import { NavbarProps } from "src/types/client";
import { cn } from "src/lib/utils";

function NavButton({
  theme,
  children,
  className,
}: HTMLAttributes<HTMLButtonElement> & { theme?: NavbarProps["theme"] }) {
  return (
    <Button
      className={cn(
        "uppercase bg-transparent border-2 rounded-lg",
        theme === "dark"
          ? "border-white text-white hover:bg-primary/10"
          : "hover:bg-primary-foreground/10",
        className
      )}
    >
      {children}
    </Button>
  );
}

function AppNavbar({ theme = "dark", ...props }: NavbarProps) {
  return (
    <Navbar theme={theme} {...props}>
      <Container className="h-full w-full flex items-center justify-between">
        <h1 className="text-inherit">Navbar</h1>
        <div className="flex items-center justify-center gap-2">
          <NavButton theme={theme}>Login</NavButton>
          <NavButton
            theme={theme}
            className={cn(
              theme === "dark"
                ? "bg-[#EA4686]/25 hover:bg-[#EA4686]/50 border-[#EA4686]"
                : "bg-[#EA4686]/50 hover:bg-[#EA4686] border-[#EA4686] text-primary-foreground"
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
