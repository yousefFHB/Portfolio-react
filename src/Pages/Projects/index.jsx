import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong, FaCode, FaDisplay, FaMobileScreenButton, FaPaintbrush, FaRocket } from 'react-icons/fa6';
import Particle from '../../Components/Particle';
import ProjectCard from '../../Components/ProjectCard';
import Seo from '../../Components/Seo';
import QuizImage from "../../assets/Images/Quiz.png"
import DashboardImage from "../../assets/Images/Dashboard.png"
import Heartvd from "../../assets/Videos/Heart.mp4"
import Cartvd from "../../assets/Videos/Cart.mp4"
import Dashboardvd from "../../assets/Videos/dashboard.mp4"
import Quizvd from "../../assets/Videos/Quiz.mp4"
import Porschevd from "../../assets/Videos/Porsche.mp4"
import Heart from "../../assets/Images/Heart.png"
import cart from "../../assets/Images/cart.png"
import porsche from "../../assets/Images/Porsche.png"
import bs from "../../assets/Images/BootsTrap.png"

export const projects = [
  {
    title: 'داشبورد مدیریت فروشگاه',
    category: 'React Dashboard',
    slug: 'store-dashboard',
    description:
      'یک پنل مدیریتی مدرن برای کنترل سفارش‌ها، موجودی، گزارش فروش و رفتار کاربران با تمرکز روی سرعت، خوانایی دیتا و تجربه کاربری روان.',
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Chart UI', 'Layout', 'Router'],
    highlights: [
      'طراحی ماژولار برای ویجت‌ها، جدول‌ها و کارت‌های آماری',
      'حالت‌های تعاملی برای فیلتر، جستجو و مدیریت وضعیت سفارش',
      'رابط واکنش‌گرا برای دسکتاپ، تبلت و موبایل',
    ],
    accent: 'from-sky-500 via-blue-600 to-indigo-900',
    status: 'آماده انتشار',
    previewLabel: 'Analytics + Orders + Revenue',
    liveLink: '',
    repoLink: 'https://github.com/yousefFHB/dashboard-react-redux',
    image: DashboardImage,
    video: Dashboardvd

  },
  {
    title: 'برگزاری آزمون ',
    category: 'Quiz App',
    slug: 'quiz-app',
    description:
      'وب اپ برای برگزاری ازمون با قابلیت ساخت ازمون مدنظر برای کاربران دیگر همراه با لاگین', stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive UI', 'Auth'],
    highlights: [
      'در دسترس برای دو زبان فارسی و انگلیسی / همچنین آماده برای ساخت ازمون در هر دو زبان',
      'طراحی سکشن های متفاوت برای ساخت ازمون / شرکت در آزمون و دیدن ازمون ها',
      'استفاده از motion برای ایجاد حس زنده بدون شلوغی',
    ],
    accent: 'from-amber-400 via-orange-500 to-slate-950',
    status: 'مناسب برای دمو',
    previewLabel: 'Quiz + Features + Creating',
    liveLink: '',
    repoLink: 'https://github.com/yousefFHB/React-Quiz-App',
    image: QuizImage,
    video: Quizvd

  },
  {
    title: 'پیش بینی وضعیت بیمار حمله قلبی',
    category: 'ML Heart Disease Prediction',
    slug: 'heart-disease-prediction',
    description:
      'یک پروژه دانشگاهی برمبنای پایتون جاوا اسکریپت برای که براساس داده های بیماران مختلف ، احتمال حمله قلبی آنهارا بررسی میکند',
    stack: ['Python', 'Html', 'JavaScript', ' CSS'],
    highlights: [
      'پیش بینی براساس داده های ورودی',
      'تحلیل داده ها بکمک پایتون',
      'طراحی ظاهری ساده برای تجربه بهتر کاربر',
    ],
    accent: 'from-slate-500 via-indigo-500 to-slate-950',
    status: 'قابل توسعه',
    previewLabel: 'Doctors + Slots + Confirm',
    liveLink: '',
    repoLink: 'https://github.com/yousefFHB/ML-Heart-Disease-Prediction',
    image: Heart,
    video: Heartvd
  },
  {
    title: 'ویترین محصولات فروشگاهی',
    category: 'E-commerce UI',
    slug: 'ecommerce-ui',
    description:
      'رابط کاربری یک فروشگاه مدرن با تمرکز روی نمایش محصول، فیلترهای کاربردی، صفحه جزئیات حرفه‌ای و تجربه خریدی که حس برند را منتقل می‌کند.',
    stack: ['React', 'Router', 'State Management', 'Redux', 'Auth'],
    highlights: [
      ' صفحه لیست کالاها و نمایش آنها در سبد خرید، صقحه جزئیات محصولات',
      'طراحی جزئیات محصول با گالری، ویژگی‌ها و CTA فروش',
      'پشتیبانی از الگوهای UI مناسب برای رشد کاتالوگ',
    ],
    accent: 'from-fuchsia-500 via-violet-600 to-slate-950',
    status: 'نمونه فرانت‌اند',
    previewLabel: 'Catalog + Product Page + Cart',
    liveLink: '',
    repoLink: 'https://github.com/yousefFHB/Login-Fetch-route',
    image: cart,
    video: Cartvd

  },
  {
    title: 'کلون وبسایت پورشه',
    category: 'Porsche.com clone',
    slug: 'porsche-clone',
    description:
      'بازسازی وبسایت پورشه و طراحی ان با sass ',
    stack: ['Js', 'Html', 'sass', 'Smooth-animation'],
    highlights: [
      'طراحی تمیز برای منو و انیمیشن دار',
      'استفاده از flex-box / Grid',
      'تمرکز روی سرعت بارگذاری و خوانایی متن',
    ],
    accent: 'from-amber-400 via-orange-500 to-slate-950',
    status: 'ساختار آماده',
    previewLabel: 'Clone website',
    liveLink: '',
    repoLink: 'https://github.com/yousefFHB/porsche-website-clone',
    image: porsche,
    video: Porschevd

  },
  {
    title: 'وبسایت با bootsrap',
    category: 'Personal Brand',
    slug: 'bootstrap-website',
    description:
      'طراحی وبسایت بکمک bootstrap',
    stack: ['Bootstrap', 'Js', 'Html', 'Responsiv Ui'],
    highlights: [
      'استفاده از کامپوننت های آماده bootsrap',
      'استفاده از اسلایدر ',
      'طراحی ریسپانسیو برای سایزی مختلف',
    ],
    accent: 'from-slate-500 via-indigo-500 to-slate-950',
    status: 'قابل شخصی‌سازی',
    previewLabel: 'Product fetch + Bootstrap',
    liveLink: '',
    repoLink: 'https://github.com/yousefFHB/responsive-product-page-bootstrap',
    image: bs
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

const strengths = [
  {
    title: 'طراحی رابط کاربری',
    description: 'تمرکز روی چیدمان تمیز، رنگ‌بندی حرفه‌ای و کامپوننت‌هایی که از نظر بصری قابل اعتماد باشند.',
    icon: FaPaintbrush,
  },
  {
    title: 'توسعه Responsive',
    description: 'همه پروژه‌ها از ابتدا برای دسکتاپ و موبایل طراحی می‌شوند تا تجربه کاربر در هر دستگاه یکدست باشد.',
    icon: FaMobileScreenButton,
  },
  {
    title: 'پیاده‌سازی سریع',
    description: 'از ساختارهای قابل نگهداری استفاده می‌کنم تا توسعه، تست و اتصال به بک‌اند سریع‌تر پیش برود.',
    icon: FaRocket,
  },
];

const quickStats = [
  { value: '6', label: 'نمونه پروژه' },
  { value: '100%', label: 'رویکرد واکنش‌گرا' },
  { value: 'UI + UX', label: 'تمرکز اصلی پروژه‌ها' },
];

export default function Projects() {

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-navy pt-28 text-white" dir="rtl">
      <Seo
        title="Projects | Yousef Farahbakhsh"
        description="Browse selected front-end projects by Yousef Farahbakhsh, including React dashboards, UI showcases, responsive websites, and web apps."
      />
      <Particle />

      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 space-y-6 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
              <FaDisplay className="text-sm" />
              ویترین پروژه‌های فرانت‌اند
            </span>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                پروژه‌هایی که
                <span className="block text-blue-400">رابط کاربری را به تجربه تبدیل می‌کنند</span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-gray-300">
                این صفحه برای نمایش پروژه‌های فرانت‌اند طراحی شده؛ از داشبوردهای کاربردی گرفته تا لندینگ‌پیج‌های
                مدرن و تجربه‌های تعاملی. ساختار کارت‌ها طوری چیده شده که هم برای نمایش نمونه‌کار فعلی مناسب باشد و هم
                بعدا بتوانی لینک، تصویر و جزئیات واقعی هر پروژه را خیلی راحت به آن اضافه کنی.
              </p>
            </div>

            <div className="flex flex-wrap justify-start gap-3">
              <span className="rounded-full border hover:bg-blue-700 hover:shadow-2xl hover:shadow-gray-600 transition-all border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                React & Next.js
              </span>
              <span className="rounded-full border hover:bg-blue-700 hover:shadow-2xl hover:shadow-gray-600 transition-all border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                Tailwind & MUI
              </span>
              <span className="rounded-full border hover:bg-blue-700 hover:shadow-2xl hover:shadow-gray-600 transition-all border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                Responsive Design
              </span>
              <span className="rounded-full border hover:bg-blue-700 hover:shadow-2xl hover:shadow-gray-600 transition-all border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                Modern UI Systems
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
              >
                درباره من بیشتر بخوان
                <FaArrowLeftLong className="text-sm" />
              </Link>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200">
                <FaCode className="text-blue-300" />
                آماده برای افزودن پروژه‌های واقعی شما
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="absolute -top-10 left-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Front-end Showcase</span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                    Live Layout
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="text-sm text-gray-400">تمرکز اصلی</div>
                    <div className="mt-4 text-2xl font-bold text-white">UI / UX</div>
                    <div className="mt-2 text-sm leading-7 text-gray-300">طراحی تمیز، تعامل نرم و ساختار قابل توسعه</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="text-sm text-gray-400">سبک کلی</div>
                    <div className="mt-4 text-2xl font-bold text-white">Glass + Glow</div>
                    <div className="mt-2 text-sm leading-7 text-gray-300">هماهنگ با استایل هوم و درباره من</div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-blue-950/70 p-6">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>Project Grid</span>
                    <span>Reusable Cards</span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        <div className="h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-400/10 transition-all duration-300 group-hover:scale-105 group-hover:from-blue-500/50 group-hover:to-cyan-400/30" />

                        <div className="mt-3 h-2 w-full rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/40" />
                        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10 transition-all duration-300 group-hover:w-3/4 group-hover:bg-white/20" />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
            >
              <div className="text-3xl font-bold text-blue-400">{item.value}</div>
              <div className="mt-2 text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">پروژه‌های منتخب</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              هر کارت به شکلی طراحی شده که بتواند عنوان، توضیح، استک تکنولوژی و نکات کلیدی پروژه را با ظاهر حرفه‌ای نمایش
              دهد. وقتی پروژه‌های نهایی‌ات را مشخص کنی، فقط کافی است دیتا و لینک‌ها را جایگزین کنیم.
            </p>
          </div>

          <div className="relative mt-10 grid gap-8 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white">تکنولوژی‌های مورد استفاده</h3>

            <div className="mt-8 space-y-3 text-gray-200">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                توسعه رابط کاربری مدرن با <strong>React</strong> و مدیریت وضعیت پیشرفته با <strong>Redux</strong>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                مسیریابی حرفه‌ای صفحات با <strong>React Router</strong> و ساختار ماژولار
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                طراحی responsive و زیبا با ترکیب <strong>Bootstrap</strong>، <strong>Sass</strong>، <strong>HTML</strong> و <strong>CSS</strong>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                پیاده‌سازی منطق سمت کلاینت با <strong>JavaScript</strong> و بهینه‌سازی عملکرد
              </div>
            </div>
          </div>


          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
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
                <p className="mt-4 leading-8 text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
