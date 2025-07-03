"use client";
import React, { useState, useEffect, useRef } from "react";
import ToggleButton from "./misc/AnimatedHamburger";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "@/contexts/AuthContext";

function Navbar() {
  const navLinks = [
    { name: "About", link: "about" },
    { name: "Register  interest", link: "register-interest" },
    { name: "Contact", link: "contact" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, logout, isLoading } = useAuth();

  useEffect(() => {
    if (!menuRef.current) return;
    if (toggleMenu) {
      gsap.set(menuRef.current, { display: "flex", y: "-100%", opacity: 0 });
      gsap.to(menuRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
        pointerEvents: "none",
        onComplete: () => {
          if (menuRef.current) gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [toggleMenu]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 mt-6 ">
      <div className="mx-auto w-full md:w-[90%] lg:w-[75%] px-4">
        <nav className="flex items-center justify-between py-3 px-4 rounded-3xl backdrop-blur-md ">
          {/* Left - Logo */}
          <div className="flex-1">
            <p className="font-bold text-lg">
              <Link href="/">
                Greg <i>the AI</i>
              </Link>
            </p>
          </div>
          {/* Center - Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex flex-row gap-8 items-center">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:cursor-pointer whitespace-nowrap"
                >
                  <ScrollLink
                    to={link.link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    // offset={-70}
                    activeClass="bg-gray-400 text-black"
                    className={`px-4 py-2 rounded transition-all duration-300 hover:bg-gray-600 hover:text-black`}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Right - Toggle + Sign In/Out */}
          <div className="flex-1 flex justify-end gap-4 items-center">
            <div className="hidden md:block">
              {!isLoading &&
                (isAuthenticated ? (
                  <Button
                    className="bg-transparent hover:bg-gray-600"
                    onClick={logout}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Button className="bg-transparent hover:bg-gray-600" asChild>
                    <a href="/signin">Sign In</a>
                  </Button>
                ))}
            </div>
            {/* Mobile menu trigger */}
            <div className="md:hidden z-[60] relative">
              <div className="flex flex-row gap-3 items-center">
                <ToggleButton
                  isOpen={toggleMenu}
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="md:hidden fixed inset-0 h-dvh bg-white/50 backdrop-blur-3xl shadow-lg z-[70] flex-col items-center justify-center"
        style={{ display: "none" }}
      >
        {/* Hamburger at top right */}
        <div className="absolute top-6 right-4 md:right-[10%] lg:right-[25%] z-[80]">
          <div className="flex flex-row gap-3 items-center">
            <ToggleButton
              isOpen={toggleMenu}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>
        </div>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className="text-3xl">
              <ScrollLink
                to={link.link}
                smooth={true}
                onClick={() => setToggleMenu(false)}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
          <li className="text-3xl">
            {!isLoading &&
              (isAuthenticated ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    setToggleMenu(false);
                    logout();
                  }}
                >
                  Sign Out
                </Button>
              ) : (
                <Button variant="outline" asChild>
                  <a href="/signin" onClick={() => setToggleMenu(false)}>
                    Sign In
                  </a>
                </Button>
              ))}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
