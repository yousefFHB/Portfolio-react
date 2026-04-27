import React from 'react';
import { FaArrowLeftLong, FaArrowUpRightFromSquare, FaCode, FaGithub, FaImage } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

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
  image,
  video,
  slug,
}) {
  const hasImage = Boolean(image);
  const hasVideo = Boolean(video);
  const navigate = useNavigate();
  const detailPath = `/projects/${slug}`;

  const handleCardClick = (event) => {
    if (event.target.closest('a')) {
      return;
    }

    navigate(detailPath);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(detailPath);
    }
  };

  const stopCardNavigation = (event) => {
    event.stopPropagation();
  };

  return (
    <article
      className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.08]"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`Open ${title}`}
    >
      <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${accent} p-5 sm:p-6`}>
        <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-black/20 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white/90">
            {category}
          </div>
          <div className="rounded-full bg-black/20 px-3 py-1 text-xs text-white/80">
            {status}
          </div>
        </div>

        <div className="relative z-10 mt-6 overflow-hidden rounded-[26px] border border-white/15 bg-slate-950/40 shadow-xl shadow-slate-950/30">
          <div className="relative aspect-[22/10] overflow-hidden">
            {hasVideo ? (
              <>
                <video
                  src={video}
                  poster={image}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                  Project Preview
                </div>
              </>
            ) : hasImage ? (
              <>
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                  Project Preview
                </div>
              </>
            ) : (
              <div className="relative flex h-full flex-col justify-between bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950 px-5 py-6">
                <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative flex items-center justify-between text-white/70">
                  <span className="text-sm">Preview</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    Image Ready
                  </span>
                </div>

                <div className="relative flex items-center justify-center py-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 text-white/80">
                    <FaImage className="text-2xl" />
                  </div>
                </div>

                <div className="relative space-y-3">
                  <div className="h-3 w-2/3 rounded-full bg-white/20" />
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-4/5 rounded-full bg-white/10" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-slate-950/65 p-4">
            <div className="flex items-center justify-between gap-3 text-white/75">
              <span className="text-xs uppercase tracking-[0.24em]">UI Snapshot</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
                {previewLabel}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap justify-end gap-2">
              {stack.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6 text-right sm:p-7">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
              {status}
            </span>
          
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
          <ul dir='rtl' className="space-y-2 text-gray-300">
            {highlights.map((item) => (
              <li dir='rtl' key={item} className="flex items-start justify-start gap-3">
                 <span dir='rtl' className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                <span>{item}</span>
               
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-end gap-3">
          <Link
            to={detailPath}
            onClick={stopCardNavigation}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
          >
            <FaArrowLeftLong className="text-sm" />
            جزئیات پروژه
          </Link>

          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stopCardNavigation}
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              <FaArrowUpRightFromSquare className="text-sm" />
              مشاهده پروژه
            </a>
          ):(<span></span>)}

          {repoLink ? (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stopCardNavigation}
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
