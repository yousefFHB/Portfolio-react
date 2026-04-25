import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaEnvelope  } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer dir="rtl" className="bg-brand-navy border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right">
          {/* Brand & description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">یوسف فرح بخش</h3>
            <p className="text-gray-400 leading-relaxed">
              توسعه‌دهنده فرانت‌اند، متخصص React و Next.js.  
              ساخت رابط‌های کاربری مدرن، سریع و واکنش‌گرا.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  پروژه‌ها
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  درباره من
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  تماس با من
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">شبکه‌های اجتماعی</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://github.com/yousefFHB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/yousef-farahbakhsh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://t.me/Yousef_fhb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="text-lg" />
              </a>
              <a
                href="https://web.bale.ai/youseffhb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="bale"
              >
                <FaCircleCheck className="text-lg" />
              </a>
              <a
                href="mailto:youseffhbcc@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © {currentYear} یوسف فرح بخش — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}