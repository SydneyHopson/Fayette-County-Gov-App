"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/image/hero1.png", alt: "Fayette County View" },
  { src: "/image/hero2.png", alt: "Fayette County Government" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slides every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden"> {/* ✅ Thinner Hero */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
    </section>
  );
};

export default Hero;
