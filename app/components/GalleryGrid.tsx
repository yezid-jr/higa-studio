"use client";

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";

import Image from "next/image";

import "react-photo-view/dist/react-photo-view.css";

const images = [
  "/imgs/MyTattoos/anime-tattoo.webp",
  "/imgs/MyTattoos/blackwork-tattoo.webp",
  "/imgs/MyTattoos/dark-tattoo.webp",
  "/imgs/MyTattoos/flash-tattoo.webp",
  "/imgs/MyTattoos/anime-tattoo.webp",
  "/imgs/MyTattoos/blackwork-tattoo.webp",
  "/imgs/MyTattoos/dark-tattoo.webp",
  "/imgs/MyTattoos/flash-tattoo.webp",
  "/imgs/MyTattoos/anime-tattoo.webp",
  "/imgs/MyTattoos/blackwork-tattoo.webp",
  "/imgs/MyTattoos/dark-tattoo.webp",
  "/imgs/MyTattoos/flash-tattoo.webp",
];

export default function GalleryGrid() {

  return (

    <PhotoProvider
    bannerVisible={false}
    maskOpacity={0.6}
    loop={false}
    >

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 lg:grid-cols-5">

        {images.map((src, index) => (

          <PhotoView key={index} src={src}>

            <div className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer">

              <Image
                src={src}
                alt={`tattoo-${index}`}
                fill
                className="object-cover hover:scale-105 transition"
              />

            </div>

          </PhotoView>

        ))}

      </div>

    </PhotoProvider>

  );
}