import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";

  const variants = {
    default:
      "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
    primary:
      "bg-[var(--primary)] text-[var(--primary-foreground)]",
    secondary:
      "bg-[var(--muted)] text-[var(--muted-foreground)]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  return <span className={classes}>{children}</span>;
}
