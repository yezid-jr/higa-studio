"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import {
    Autoplay,
    Navigation,
    Pagination
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsImages = [
    "/imgs/Promotions/Active/slider-promocion-semana-santa-30k.png",
    "/imgs/Promotions/Active/promo-mes-abril-40k-2026.png",
    "/imgs/Promotions/Active/slider-tatuate-ahora-2026.png",
    // "/imgs/MyTattoos/dark-tattoo.webp",
    // "/imgs/MyTattoos/flash-tattoo.webp",
    // "/imgs/MyTattoos/anime-tattoo.webp",
];

export default function NewsSlider() {

    return (

        <div className="w-full max-w-2xl mx-auto">

            <Swiper
                modules={[
                    Autoplay,
                    Navigation,
                    Pagination
                ]}

                loop={true}

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}

                navigation={false}

                pagination={{
                    clickable: true
                }}

                className="rounded-2xl overflow-hidden"
            >

                {newsImages.map((src, index) => (

                    <SwiperSlide key={index}>

                        <div className="relative w-full h-37 md:h-52">

                            <Image
                                src={src}
                                alt={`news-${index}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />

                        </div>
                        {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">

                            <h3 className="text-lg font-semibold">
                                Nueva colección disponible
                            </h3>

                        </div> */}
                    </SwiperSlide>

                ))}

            </Swiper>

        </div>


    );
}