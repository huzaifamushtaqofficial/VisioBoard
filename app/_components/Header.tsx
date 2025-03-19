"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand Name */}
        <a href="#" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="logo" 
            width={40} 
            height={40} 
            className="cursor-pointer" 
            style={{ width: "auto", height: "auto" }} 
          />
          <span className="text-lg font-semibold text-primary">VisioBoard</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block ml-6">
          <ul className="flex items-center gap-6 text-sm">
            {[
              { name: "Layout", href: "#layout" },
              { name: "Reviews", href: "#Reviews" },
           //   { name: "Pricing", href: "#pricing" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  className="text-black transition hover:text-primary dark:text-white dark:hover:text-primary"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side (Login/Register + Mobile Toggle) */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex sm:gap-4">
            <LoginLink postLoginRedirectURL="/dashboard" className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-600">
              Login
            </LoginLink>
            <RegisterLink className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200 hover:text-primary sm:block dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-gray-300">
              Register
            </RegisterLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-700 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-gray-300"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 bg-white dark:bg-gray-900 shadow-md">
            {[
              { name: "Layout", href: "#layout" },
              { name: "Reviews", href: "#Reviews" },
            //  { name: "Pricing", href: "#pricing" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  className="text-black transition hover:text-primary dark:text-white dark:hover:text-primary"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
