"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  size: string;
  price: number;
  discount?: number;
  categoria?: string;
};

export default function ProductCard({
  img,
  title,
  size,
  price = 0,
  discount = 0,
  categoria,
}: Props) {

  const [liked, setLiked] = useState(false);
  const [animated, setAnimated] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    setAnimated(true);
    setTimeout(() => setAnimated(false), 150); // Duración de la animación
  };
  const discountedPrice = Math.round(price / (1 - discount / 100));

  return (
    <div className="w-60 rounded-3xl border-2 border-gray-300 p-4 bg-white">

      {/* Imagen */}
      <div className="relative">


        <Image
          src={img || "/imgs/placeholder-img.svg"}
          alt={title}
          width={300}
          height={200}
          draggable={false}
          className="w-full h-45 object-cover rounded-2xl"
        />

        {/* Badge Categoria */}
        {categoria && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {categoria}
          </span>
        )}

      </div>



      {/* Contenido */}
      <div className="mt-2">

        {/* Iconos */}
        <div className="flex justify-between items-start gap-2 mb-2">

          {/* Badge descuento */}
          <span className="min-w-15">

            {discount > 0 && (
              <span className={`flex justify-content leading-loose bg-[#CD1E1E] text-white text-xs px-4 rounded-full`}>
                -{discount}%
              </span>
            )}

          </span>
          <div className="flex">

            {/* Botón corazón */}
            <button
              onClick={handleLike}
              className="p-1.25 inline-flex items-center justify-center 
                     rounded-full 
                     hover:bg-gray-400/30 
                     active:bg-gray-400/50 
                     transition"
            >
              <Heart
                className={`w-6 h-6 transition 
              ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}
              ${animated ? "animate-ping" : ""}`}
              />
            </button>

            {/* Bolsa */}
            <button
              className="p-1.25 flex items-center justify-center 
                     rounded-full 
                     hover:bg-gray-400/30 
                     active:bg-gray-400/50 
                     transition"
            >
              <ShoppingBag className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Título */}
      <h3 className={`text-lg font-medium`}>
        {title}
      </h3>

      {/* Tamaño */}
      <p className="text-xs text-gray-500">
        {size}
      </p>

      {/* Precios */}
      <div className="flex items-center gap-2 mt-2">

        <span className={`text-[#CD1E1E] font-semibold text-xl`}>
          ${price.toLocaleString()}
        </span>

        {discount > 0 && (
          <span className={`text-l text-gray-500 line-through`}>
            ${discountedPrice.toLocaleString()}
          </span>
        )}

      </div>
    </div>
  );
}