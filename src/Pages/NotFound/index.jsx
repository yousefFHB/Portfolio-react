import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo";

export default function NotFound() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-brand-navy text-white flex items-center justify-center px-6"
      dir="rtl"
    >
      <Seo
        title="صفحه یافت نشد | Yousef Farahbakhsh"
        description="صفحه‌ای که به دنبال آن هستید پیدا نشد. به صفحه اصلی یا پروژه‌ها برگردید."
        noindex={true}
      />

      {/* Background effects */}
      <div className="absolute top-20 right-4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:right-10" />
      <div className="absolute bottom-20 left-4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl sm:left-10" />

      <div className="relative z-10 text-center bg-white/5 border border-white/10 shadow-2xl shadow-black/30 p-8 rounded-[32px] backdrop-blur-xl max-w-lg w-full">

        {/* 404 */}
        <h1 className="text-[8rem] sm:text-[10rem] font-black text-blue-400 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
          صفحه مورد نظر پیدا نشد
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-300 text-sm sm:text-base leading-7">
          احتمالا آدرس را اشتباه وارد کرده‌اید یا صفحه حذف شده است.
          می‌توانید به صفحه اصلی برگردید یا پروژه‌ها را بررسی کنید.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold transition-all duration-300 hover:bg-blue-500"
          >
            بازگشت به صفحه اصلی
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3 rounded-2xl border border-white/15 text-gray-300 hover:bg-white/10 transition-all"
          >
            مشاهده پروژه‌ها
          </Link>

        </div>
      </div>
    </section>
  );
}