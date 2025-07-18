"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logo } from "@/components/Areas/shared/Logo";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Search for Pros", href: "/search-for-pros" },
    { name: "Project Auction", href: "/project-auction" },
    { name: "Why Profer", href: "/why-profer" },
    { name: "How it Works", href: "#" },
    { name: "Profer Network", href: "#" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo></Logo>
          
        </Link>

        {/* Center Nav */}
        <nav className="flex gap-8 text-gray-600 font-medium text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={false}
              className={clsx(
                "relative hover:text-black transition-colors pb-1",
                pathname === link.href && "text-black font-semibold"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-red-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 hover:underline"
            prefetch={false}
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition-colors"
            prefetch={false}
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
