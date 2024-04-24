import { createElement, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "src/lib/utils";

const typographyVariants = cva("", {
  variants: {
    theme: {
      primary: "text-primary",
      secondary: "text-secondary",
      default: "text-primary",
      error: "text-destructive",
      info: "text-info",
      warning: "text-warning",
      success: "text-success",
    },
    variant: {
      default: "text-base",
      p: "text-base",
      h1: "text-8xl font-[700]",
      h2: "text-6xl font-[600]",
      h3: "text-5xl font-[600]",
      h4: "text-4xl font-[600]",
      h5: "text-2xl font-[600]",
      h6: "text-xl font-[600]",
      subtitle1: "text-sm",
      subtitle2: "text-lg",
      caption: "text-xs",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
}

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ component = "p", variant, className, children, theme, ...props }, ref) => {
    return createElement(
      component,
      {
        ...props,
        className: cn(typographyVariants({ theme, className, variant })),
      },
      children
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
