"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 text-textLight">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={`${
              link.href === pathname && "text-prime border-b-2 border-prime"
            } capitalize font-medium hover:text-prime transition-all`}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
