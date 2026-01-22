import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles =
    "bg-[var(--card)] text-[var(--card-foreground)] rounded-xl border border-[var(--border)] p-6 shadow-sm";
  
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
    : "";

  const classes = `${baseStyles} ${hoverStyles} ${className}`;

  return <div className={classes}>{children}</div>;
}
