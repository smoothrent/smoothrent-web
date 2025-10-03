import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-[#1E1E1E] text-white" id="contacts">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-white.svg"
                alt="Smooth Rent"
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/90 max-w-md">
              Smooth Rent is a digital rental marketplace making renting in
              Nigeria simple, safe, and rewarding for tenants, landlords, and
              agents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/#why"
                  className="text-white/90 hover:text-indigo-600"
                >
                  Why
                </Link>
              </li>
              <li>
                <Link
                  href="/#looking"
                  className="text-white/90 hover:text-indigo-600"
                >
                  Looking
                </Link>
              </li>
              <li>
                <Link
                  href="/#join"
                  className="text-white/90 hover:text-indigo-600"
                >
                  Join
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacts"
                  className="text-white/90 hover:text-indigo-600"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Follow</h4>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border hover:bg-gray-50"
              >
                <Twitter className="h-5 w-5 text-white/90" />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border hover:bg-gray-50"
              >
                <Instagram className="h-5 w-5 text-white/90" />
              </a>
              <a
                href="https://facebook.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border hover:bg-gray-50"
              >
                <Facebook className="h-5 w-5 text-white/90" />
              </a>
              <a
                href="https://linkedin.com/company/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border hover:bg-gray-50"
              >
                <Linkedin className="h-5 w-5 text-white/90" />
              </a>
            </div>
            <div className="mt-4 text-sm">
              <a
                href="mailto:hello@smoothrent.com"
                className="text-white/90 hover:text-indigo-600"
              >
                hello@smoothrent.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F8D57E]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-[#F8D57E] flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {year} Smooth Rent. All rights reserved.</div>
          <div>Powered by Smooth Rent</div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
