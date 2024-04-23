"use client";

import { useTheme } from "next-themes";
import React, { HTMLAttributes } from "react";
import { Button } from "src/components/ui/button";
import { Container } from "src/components/ui/container";
import { cn } from "src/lib/utils";

function Navbar({
  theme = "dark",
  position = "relative",
  shrink = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  theme?: "dark" | "light" | "system";
  position?: "absolute" | "relative" | "sticky" | "fixed";
  shrink?: boolean;
  shrinkOptions?: {
    textColorOnShrink?: string;
    textColorBase?: string;
    shrinkBackground?: string;
  };
}) {
  const { theme: nextTheme } = useTheme();
  const headerRef = React.useRef<HTMLDivElement>(null);

  //todo create theme and positioning logic

  const formattedClassname = () => {
    let _classname: any[] = [];
    let _background = "";
    let _textColor = "text-primary";

    if (typeof position === "string") {
      _classname.push(position);
    }

    if (theme === "dark") {
      //gets the initial background color for dark theme selected
      const background =
        nextTheme !== "dark" ? `bg-primary` : `bg-primary-foreground`;
      //theme is set to
      _background =
        nextTheme !== "dark" ? `bg-primary` : `bg-primary-foreground`; //indicator for what the base color of the navbar

      _textColor =
        nextTheme !== "dark" ? `text-primary-foreground` : `text-primary`; //text-color

      //when shrink is enabled the navbar is transparent and transition its base color whick is the value sets by _background
      _classname.push(shrink ? "bg-transparent" : background);
      _classname.push(shrink ? "text-primary" : _textColor);
    } else if (theme === "light") {
      const background =
        nextTheme === "dark" ? `bg-primary` : `bg-primary-foreground`;

      _background =
        nextTheme === "dark" ? `bg-primary` : `bg-primary-foreground`;

      _textColor =
        nextTheme === "dark" ? `text-primary-foreground` : "text-primary"; //text-color

      _classname.push(shrink ? "text-primary-foreground" : _textColor);
      _classname.push(shrink ? "bg-transparent" : background);
    } else {
      _classname.push(nextTheme);
    }

    return {
      className: _classname,
      background: _background,
      textColor: _textColor,
    };
  };

  //classnames to add when shrink is active
  const classNamesToAddInShrink = [
    formattedClassname().background,
    formattedClassname().textColor,
  ];
  const classNamesToRemovedInShrink = [
    "bg-transparent",
    shrink
      ? theme === "dark"
        ? "text-primary-foreground"
        : "text-primary"
      : theme === "light"
      ? "text-primary-foreground"
      : "text-primary",
  ];

  React.useEffect(() => {
    const handleScroll = (e: Event) => {
      //todo handle scrolling event;
      const { scrollY } = window;
      if (!shrink) return;
      if (scrollY > 80) {
        //added classes provided in the array
        classNamesToAddInShrink.map((classname: string) => {
          headerRef.current?.classList.add(classname);
        });

        //removes classes provided in the array
        classNamesToRemovedInShrink.map((classname) => {
          headerRef.current?.classList.remove(classname);
        });
      } else {
        //when the unshrinking we just reverse the actions above
        classNamesToAddInShrink.map((classname: string) => {
          headerRef.current?.classList.remove(classname);
        });

        classNamesToRemovedInShrink.map((classname) => {
          headerRef.current?.classList.add(classname);
        });
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      //clean up
      document.removeEventListener("scroll", handleScroll);
    };
  }, [shrink, theme]);

  return (
    <div
      ref={headerRef}
      className={cn(
        "h-navbar w-full top-0 left-0 z-10 bg-primary-foreground",
        formattedClassname().className,
        props?.className
      )}
    >
      <Container className="h-full w-full flex items-center justify-between">
        <h1 className="text-inherit">Navbar</h1>
        <div className="flex items-center justify-center gap-2">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
