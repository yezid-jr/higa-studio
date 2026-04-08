"use client";

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";

import Image from "next/image";

import "react-photo-view/dist/react-photo-view.css";

import { useFilteredImages } from "../hooks/useFilteredImages";

export default function GalleryGrid() {

  const filteredImages =
    useFilteredImages();

  return (

    <PhotoProvider
      bannerVisible={true}
      maskOpacity={0.6}
      loop={false}
    >

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 lg:grid-cols-5">

        {filteredImages.map((img) => (

          <PhotoView
            key={img.id}
            src={img.image}
          >

            <div className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer">

              <Image
                src={img.image}
                alt={img.title}
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