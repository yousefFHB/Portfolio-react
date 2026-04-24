import React from 'react'
import { useEffect, useState } from 'react';
import { CgHome } from 'react-icons/cg';
import { Link,useLocation } from "react-router-dom"
import { CgGitFork } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location=useLocation();
  const isAboutPage = location.pathname === '/about' || location.pathname === '/projects';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  return (

    <header className={` w-full fixed top-0 z-100  shadow-lg  transition-all duration-300 ${isScrolled ? "backdrop-blur-md " : "none"} `} style={{
      // Optional: Add a very subtle shadow only when scrolled, 
      // but keep background transparent
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      {/* Top bar */}
      <div dir='rtl' className="w-full px-4 py-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
         <Link to="/"> <span
            className={`
      text-2xl sm:text-3xl font-[pen] 
      cursor-pointer rounded-2xl px-5 
      transition-all duration-300 
      hover:bg-[var(--color-brand-navy)] 
      ${isAboutPage ? 'text-gray-300 hover:bg-gray-300  hover:text-brand-navy': 'hover:text-white'}
      
      
    `}
          >
            یوسف فرح بخش
          </span></Link>
        </div>



        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-extrabold text-gray-300">
          <Link
            to="/"
            className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-full after:transition-all"
          >
            خانه
          </Link>

          <Link
            to="/projects"
            className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-full after:transition-all"
          >
            پروژه ها
          </Link>

          <Link
            to="/about"
            className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-full after:transition-all"
          >
            درباره من
          </Link>
          <button
            onClick={() => window.open("https://github.com/yousefFHB/Portfolio-react.git", "_blank")}
            className="
    group
    flex
    items-center
    justify-center
    gap-2
    text-[1.1em]
    font-bold
    text-white
    bg-purple
    hover:bg-dark-purple
    border border-dark-purple
    rounded-2xl
    px-4.5 py-2.5
    transition-all
    duration-300
    ease-in-out
    hover:-translate-y-0.5
    hover:shadow-lg
    cursor-pointer
    overflow-hidden
  "
          >
            <CgGitFork className="text-white" />
            <AiFillStar className="text-white" />
          </button>


        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaXmark className="text-xl" /> : <FaBarsStaggered className="text-lg" />}
        </button>

      </div>

      <div
        className={`md:hidden fixed inset-0 top-[76px] bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        dir="rtl"
        className={`md:hidden absolute left-4 right-4 top-[76px] rounded-[28px] border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2 text-right text-gray-200">
          <Link
            to="/"
            className="rounded-2xl bg-white/5 px-4 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            خانه
          </Link>
          <Link
            to="/projects"
            className="rounded-2xl bg-white/5 px-4 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            پروژه ها
          </Link>
          <Link
            to="/about"
            className="rounded-2xl bg-white/5 px-4 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            درباره من
          </Link>
          <button
            onClick={() => window.open("https://github.com/yousefFHB/Portfolio-react.git", "_blank")}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 font-bold text-white transition-all duration-300 hover:bg-blue-500"
          >
            <CgGitFork className="text-white" />
            <AiFillStar className="text-white" />
            مشاهده ریپازیتوری
          </button>
        </nav>
      </div>
    </header>
  )
}
