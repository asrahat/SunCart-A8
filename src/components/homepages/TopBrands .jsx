"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    brand: "SunShade",
    title: "50% OFF Summer Sale",
    desc: "Premium sunglasses collection",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    brand: "BeachWalk",
    title: "Hot Summer Deals 🔥",
    desc: "Comfortable beach essentials",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    brand: "CoolBreeze",
    title: "Stay Cool This Summer",
    desc: "Portable cooling products",
  },
];
const TopBrands = () => {
       const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);


  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);


  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };


  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }
  };

  return (
          <div
      className="relative w-full h-[500px] my-5 overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
  
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            current === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="slider"
            fill
            className="w-full h-full object-cover"
          />

   
          <div className="absolute inset-0 bg-black/40"></div>

     
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

            <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white p-8 rounded-3xl shadow-2xl">

              <p className="text-sm uppercase tracking-widest opacity-80">
                {slide.brand}
              </p>

              <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
                {slide.title}
              </h1>

              <p className="mt-3 text-white/80">
                {slide.desc}
              </p>

              <button className="mt-6 bg-[#FF9F1C] hover:bg-[#FB8500] px-6 py-2 rounded-full font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

    
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-[#FF9F1C] scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

 <button
        onClick={() =>
          setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle z-20"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle z-20"
      >
        ❯
      </button>
      
    </div>
  );
};

export default TopBrands;