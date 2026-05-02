"use client";

import "animate.css";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#FFF7E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate__animated animate__fadeInDown animate__faster inline-flex items-center gap-2 bg-[#FFEDD5] text-[#F97316] px-5 py-2 rounded-full font-semibold mb-6 shadow-md">
              🔥 Hot Summer Deals
            </div>

            <h1 className="animate__animated animate__fadeInLeft animate__slow text-5xl lg:text-7xl font-extrabold leading-tight text-[#0F172A]">
              Summer
              <span className="text-[#FF9F1C] animate-pulse"> Essentials</span>
              <br />
              For Every Adventure
            </h1>

            <p className="animate__animated animate__fadeInLeft animate__delay-1s mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Discover trendy summer collections with exclusive discounts. Stay
              cool, stylish, and ready for sunny days with SunCart.
            </p>

            <div className="animate__animated animate__fadeInUp animate__delay-1s flex flex-wrap gap-4 mt-8">
              <Link href="/products">
                <button className="btn bg-[#FF9F1C] hover:bg-[#FB8500] border-none text-white rounded-full px-8 shadow-lg hover:scale-105 transition-all duration-300">
                  Shop Now
                </button>
              </Link>

              <Link href="/">
                <button className="btn btn-outline border-[#FF9F1C] text-[#FF9F1C] hover:bg-[#FF9F1C] hover:text-white rounded-full px-8 hover:scale-105 transition-all duration-300">
                  View Offers
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-10 mt-10 flex-wrap">
              <div className="animate__animated animate__zoomIn animate__delay-1s">
                <h2 className="text-3xl font-bold text-[#0F172A]">5K+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div className="animate__animated animate__zoomIn animate__delay-2s">
                <h2 className="text-3xl font-bold text-[#0F172A]">50%</h2>
                <p className="text-gray-500">Summer Discounts</p>
              </div>

              <div className="animate__animated animate__zoomIn animate__delay-3s">
                <h2 className="text-3xl font-bold text-[#0F172A]">100+</h2>
                <p className="text-gray-500">New Products</p>
              </div>
            </div>
          </div>

          <div className="relative animate__animated animate__fadeInRight">
            <div className="absolute inset-0 bg-[#FF9F1C]/20 blur-3xl rounded-full animate-pulse"></div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                alt="Summer Banner"
                width={700}
                height={700}
                priority
                className="rounded-[40px] shadow-2xl object-cover h-[500px] hover:scale-[1.02] transition-transform duration-500"
              />

              <div className="absolute -bottom-6 left-6 bg-white p-5 rounded-3xl shadow-xl animate__animated animate__fadeInUp animate__delay-2s hover:-translate-y-1 transition-all duration-300">
                <p className="text-sm text-gray-500">Limited Offer</p>

                <h2 className="text-3xl font-extrabold text-[#FF9F1C]">
                  50% OFF
                </h2>

                <p className="text-gray-600 text-sm">Summer Collection</p>
              </div>

              <div className="absolute top-6 right-6 bg-[#FF6B6B] text-white px-5 py-3 rounded-2xl shadow-lg font-bold text-lg animate-bounce">
                Hot Deals 🔥
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="animate__animated animate__fadeInUp bg-gradient-to-r from-[#FF9F1C] to-[#FB8500] rounded-3xl p-8 text-white shadow-lg hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
            <p className="text-sm uppercase tracking-wider">Summer Sale</p>

            <h2 className="text-4xl font-extrabold mt-2">50% OFF</h2>

            <p className="mt-3 text-white/90">
              On all summer essentials products.
            </p>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-1s bg-gradient-to-r from-[#2EC4B6] to-[#219EBC] rounded-3xl p-8 text-white shadow-lg hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
            <p className="text-sm uppercase tracking-wider">Trending Now</p>

            <h2 className="text-4xl font-extrabold mt-2">Hot Deals</h2>

            <p className="mt-3 text-white/90">
              Grab limited-time exclusive offers.
            </p>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-2s bg-gradient-to-r from-[#FF6B6B] to-[#E63946] rounded-3xl p-8 text-white shadow-lg hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
            <p className="text-sm uppercase tracking-wider">New Arrival</p>

            <h2 className="text-4xl font-extrabold mt-2">Fresh Summer</h2>

            <p className="mt-3 text-white/90">
              Discover the newest seasonal collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
