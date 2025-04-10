"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-prime cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <VisuallyHidden>Menu</VisuallyHidden>
          </SheetTitle>
        </SheetHeader>
        {/* Logo */}
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Hong<span className="text-prime">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col gap-8 items-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={`${
                  link.href === pathname && "text-prime border-b-2 border-prime"
                } text-xl capitalize font-medium hover:text-prime transition-all`}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
