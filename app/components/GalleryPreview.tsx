"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function GalleryGrayscale() {

  const tattoos = [
        "/imgs/MyTattoos/anime-tattoo.webp",
        "/imgs/MyTattoos/blackwork-tattoo.webp",
        "/imgs/MyTattoos/dark-tattoo.webp",
        "/imgs/MyTattoos/flash-tattoo.webp",
    ];

  return (
    <section className="px-4 py-12">

      <h2 className="
        text-2xl 
        font-bold 
        text-center 
        mb-8
      ">
        Algunos Trabajos
      </h2>

      <Swiper
        modules={[
          EffectCoverflow,
          Pagination,
          Autoplay,
        ]}

        effect="coverflow"

        centeredSlides={true}

        slidesPerView={1.3}

        loop={true}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        pagination={{ clickable: true }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}

        className="max-w-md mx-auto"
      >

        {tattoos.map((img, i) => (

          <SwiperSlide key={i}>

            {({ isActive }) => (

              <div
                className={`
                  transition-all duration-500

                  ${isActive
                    ? "grayscale-0 scale-80 shadow-2xl"
                    : "grayscale scale-80 opacity-80"
                  }
                `}
              >

                <Image
                  src={img}
                  alt="Tattoo"
                  width={500}
                  height={500}
                  className="
                    w-full
                    aspect-square
                    object-cover
                    rounded-xl
                  "
                />

              </div>

            )}

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}