import { HTMLAttributes } from "react";

export type NavbarProps = HTMLAttributes<HTMLDivElement> & {
  theme?: "dark" | "light";
  position?: "absolute" | "relative" | "sticky" | "fixed";
  shrink?: boolean;
  options?: {
    background?: string;
    textColor?: string;
    shrinkOptions?: {
      textColorOnShrink?: string;
      textColorBase?: string;
      shrinkBackground?: string;
    };
  };
};
