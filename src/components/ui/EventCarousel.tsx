"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface EventCarouselProps {
  children: ReactNode[];
  autoplay?: boolean;
  className?: string;
}

export function EventCarousel({
  children,
  autoplay = true,
  className = "",
}: EventCarouselProps) {
  if (children.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={
          autoplay
            ? {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={{
          clickable: true,
        }}
        loop={children.length > 3}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="carousel-red-dots"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="h-full">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

