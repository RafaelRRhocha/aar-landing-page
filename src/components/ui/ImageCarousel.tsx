"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  aspectRatio?: "video" | "square" | "4-3";
  autoplay?: boolean;
  showPagination?: boolean;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  className?: string;
}

export function ImageCarousel({
  images,
  aspectRatio = "video",
  autoplay = true,
  showPagination = true,
  slidesPerView = 1,
  spaceBetween = 0,
  className = "",
}: ImageCarouselProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    "4-3": "aspect-4-3",
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`relative group ${className}`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        autoplay={
          autoplay
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        loop={images.length > 1}
        className="w-full h-full carousel-red-dots"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={`relative w-full ${aspectClasses[aspectRatio]} bg-cream-dark rounded-2xl overflow-hidden`}>
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <Image
                src={image}
                alt={`Imagem ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="image-cover"
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

