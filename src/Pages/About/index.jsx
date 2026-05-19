import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot, FaPhone, FaTelegram, FaCircleCheck } from 'react-icons/fa6';
import Particle from '../../Components/Particle';
import Type from '../../Components/Type';
import Seo from '../../Components/Seo';
import Logo from '../../assets/TechIcons/logo.svg';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Redux',
  'React Router',
  'HTML5/CSS3',
  'SCSS',
  'Tailwind CSS',
  'Material UI',
  'REST APIs',
  'Git', 'Bootsrap',
];

const roleStrings = [
  'توسعه‌دهنده فرانت‌اند',
  'برنامه نویس React',
  'فری لنسر',
  'برنامه نویس open source',
  'برنامه‌نویس خلاق',
];

const stats = [
  { value: '5+', label: ' مسلط به فریم ورک ها و کتابخانه ها' },
  { value: '6+', label: 'پروژه تکمیل شده' },
  { value: '100%', label: 'طراحی واکنش‌گرا' },
];

const contactItems = [
  { icon: FaEnvelope, label: 'ایمیل', value: 'youseffhbcc@gmail.com', href: 'mailto:youseffhbcc@gmail.com' },
  { icon: FaPhone, label: 'تلفن', value: '09152498291', href: 'tel:+989152498291' },
  { icon: FaTelegram, label: 'تلگرام', value: '@Yousef_fhb', href: 'https://t.me/Yousef_fhb' },
  { icon: FaCircleCheck, label: 'بله', value: '@youseffhb', href: 'https://web.bale.ai/chat?uid=1986923058' },
];


const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yousefFHB', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yousef-farahbakhsh', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/Yousef_fhb', label: 'Telegram' },
];

export default function About() {
  return (
    <section className="relative z-0 min-h-screen overflow-hidden bg-brand-navy pt-28 text-white" dir="rtl">
      <Seo
        title="About Yousef Farahbakhsh | Front-End Developer"
        description="Learn more about Yousef Farahbakhsh, a front-end developer focused on React, responsive UI, modern design, and user-friendly web experiences."
      />
      <Particle className="pointer-events-none hidden md:block !fixed !inset-0 z-0" />

      <div className="absolute top-20 right-4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:right-10" />
      <div className="absolute bottom-20 left-4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl sm:left-10" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              سلام
              <span className="mr-3 inline-block animate-wave" style={{ transformOrigin: 'bottom right' }} role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              من <strong className="text-blue-400">یوسف فرح بخش</strong> هستم
            </h2>

            <div className="mt-5 text-xl font-medium text-gray-200 sm:text-2xl">
              <Type strings={roleStrings} />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0">
              توسعه‌دهنده فرانت‌اندی که به ساخت تجربه‌های کاربری شفاف، سریع و خوش‌ساخت علاقه دارد. دوست دارم ایده‌های
              پیچیده را به رابط‌هایی تبدیل کنم که کاربر با آن‌ها احساس راحتی، سرعت و اعتماد داشته باشد.
            </p>

            <a
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              href="#contact"
              className="mt-8 inline-flex items-center rounded-2xl bg-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              تماس با من
            </a>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-start">
            <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="absolute -top-8 left-8 h-28 w-28 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
              <img
                src={Logo}
                alt="یوسف فرح بخش"
                className="relative z-10 mx-auto h-auto w-full max-w-[320px] object-contain animate-float sm:max-w-[360px]"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center text-3xl font-bold text-white sm:text-4xl">فناوری‌ها و ابزارها</h3>
          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white sm:px-5 sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
            >
              <div className="text-4xl font-bold text-blue-400">{item.value}</div>
              <div className="mt-2 text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>

        <div id="contact" className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">تماس با من</h3>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              اگر برای همکاری، پروژه جدید یا فقط یک گفت‌وگوی دوستانه درباره فرانت‌اند پیام داری، اینجا بهترین نقطه شروع
              است.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 text-right backdrop-blur-2xl sm:p-8">
              <h4 className="text-2xl font-bold text-blue-400">اطلاعات تماس</h4>

              <div className="mt-6 space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    className="flex hover:bg-brand-navy items-center transition-all justify-between gap-4 rounded-2xl border border-white/10 group bg-slate-950/35 px-4 py-4 "
                  >
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{label}</div>
                      <div dir='ltr' className="mt-1 text-sm text-gray-200 sm:text-base">{value}</div>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Icon className="text-lg transition-all group-hover:text-gray-200" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-end gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>


            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-8">
              <h4 className="text-right text-2xl font-bold text-blue-400">ارسال پیام</h4>

              <form className="mt-6 space-y-5 text-right" onSubmit={(event) => event.preventDefault()}>
                <div>
                  <label className="mb-2 block text-gray-300">نام شما</label>
                  <input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-gray-300">ایمیل</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-gray-300">پیام شما</label>
                  <textarea
                    rows="5"
                    placeholder="پیام خود را بنویسید..."
                    className="w-full resize-none rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
                >
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
