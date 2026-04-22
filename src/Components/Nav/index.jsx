import React from 'react'
import { useEffect, useState } from 'react';
import { CgHome } from 'react-icons/cg';
import { Link } from "react-router-dom"

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <header className=" sticky top-0 z-50 bg-background/80 backdrop-blur-md  shadow-lg  transition-all duration-300" style={{ boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none' }}>
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className={`
      text-3xl font-[mosalas] 
      cursor-pointer rounded-lg p-2 
      transition-all duration-300 
      hover:bg-[var(--color-brand-navy)] hover:text-white
      ${isScrolled ? 'text-white' : 'text-[var(--color-brand-navy)]'}
    `}
          >
            یوسف فرح بخش
          </span>
        </div>



        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-extrabold text-[var(--color-brand-navy)]/70">
          <Link
            to="/"
            className="relative hover:text-[var(--color-brand-navy)] transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-brand-navy)] hover:after:w-full after:transition-all"
          >
            خانه
          </Link>

          <Link
            to="/projects"
            className="relative hover:text-[var(--color-brand-navy)] transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-brand-navy)] hover:after:w-full after:transition-all"
          >
            پروژه ها
          </Link>

          <Link
            to="/about"
            className="relative hover:text-[var(--color-brand-navy)] transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-brand-navy)] hover:after:w-full after:transition-all"
          >
            درباره من
          </Link>
        </nav>


      </div>
    </header>
  )
}
