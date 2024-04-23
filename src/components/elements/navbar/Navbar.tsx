import React from "react";
import { Button } from "src/components/ui/button";
import { Container } from "src/components/ui/container";

function Navbar() {
  return (
    <div className="h-navbar w-full absolute top-0 left-0 bg-primary-foreground/60 z-10">
      <Container className="h-full w-full flex items-center justify-between">
        Navbar
        <div className="flex items-center justify-center gap-2">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
