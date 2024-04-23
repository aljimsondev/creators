import { cn } from "src/lib/utils";
import * as React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("container px-2 md:px-8", className)}
    {...props}
    ref={ref}
  ></div>
));

Container.displayName = "Container";

export { Container };
