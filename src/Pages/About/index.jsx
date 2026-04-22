import React from 'react'
import { CgHello } from 'react-icons/cg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaAt } from 'react-icons/fa'
export default function About() {
  return (
    <>
      <section className="relative h-screen ">

        {/* 1. Left Section (Navy) */}
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] clip-left z-10">

          <div className="
    absolute 
    top-1/2 left-[10%] 
    -translate-y-1/2 
    w-[30%] h-[80%] 
    About1-bg 
    rounded-2xl 
    shadow-lg 
    z-20
  ">
            {/* Optional: Add content inside if needed */}
          </div>
        </div>



        {/* 2. Right Section (Orange/Dark) */}
        {/* Changed bg-gray-300 to a darker color for better text visibility */}
        <div className="absolute inset-0 bg-gray-300 clip-right z-20">

          {/* Text Container: Added relative positioning and higher z-index */}
          <div dir='rtl' className="relative z-30 flex flex-col gap-5 justify-center items-start text-[var(--color-brand-navy)] h-full top-[-12%] w-full p-10">
            <h4 className="text-xl gap-1 flex font-bold mb-2"> سلام من </h4>
            <div>
              <h1 className="text-4xl font-bold mb-4">یوسف فرح بخش هستم</h1>
              <p className="  text-lg font-bold opacity-40">Front-end Developer / Ui Designer</p>
            </div>
            <span className='flex justify-between gap-5 items-center'> <a
              href="https://www.linkedin.com/in/YOUR_USERNAME_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-300 hover:bg-brand-navy p-3 rounded-lg shadow-xl shadow-gray-500/50 bg-gray-400/60 transition-colors duration-300"
              aria-label="Visit my LinkedIn profile"
            >
              <BsLinkedin size={24} />
            </a>
              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300 hover:bg-brand-navy p-3 rounded-lg shadow-xl shadow-gray-500/50 bg-gray-400/60 transition-colors duration-300"
                aria-label="Visit my LinkedIn profile"
              >
                <BsGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300 hover:bg-brand-navy p-3 rounded-lg shadow-xl shadow-gray-500/50 bg-gray-400/60 transition-colors duration-300"
                aria-label="Visit my LinkedIn profile"
              >
                <FaAt size={24} />
              </a>
            </span>
          </div>
        </div>
        <div className="absolute bottom-0  w-full h-1/9 bg-zinc-900 z-40">
        
      </div>





      </section>
      <div className="  w-full h-1/8 bg-zinc-900 flex flex-col gap-2 z-40 items-end justify-center pt-15 p-10">
        <h1 className='text-white text-lg font-bold text-right'>با بروز ترین فریم ورک ها (Full Stack)توسعه دهنده فول استک </h1>
        <span dir='rtl' className="text-white w-[70%]">
          طراح و توسعه‌دهنده وب با تمرکز بر <strong>React.js</strong>، <strong>Next.js</strong>، <strong>MongoDB</strong> و <strong>Tailwind</strong>. با بهره‌گیری از جدیدترین فریم‌ورک‌ها، رابط‌های کاربری زیبا و راه‌حل‌های قدرتمند را برای پروژه‌های شما پیاده‌سازی می‌کنم.
        </span>
      </div>

    </>
  )
}
