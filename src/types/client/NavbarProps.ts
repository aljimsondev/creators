import { HTMLAttributes } from "react";

export type NavbarProps = HTMLAttributes<HTMLDivElement> & {
  theme?: "dark" | "light" | "system";
  position?: "absolute" | "relative" | "sticky" | "fixed";
  shrink?: boolean;
  shrinkOptions?: {
    textColorOnShrink?: string;
    textColorBase?: string;
    shrinkBackground?: string;
  };
};
