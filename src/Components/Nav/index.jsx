import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 bg-white ${isScrolled ? "bg-white/50 backdrop-blur-xl" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">
          Yousef
        </h2>

        <ul className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-quiz">About</Link>
          </li>
          <li>
            <Link to="/quiz">Projects</Link>
          </li>
          <li>
            <Link to="/about">Skills</Link>
          </li>




        </ul>
      </div>
    </div>
  )
}
