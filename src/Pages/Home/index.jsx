import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgHello } from 'react-icons/cg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaAt, FaArrowLeftLong, FaCode, FaMobileScreenButton, FaPalette } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Particle from '../../Components/Particle';
import js from '../../assets/TechIcons/Javascript.svg';
import react from '../../assets/TechIcons/React.svg';
import git from '../../assets/TechIcons/Git.svg';
import postman from '../../assets/TechIcons/Postman.svg';
import node from '../../assets/TechIcons/Node.svg';
import next from '../../assets/TechIcons/Next.svg';
import mui from '../../assets/TechIcons/Mui.svg';
import mongo from '../../assets/TechIcons/Mongo.svg';
import redux from '../../assets/TechIcons/Redux.svg';
import router from "../../assets/TechIcons/react-router-svgrepo-com.svg"
import ts from "../../assets/TechIcons/Typescript.svg"
import tailwind from "../../assets/TechIcons/Tailwind.svg"
import html from "../../assets/TechIcons/html5-svgrepo-com.svg"
import css from "../../assets/TechIcons/css-3-svgrepo-com.svg"
import bootstrap from "../../assets/TechIcons/bootstrap-svgrepo-com.svg"
import scss from "../../assets/TechIcons/scss-svgrepo-com.svg"


const skillsData = [
  { id: 1, src: js, alt: 'JavaScript' },
  { id: 2, src: ts, alt: 'TypeScript' },
  { id: 3, src: html, alt: 'Html' },
  { id: 4, src: css, alt: 'Css' },
  { id: 5, src: scss, alt: 'Scss' },
  { id: 6, src: tailwind, alt: 'Tailwind' },
  { id: 7, src: bootstrap, alt: 'Bootstrap' },
  { id: 8, src: react, alt: 'React' },
  { id: 9, src: git, alt: 'Git' },
  { id: 10, src: postman, alt: 'Postman' },
  { id: 11, src: node, alt: 'Node.js' },
  { id: 12, src: next, alt: 'Next.js' },
  { id: 13, src: mui, alt: 'Material UI' },
  { id: 14, src: mongo, alt: 'MongoDB' },
  { id: 15, src: redux, alt: 'Redux' },
  { id: 16, src: router, alt: 'Router' },

];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/yousef-farahbakhsh',
    label: 'LinkedIn',
    icon: BsLinkedin,
  },
  {
    href: 'https://github.com/yousefFHB',
    label: 'GitHub',
    icon: BsGithub,
  },
  {
    href: 'youseffhbcc@gmail.com',
    label: 'Email',
    icon: FaAt,
  },
];

const strengths = [
  {
    title: 'طراحی رابط کاربری دقیق',
    description: 'ساخت لایه‌بندی تمیز، سلسله‌مراتب بصری درست و کامپوننت‌هایی که حس حرفه‌ای بودن را منتقل می‌کنند.',
    icon: FaPalette,
  },
  {
    title: 'توسعه فرانت‌اند مدرن',
    description: 'پیاده‌سازی سریع با React و Next.js با ساختاری که بعدا هم نگهداری و توسعه آن راحت باشد.',
    icon: FaCode,
  },
  {
    title: 'کاملا responsive',
    description: 'تمام بخش‌ها برای موبایل، تبلت و دسکتاپ از ابتدا طراحی می‌شوند تا تجربه کاربر در هر صفحه ثابت بماند.',
    icon: FaMobileScreenButton,
  },
];

const optionalHeroImageSrc = `${import.meta.env.BASE_URL}About-image1.jpg`;

function HeroImagePlaceholder({ className = '' }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6 text-center text-white ${className}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/15 bg-white/10 text-2xl font-semibold tracking-[0.2em] text-blue-100">
        YF
      </div>
      <h3 className="mt-6 text-2xl font-bold">Portfolio Preview</h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-blue-100/85">
        Add <span className="font-semibold text-white">public/About-image1.jpg</span> to show your personal image here.
      </p>
    </div>
  );
}


