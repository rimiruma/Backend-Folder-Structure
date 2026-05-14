"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topBarLinks = [
    { name: "SAVE MORE ON APP", href: "#" },
    { name: "SELL ON DARAZ", href: "#" },
    { name: "ADD PRODUCT", href: "/add-product" },
    { name: "HELP & SUPPORT", href: "#" },
    { name: "LOGIN", href: "#" },
    { name: "SIGN UP", href: "#" },
    { name: "EN | বাংলা", href: "#" },
  ];

  const categories = [
    "Groceries",
    "Electronics",
    "Fashion",
    "Home & Lifestyle",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
  ];

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-sm">
      {/* Top Header Bar */}
      <div className="bg-[#F85606] text-white text-xs py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end gap-6">
          {topBarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-gray-200 transition-colors tracking-wide font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-[#F85606] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* Using a text logo as a placeholder for Daraz logo */}
            <span className="text-[#F85606] text-3xl font-bold tracking-tighter">Daraz</span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-3xl ml-8">
            <div className="flex w-full rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="Search in Daraz"
                className="w-full bg-transparent px-4 py-2.5 outline-none text-gray-700 text-sm border-none transition-colors"
              />
              <button className="bg-[#F85606] hover:bg-[#d94a05] text-white px-6 py-2.5 transition-colors flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link href="#" className="relative text-gray-700 hover:text-[#F85606] transition-colors p-2">
              <ShoppingCart size={28} />
              <span className="absolute top-0 right-0 bg-[#F85606] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pt-3 pb-1">
          <div className="flex w-full rounded-md overflow-hidden bg-gray-100">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full bg-transparent px-4 py-2 outline-none text-gray-700 text-sm"
            />
            <button className="bg-[#F85606] text-white px-4 py-2 flex items-center justify-center">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation (Desktop) */}
      <div className="bg-white border-t border-gray-100 hidden md:block shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between py-2.5 text-sm text-gray-600">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="hover:text-[#F85606] transition-colors px-2 py-1 block font-medium"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="block text-gray-700 py-1 font-medium hover:text-[#F85606]">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-100 pt-5">
              <ul className="space-y-4">
                {topBarLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="block text-gray-700 text-sm font-medium hover:text-[#F85606]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
