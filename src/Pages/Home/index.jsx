import React from 'react';
import { Link } from 'react-router-dom';
import { CgHello } from 'react-icons/cg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaAt, FaArrowLeftLong, FaCode, FaMobileScreenButton, FaPalette } from 'react-icons/fa6';
import Particle from '../../Components/Particle';
import heroImage from '../../assets/Images/About-image1.jpg';
import js from '../../assets/TechIcons/Javascript.svg';
import react from '../../assets/TechIcons/React.svg';
import git from '../../assets/TechIcons/Git.svg';
import postman from '../../assets/TechIcons/Postman.svg';
import node from '../../assets/TechIcons/Node.svg';
import next from '../../assets/TechIcons/Next.svg';
import mui from '../../assets/TechIcons/Mui.svg';
import mongo from '../../assets/TechIcons/Mongo.svg';
import redux from '../../assets/TechIcons/Redux.svg';

const skillsData = [
  { id: 1, src: js, alt: 'JavaScript' },
  { id: 2, src: react, alt: 'React' },
  { id: 3, src: git, alt: 'Git' },
  { id: 4, src: postman, alt: 'Postman' },
  { id: 5, src: node, alt: 'Node.js' },
  { id: 6, src: next, alt: 'Next.js' },
  { id: 7, src: mui, alt: 'Material UI' },
  { id: 8, src: mongo, alt: 'MongoDB' },
  { id: 9, src: redux, alt: 'Redux' },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/YOUR_USERNAME_HERE',
    label: 'LinkedIn',
    icon: BsLinkedin,
  },
  {
    href: 'https://github.com/YOUR_USERNAME_HERE',
    label: 'GitHub',
    icon: BsGithub,
  },
  {
    href: 'mailto:you@example.com',
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
    title: 'کاملا واکنش‌گرا',
    description: 'تمام بخش‌ها برای موبایل، تبلت و دسکتاپ از ابتدا طراحی می‌شوند تا تجربه کاربر در هر صفحه ثابت بماند.',
    icon: FaMobileScreenButton,
  },
];

export default function Home() {
  const skillItems = skillsData.map((skill) => (
    <div
      key={skill.id}
      className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
    >
      <img src={skill.src} alt={skill.alt} className="h-10 w-10 object-contain lg:h-12 lg:w-12" title={skill.alt} />
      <span className="text-center text-xs text-gray-400 transition-colors duration-300 group-hover:text-white lg:text-sm">
        {skill.alt}
      </span>
    </div>
  ));

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
                فرانت‌اند دولوپر / UI Designer
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
                      <img src={heroImage} alt="یوسف فرح بخش" className="h-full w-full object-cover" />
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

            <div className="absolute left-[7%] top-1/2 z-20 hidden h-[68%] w-[34%] -translate-y-1/2 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 md:block lg:left-[10%] lg:h-[80%] lg:w-[30%] About1-bg" />
          </div>

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

          <div className="absolute bottom-0 z-40 grid w-full grid-cols-5 items-center gap-y-6 bg-indigo-950 px-8 pb-6 pt-6 lg:flex lg:justify-between lg:px-20 lg:pt-8">
            {skillItems}
          </div>
        </section>

        <div className="flex w-full flex-col items-end justify-center gap-3 bg-indigo-950 px-8 py-10 text-right lg:p-10">
          <h1 className="text-base font-bold text-white lg:text-lg">
            با بروز ترین فریم ورک ها (Full Stack)توسعه دهنده فول استک
          </h1>
          <span dir="rtl" className="max-w-4xl text-sm leading-8 text-white lg:w-[70%] lg:text-base">
            طراح و توسعه‌دهنده وب با تمرکز بر <strong>React.js</strong>، <strong>Next.js</strong>، <strong>MongoDB</strong> و{' '}
            <strong>Tailwind</strong>. با بهره‌گیری از جدیدترین فریم‌ورک‌ها، رابط‌های کاربری زیبا و راه‌حل‌های قدرتمند را
            برای پروژه‌های شما پیاده‌سازی می‌کنم.
          </span>
        </div>
      </div>
    </>
  );
}
