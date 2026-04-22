import React from 'react'
import Particle from '../../Components/Particle'
import Type from '../../Components/Type'
import homeLogo from "../../assets/OtherImages/home-main.svg"
import Logo from "../../assets/TechIcons/logo.svg"
export default function About() {
  return (
    <>
      <section  dir="rtl" className=" relative bg-brand-navy h-full w-full z-0">
        {/* Particle Background */}
        <Particle />

        {/* Main Content Container */}
        <div dir="rtl" className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Flex Container: 
        - items-center: Vertically center
        - justify-end: Pushes the first child (Text) to the Right (RTL default)
        - gap-8: Space between them
    */}
          <div className="flex flex-col lg:flex-row items-center justify-end gap-8 lg:gap-12">

            {/* 1. Text Section (Now on the Right) */}
            <div className="w-full lg:w-7/12 home-header text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ paddingBottom: '15px' }}>
                سلام{" "}
                <span 
                  className="animate-wave inline-block"
                  style={{ transformOrigin: 'bottom right' ,fontSize:"20px"}}
                  role="img"
                  aria-label="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 heading-name">
                من <strong className="main-name font-[mosalas] text-blue-600">یوسف فرح بخش هستم</strong>
              </h1>

              {/* Typewriter Section */}
              <div className="p-12 text-right font-bold">
                <Type />
              </div>
            </div>

            {/* 2. Image Section (Now on the Left) */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <img
                src={Logo}
                alt="home pic"
                className="w-full max-w-[450px] h-auto object-contain"
                style={{ maxHeight: "450px"  }}
              />

            </div>

          </div>
        </div>
      </section>

    </>
  )
}
