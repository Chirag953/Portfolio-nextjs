"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--border)] rounded-full px-2 sm:px-4 py-2 shadow-sm">
      <ul className="flex gap-1 sm:gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--accent)]"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
