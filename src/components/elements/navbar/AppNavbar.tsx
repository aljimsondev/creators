import React, { HTMLAttributes } from "react";
import Navbar from "./Navbar";
import { Container } from "src/components/ui/container";
import { Button } from "src/components/ui/button";
import { NavbarProps } from "src/types/client";

function AppNavbar(props: NavbarProps) {
  return (
    <Navbar {...props}>
      <Container className="h-full w-full flex items-center justify-between">
        <h1 className="text-inherit">Navbar</h1>
        <div className="flex items-center justify-center gap-2">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
