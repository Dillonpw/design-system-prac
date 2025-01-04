"use client";

import { useState, useEffect } from "react";
import Button from "./ui/button";
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-gray-100 shadow-sm border-b-4 border-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="font-title text-2xl font-bold text-gray-900">
          Astro
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-md font-title font-bold text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="relative z-50 md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40  bg-gray-700 bg-opacity-75 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute inset-y-0 right-0 w-full h-fit bg-gray-100 px-6 py-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mt-8">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-title block text-end text-lg hover:underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

