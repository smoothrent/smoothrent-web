"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Why", href: "/#why" },
  { label: "Looking", href: "/#looking" },
  { label: "Join", href: "/#join" },
  { label: "Contacts", href: "/#contacts" },
];

const AppHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-white.svg" alt="SmoothRent" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 md:flex justify-center items-center gap-6 pr-16">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-lg cursor-pointer text-[#F8D57E]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border hover:bg-gray-50 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-black/90 backdrop-blur">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block px-2 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
