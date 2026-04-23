import React from 'react';
import Particle from '../../Components/Particle';
import Type from '../../Components/Type';
import Logo from '../../assets/TechIcons/logo.svg';

export default function About() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux',
    'React Router', 'HTML5/CSS3', 'SCSS', 'Tailwind CSS',
    'Material-UI (MUI)', 'REST APIs', 'Git'
  ];

  // Persian strings for the typing animation – pass to <Type /> as a prop.
  const roleStrings = [
    'توسعه‌دهنده فرانت‌اند',
    'متخصص ری‌اکت',
    'عاشق طراحی رابط کاربری',
    'برنامه‌نویس خلاق'
  ];

  return (
    <>
      <section
        className="relative bg-brand-navy min-h-screen w-full z-0 overflow-hidde"
        dir="rtl"
      >
        <Particle  />
        <div> <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Right side (visually) in RTL: Text content */}
            <div className="w-full lg:w-7/12 text-center lg:text-right animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                سلام{' '}
                <span
                  className="inline-block animate-wave"
                  style={{ transformOrigin: 'botto65right', fontSize: '2rem' }}
                  role="img"
                  aria-label="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-name text-white">
                من <strong className="main-name text-blue-400">یوسف فرح بخش</strong> هستم
              </h2>

              <div className="text-xl md:text-2xl font-medium text-gray-200 mb-6">
                <Type strings={roleStrings} />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                توسعه‌دهنده فرانت‌اند، علاقه‌مند به ساخت رابط‌های کاربری زیبا،
                واکنش‌گرا و با کارایی بالا. دوست دارم مسائل پیچیده را به
                تجربه‌های ساده و شهودی تبدیل کنم.
              </p>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تماس با من ←
              </a>
            </div>

            {/* Left side (visually) in RTL: Animated image */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <img
                src={Logo}
                alt="یوسف فرحبخش"
                className="w-full max-w-[400px] h-auto object-contain animate-float"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-24 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              فناوری‌ها و ابزارها
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-tag px-5 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full text-gray-200 font-medium cursor-default transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:text-white shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/65 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400">۳+</div>
              <div className="text-gray-300 mt-2">سال تجربه</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/65 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400">۲۰+</div>
              <div className="text-gray-300 mt-2">پروژه تکمیل شده</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/65 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400">۱۰۰٪</div>
              <div className="text-gray-300 mt-2">طراحی واکنش‌گرا</div>
            </div>
          </div>
        </div></div>

        {/* Floating decoration (optional cool animation) */}
       
      </section>
    </>
  );
}