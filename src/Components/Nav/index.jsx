import React from 'react'
import { useEffect, useState } from 'react';
import { CgHome } from 'react-icons/cg';
import { Link,useLocation } from "react-router-dom"
import { CgGitFork } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location=useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <header className={` w-full fixed top-0 z-100  shadow-lg  transition-all duration-300 ${isScrolled ? "backdrop-blur-md " : "none"} `} style={{
      // Optional: Add a very subtle shadow only when scrolled, 
      // but keep background transparent
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      {/* Top bar */}
      <div dir='rtl' className=" w-full px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
         <Link to="/"> <span
            className={`
      text-3xl font-[pen] 
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
        <nav className="hidden md:flex items-center gap-10 text-sm font-extrabold text-gray-300">
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
            onClick={() => window.open("https://github.com/soumyajit4419/Portfolio", "_blank")}
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


      </div>
    </header>
  )
}
