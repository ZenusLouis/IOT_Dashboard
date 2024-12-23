"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      href: "/",
      label: "Bảng Điều Khiển",
      active: pathname === "/",
    },
    {
      href: "/settings",
      label: "Cài Đặt",
      active: pathname === "/settings",
    },
  ];

  return (
    <div className="border-b bg-white dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav
        className={cn(
          "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/leaflet/images/VVP.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Links (Large Screen Only) */}
          <div className="hidden lg:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 hover:text-primary",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                )}
              >
                {route.label}
                {/* Active Underline */}
                {route.active && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black dark:bg-white"></span>
                )}
              </Link>
            ))}
          </div>
        </div>


        {/* Right Section: Hamburger and Icon */}
        <div className="flex items-center space-x-4">
          {/* Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 dark:bg-gray-800 float-left">
          <div className="flex flex-col items-start space-y-4 px-4 py-4 z-10">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNav;
