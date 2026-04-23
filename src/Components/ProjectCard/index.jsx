import React from 'react';
import { FaArrowLeftLong, FaArrowUpRightFromSquare, FaCode, FaGithub, FaLayerGroup } from 'react-icons/fa6';

export default function ProjectCard({
  title,
  category,
  description,
  stack,
  highlights,
  accent,
  status,
  previewLabel,
  liveLink,
  repoLink,
}) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10">
      <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${accent} p-6`}>
        <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-black/20 blur-2xl" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white/90">
            {category}
          </div>
          <div className="rounded-full bg-black/20 px-3 py-1 text-xs text-white/80">
            {status}
          </div>
        </div>

        <div className="relative z-10 mt-8 rounded-[24px] border border-white/15 bg-slate-950/35 p-5 shadow-lg shadow-slate-950/30">
          <div className="flex items-center justify-between text-white/70">
            <span className="text-sm">Preview</span>
            <span className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Front-end Focus
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-3 w-2/3 rounded-full bg-white/25" />
            <div className="h-3 w-full rounded-full bg-white/15" />
            <div className="h-3 w-5/6 rounded-full bg-white/15" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stack.slice(0, 3).map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center text-xs text-white/85"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80">
            {previewLabel}
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6 text-right">
        <div className="space-y-3">
          <div className="flex items-center justify-end gap-2 text-blue-300">
            <FaLayerGroup className="text-sm" />
            <span className="text-sm font-medium">Project Card</span>
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="leading-8 text-gray-300">{description}</p>
        </div>

        <div className="flex flex-wrap justify-end gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm text-gray-200 transition-colors duration-300 group-hover:border-blue-400/40 group-hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
          <div className="flex items-center justify-end gap-2 text-sm font-semibold text-white">
            <FaCode className="text-blue-400" />
            نکات برجسته
          </div>
          <ul className="space-y-2 text-gray-300">
            {highlights.map((item) => (
              <li key={item} className="flex items-start justify-end gap-3">
                <span>{item}</span>
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-end gap-3">
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              <FaArrowUpRightFromSquare className="text-sm" />
              مشاهده پروژه
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 font-semibold text-blue-100">
              <FaArrowLeftLong className="text-sm" />
              آماده اتصال به لینک نمونه کار
            </span>
          )}

          {repoLink ? (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              <FaGithub className="text-base" />
              کد پروژه
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
