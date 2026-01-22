import { ReactNode } from "react";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
}

export function Heading({ level, children, className = "" }: HeadingProps) {
  const baseStyles = "font-bold text-[var(--foreground)]";
  
  const levelStyles = {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
  };

  const classes = `${baseStyles} ${levelStyles[level]} ${className}`;

  const Component = level;
  return <Component className={classes}>{children}</Component>;
}
