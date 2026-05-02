"use client";

import Link from "next/link";
import {  FaHome } from "react-icons/fa";
const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#FFF7E8] flex items-center justify-center px-6 py-10 overflow-hidden">
      <div className="relative max-w-2xl w-full bg-white rounded-4xl shadow-2xl p-10 text-center border border-orange-100">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF9F1C]/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FB8500]/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-8xl md:text-9xl font-extrabold text-[#FF9F1C] animate-pulse">
            404
          </h1>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#0F172A]">
            Page Not Found
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <button className="cursor-pointer flex items-center gap-2 bg-[#FF9F1C] hover:bg-[#FB8500] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                <FaHome />
                Back Home
              </button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            SunCart • Modern Summer Essentials Store
          </p>
        </div>
      </div>
    </div>
    );
};

export default NotFoundPage;