"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  
  "/image/gallery/2.png",
  "/image/gallery/3.png",
  "/image/gallery/4.png",
  "/image/gallery/5.png",
  "/image/gallery/6.png",
  "/image/gallery/7.png",
  "/image/gallery/8.png",
  "/image/gallery/9.png",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for mobile responsiveness
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0E3869]">📸 Fayette County Gallery</h2>
        <p className="text-lg text-gray-600 mt-2">Explore scenic views and historic sites.</p>

        {/* ✅ Carousel Slider */}
        <Slider {...settings} className="mt-8">
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <button
                className="relative cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1200}
              height={800}
              className="max-w-4xl max-h-[80vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
