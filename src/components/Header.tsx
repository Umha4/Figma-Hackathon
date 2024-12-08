"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook, CiHeart, CiSearch, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Left: Contact Info */}
          <div className="hidden md:flex space-x-4">
            <span className="flex items-center gap-2">
              <MdOutlineLocalPhone className="w-[16px] h-[16px]" /> (025) 585-0118
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineMailOutline className="w-[16px] h-[16px]" /> michelle.rivera@example.com
            </span>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-4">
            <p className="hidden md:block">Follow Us for a chance to win 80% off</p>
            <div className="flex space-x-2">
              <a href="#" aria-label="Instagram"><FaInstagramSquare className="w-[20px] h-[20px]" /></a>
              <a href="#" aria-label="YouTube"><AiOutlineYoutube className="w-[20px] h-[20px]" /></a>
              <a href="#" aria-label="Facebook"><CiFacebook className="w-[20px] h-[20px]" /></a>
              <a href="#" aria-label="Twitter"><CiTwitter className="w-[20px] h-[20px]" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-600">Bandage</Link>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Mobile Menu"
            className="lg:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <ul
            className={`lg:flex ${isMobileMenuOpen ? "block" : "hidden"} space-y-4 lg:space-y-0 lg:space-x-8`}
          >
            <li className="relative group">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 flex items-center hover:text-green-600"
              >
                Shop <RiArrowDropDownLine className="ml-1" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                  {["Men", "Women", "Kids", "Products"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {["About", "Blog", "Contact", "Pages"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-green-600"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Links */}
          <div className="flex space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-green-600">Login / Register</Link>
            <Link href="/search" className="text-gray-700 hover:text-green-600">
              <CiSearch className="w-[16px] mt-1 h-[16px]" />
            </Link>
            <Link href="/cart" className="text-gray-700 flex hover:text-green-600">
              <LuShoppingCart className="w-[16px] mt-1 h-[16px]" /><p>1</p>
            </Link>
            <Link href="/wishlist" className="text-gray-700 flex hover:text-green-600">
              <CiHeart className="w-[16px] mt-1 h-[16px]" /><p>1</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