export default function Home() {
  const [heroImageStatus, setHeroImageStatus] = useState('checking');

  useEffect(() => {
    // تلاش برای لود کردن تصویر به صورت داینامیک
    const image = new Image();
    image.onload = () => {
      setHeroImageStatus('ready');
    };

    image.onerror = () => {
      setHeroImageStatus('missing');
    };

    image.src = optionalHeroImageSrc;
  }, []);
  
  const hasHeroImage = heroImageStatus === 'ready';

  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy pt-28 text-white md:hidden" dir="rtl">
        <Particle />

        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-14 px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
                Front-end developer  / UI Designer
              </span>

              <div className="space-y-5">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  سلام، من
                  <span className="block text-blue-400">یوسف فرح بخش</span>
                  هستم
                </h1>

                <p className="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                  توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری مدرن، سریع و خوش‌ساخت. برای من ظاهر خوب فقط
                  کافی نیست؛ تجربه کاربر، واکنش‌گرایی و تمیزی ساختار کد هم به همان اندازه مهم است.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
                >
                  مشاهده پروژه‌ها
                  <FaArrowLeftLong className="text-sm" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-100 transition-all duration-300 hover:bg-white/10"
                >
                  درباره من
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                    aria-label={label}
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="relative mx-auto max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
                <div className="absolute -top-8 right-8 h-28 w-28 rounded-full bg-blue-400/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40">
                  <div className="grid gap-0">
                    <div className="min-h-[280px]">
                      {hasHeroImage ? (
                        <img src={optionalHeroImageSrc} alt="یوسف فرح بخش" className="h-full w-full object-cover" />
                      ) : (
                        <HeroImagePlaceholder />
                      )}
                    </div>

                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                      <div>
                        <div className="text-sm text-gray-400">Front-end Focus</div>
                        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">تجربه‌هایی که خوب دیده می‌شوند</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                          از لندینگ‌پیج‌های مدرن تا داشبوردهای مدیریتی، هدف من ساخت رابط‌هایی است که هم زیبا باشند و هم
                          استفاده از آن‌ها ساده و روان باشد.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-gray-200">
                          UI Systems
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-gray-200">
                          Responsive
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-gray-200">
                          Motion
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-gray-200">
                          Clean Code
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {strengths.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-end gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-300 sm:text-base">{description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-2xl sm:p-8">
            <div className="space-y-6 text-right">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">استک من برای ساخت رابط‌های مدرن</h2>
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  با استفاده از ابزارهای به‌روز فرانت‌اند، رابط‌هایی طراحی و پیاده‌سازی می‌کنم که هم از نظر بصری قوی
                  باشند و هم از نظر توسعه‌پذیری، عملکرد و تجربه کاربری استاندارد باقی بمانند.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {skillsData.map((skill) => (
                  <div
                    key={skill.id}
                    className="group flex flex-col items-center justify-center gap-3 rounded-[24px] border border-white/10 bg-white/5 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10"
                  >
                    <img src={skill.src} alt={skill.alt} className="h-12 w-12 object-contain sm:h-14 sm:w-14" title={skill.alt} />
                    <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">
                      {skill.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <section className="relative h-[calc(100vh-2rem)] min-h-[760px] overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-brand-navy)] clip-left z-10">
            <Particle />

            <div className="absolute left-[7%] top-1/2 z-20 hidden h-[68%] w-[34%] -translate-y-1/2 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 md:block lg:left-[10%] lg:h-[80%] lg:w-[30%] overflow-hidden">
              {hasHeroImage ? (
                // حالت اول: نمایش تصویر اصلی
                <img
                  src={optionalHeroImageSrc}
                  alt="About Hero"
                  className="w-full h-full object-contain"
                />
              ) : (
                // حالت دوم: نمایش دمو (جایگزین)
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 text-center">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">تصویر موجود نیست</h3>
                  <p className="text-sm opacity-90">برای نمایش تصویر شخصی، فایل About-image1.jpg را داخل پوشه public قرار دهید.</p>
                </div>
              )}
            </div>          </div>

          <div className="absolute inset-0 bg-gray-300 clip-right z-20">
            <div
              dir="rtl"
              className="relative z-30 flex h-full w-full flex-col items-start justify-center gap-5 px-10 text-[var(--color-brand-navy)] md:top-[-8%] md:p-10 lg:top-[-12%] lg:p-20"
            >
              <h4 className="mb-2 flex items-center gap-2 text-lg font-bold lg:text-xl">
                <CgHello className="text-2xl" />
                سلام من
              </h4>
              <div>
                <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
                  <span className="text-indigo-900">یوسف فرح بخش</span> هستم
                </h1>
                <p className="text-base font-bold opacity-40 lg:text-lg">Front-end Developer / Ui Designer</p>
              </div>
              <span className="flex items-center justify-between gap-4 lg:gap-5">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="rounded-lg bg-gray-400/60 p-3 text-black shadow-xl shadow-gray-500/50 transition-colors duration-300 hover:bg-brand-navy hover:text-gray-300"
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </span>
            </div>
          </div>
          {/* add swiper for the div below  */}

          <div className="absolute bottom-0 z-40 w-full bg-indigo-950 px-8 pb-6 pt-6 lg:px-20 lg:pt-8">
            <div >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={14}
                slidesPerView={7}
                loop={true}
                autoplay={{

                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  },
                  900: {
                    slidesPerView: 5,
                  },
                  1100: {
                    slidesPerView: 6,
                  },
                }}
              >
                {skillsData.map((skill) => (
                  <SwiperSlide key={skill.id}>
                    <div className="group flex flex-col items-center gap-2 py-2 transition-transform duration-300 hover:scale-110">
                      <img
                        src={skill.src}
                        alt={skill.alt}
                        className="h-11 w-11 object-contain"
                        title={skill.alt}
                      />
                      <span className="text-center text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                        {skill.alt}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>


          </div>
        </section>

        <div className="bg-brand-navy px-8 pb-20 pt-16 text-white lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="grid gap-5 lg:grid-cols-3">
              {strengths.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
                >
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Icon className="text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-8 text-gray-300 lg:text-base">{description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-2xl lg:p-8">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div className="space-y-4 text-right">
                  <h2 className="text-3xl font-bold text-white lg:text-4xl">استک من برای ساخت رابط‌های مدرن</h2>
                  <p className="text-base leading-8 text-gray-300 lg:text-lg">
                    با استفاده از ابزارهای به‌روز فرانت‌اند، رابط‌هایی طراحی و پیاده‌سازی می‌کنم که هم از نظر بصری قوی
                    باشند و هم از نظر توسعه‌پذیری، عملکرد و تجربه کاربری استاندارد باقی بمانند.
                  </p>
                </div>
                <div className="space-y-5 text-right">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <h3 className="text-xl font-bold text-white">درباره من</h3>
                    <p className="mt-3 leading-8 text-gray-300">
                      من یوسف فرح بخش هستم، توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری مدرن، تمیز و
                      قابل توسعه. بیشتر از هر چیز به این علاقه دارم که طراحی خوب را به تجربه‌ای سریع، روان و کاربردی
                      تبدیل کنم.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <h4 className="text-lg font-bold text-blue-400">تمرکز اصلی من</h4>
                      <p className="mt-3 text-sm leading-8 text-gray-300">
                        توسعه پروژه‌های React و Next.js، طراحی رابط‌های responsive و ساخت کامپوننت‌هایی که هم زیبا
                        باشند و هم در پروژه‌های واقعی قابل نگهداری بمانند.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <h4 className="text-lg font-bold text-blue-400">شیوه کاری من</h4>
                      <p className="mt-3 text-sm leading-8 text-gray-300">
                        سعی می‌کنم در هر پروژه بین ظاهر حرفه‌ای، تجربه کاربر، ساختار تمیز کد و آمادگی برای توسعه‌های
                        بعدی تعادل برقرار کنم.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-slate-900/40 p-5">
                    <h4 className="text-lg font-bold text-white">چیزی که در کار من مهم است</h4>
                    <div className="mt-4 grid gap-3 text-sm text-gray-300">
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        طراحی رابط کاربری با جزئیات دقیق و ظاهر حرفه‌ای
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        تجربه کاربری روان در موبایل، تبلت و دسکتاپ
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        کدنویسی تمیز و ساختار مناسب برای رشد پروژه
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
