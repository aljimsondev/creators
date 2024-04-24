"use client";

import { useTheme } from "next-themes";
import React from "react";
import { cn } from "src/lib/utils";
import { NavbarProps } from "src/types/client";

/**
 * Renders reusable navbar which supports shrink and theming.
 *
 * NOTE: when overriding the styles, the shrinkOptions styling will be followed when shrink is `true` regardless what background you specified.
 * @param {NavbarProps} props - Navbar props
 * @param {NavbarProps["theme"]} props.theme - navbar theme to be rendered which support light and dark theme; default is `dark`
 * @returns
 */
function Navbar({
  theme = "dark",
  position = "relative",
  shrink = true,
  children,
  options = {
    background: undefined,
    textColor: undefined,
    shrinkOptions: {
      shrinkBackground: undefined,
      textColorBase: undefined,
      textColorOnShrink: undefined,
    },
  },
  ...props
}: NavbarProps) {
  const { theme: nextTheme } = useTheme();
  const headerRef = React.useRef<HTMLDivElement>(null);

  //todo create theme and positioning logic

  const formattedClassname = () => {
    let _classname: any[] = [];
    let _background = "";
    let _textColor = "text-primary";
    let _textColorOnshrink =
      theme !== "dark" ? "text-primary" : "text-primary-foreground";

    if (typeof position === "string") {
      _classname.push(position);
    }

    if (
      shrink &&
      options?.shrinkOptions?.textColorOnShrink &&
      typeof options?.shrinkOptions?.textColorOnShrink === "string"
    ) {
      _textColorOnshrink = options?.shrinkOptions?.textColorOnShrink; //sets the text-color on shrink
    }

    if (theme === "dark") {
      //gets the initial background color for dark theme selected
      _background =
        nextTheme !== "dark" ? `bg-primary` : `bg-primary-foreground`;

      _textColor =
        nextTheme !== "dark" ? `text-primary-foreground` : `text-primary`; //text-color
    } else if (theme === "light") {
      _background =
        nextTheme === "dark" ? `bg-primary` : `bg-primary-foreground`;

      _textColor =
        nextTheme === "dark" ? `text-primary-foreground` : "text-primary"; //text-color
    }

    //use the given background if given and ignore top background
    if (options.background) {
      _background = options.background; //overide background
    }

    //checks when the shrink options is available and shrink is enable
    if (
      shrink &&
      options?.shrinkOptions?.shrinkBackground &&
      typeof options.shrinkOptions.shrinkBackground === "string"
    ) {
      _background = options?.shrinkOptions?.shrinkBackground; //override _background color to the given color to shrinkBackground
    }

    //same goes for text-color
    if (options?.textColor) {
      _textColor = options?.textColor; //sets given text-color
    }
    //checks for shrink options
    if (
      shrink &&
      options?.shrinkOptions?.textColorBase &&
      typeof options.shrinkOptions.textColorBase === "string"
    ) {
      _textColor = options.shrinkOptions.textColorBase; //sets the text-color to shrink options text-color
    }

    _classname.push(shrink ? "bg-transparent" : _background); //use default
    _classname.push(shrink ? _textColorOnshrink : _textColor); //use default

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
        "h-navbar w-full top-0 left-0 z-10",
        formattedClassname().className,
        props?.className
      )}
    >
      {children}
    </div>
  );
}

export default Navbar;
