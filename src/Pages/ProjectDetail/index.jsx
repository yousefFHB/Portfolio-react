import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaArrowLeftLong,
  FaArrowUpRightFromSquare,
  FaCode,
  FaDisplay,
  FaGithub,
  FaLayerGroup,
} from 'react-icons/fa6';
import Particle from '../../Components/Particle';
import Seo from '../../Components/Seo';
import { getProjectBySlug } from '../Projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-brand-navy pt-28 text-white" dir="rtl">
        <Seo
          title="Project Not Found | Yousef Farahbakhsh"
          description="The requested project page could not be found in Yousef Farahbakhsh's portfolio."
          noindex
        />
        <Particle />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-20 sm:px-6 lg:px-8">
          <div className="w-full rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              Project Detail
            </span>
            <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">پروژه موردنظر پیدا نشد</h1>
            <p className="mt-4 leading-8 text-gray-300">
              این آدرس به یکی از پروژه‌های ثبت‌شده متصل نیست. از لیست پروژه‌ها دوباره انتخاب کن.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
              >
                <FaArrowLeftLong className="text-sm" />
                بازگشت به پروژه‌ها
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                بازگشت به خانه
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-navy pt-20 pb-12 text-white sm:pt-28" dir="rtl">
  <Seo
    title={`${project.title} | Yousef Farahbakhsh`}
    description={project.description}
  />
  <Particle />

  <div className="absolute right-0 top-14 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

  <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:gap-10 sm:px-6 lg:px-8">
    
    <div className="flex flex-wrap items-center justify-between gap-4">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:px-5 sm:py-3"
      >
        <FaArrowLeftLong className="text-sm" />
        بازگشت به همه پروژه‌ها
      </Link>

      <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-100 sm:px-4 sm:py-2 sm:text-sm">
        {project.category}
      </span>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      
      <div className="space-y-6 order-2 lg:order-1">
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 sm:px-4 sm:text-sm">
            {project.status}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 sm:px-4 sm:text-sm">
            {project.previewLabel}
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            {project.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:border-indigo-700 hover:scale-105 sm:p-5">
            <div className="flex items-center justify-end gap-2 text-xs text-blue-200 sm:text-sm">
              <FaDisplay />
              Preview
            </div>
            <div className="mt-2 text-base font-semibold text-white sm:text-lg">{project.previewLabel}</div>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:border-indigo-700 hover:scale-105 sm:p-5">
            <div className="flex items-center justify-end gap-2 text-xs text-blue-200 sm:text-sm">
              <FaLayerGroup />
              Stack
            </div>
            <div className="mt-2 text-base font-semibold text-white sm:text-lg">{project.stack.length} تکنولوژی</div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 sm:w-auto"
            >
              <FaArrowUpRightFromSquare className="text-sm" />
              مشاهده پروژه
            </a>
          ) : null}

          {project.repoLink ? (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <FaGithub className="text-base" />
              کد پروژه
            </a>
          ) : null}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-[34px] sm:p-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25`} />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent sm:h-32" />

          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/65 sm:rounded-[28px]">
            {project.video ? (
              <video
                src={project.video}
                poster={project.image}
                className="aspect-[16/10] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={project.title}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/10] w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      
      <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-end gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 sm:h-12 sm:w-12">
            <FaCode className="text-base sm:text-lg" />
          </div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">نکات برجسته پروژه</h2>
        </div>

        <ul className="mt-5 space-y-3 sm:mt-6">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-3 sm:rounded-2xl sm:px-4 sm:py-4">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 sm:h-2 sm:w-2" />
              <span className="text-sm leading-6 text-gray-300 sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

ّ      <div className="space-y-6">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-end gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 sm:h-12 sm:w-12">
              <FaLayerGroup className="text-base sm:text-lg" />
            </div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">تکنولوژی‌های استفاده‌شده</h2>
          </div>

          <div className="mt-5 flex flex-wrap justify-end gap-2 sm:mt-6 sm:gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-gray-200 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 sm:px-4 sm:py-2 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">درباره این صفحه</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300 sm:mt-4 sm:text-base sm:leading-8">
            این صفحه فقط اطلاعات همین پروژه را نشان می‌دهد تا هر کارت در بخش پروژه‌ها مقصد اختصاصی خودش را
            داشته باشد. اگر بعدا خواستی، می‌توانیم برای هر پروژه بخش‌های بیشتری مثل گالری، چالش‌ها یا
            دستاوردها هم اضافه کنیم.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
