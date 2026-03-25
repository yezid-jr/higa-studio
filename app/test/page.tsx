import { Heart, ShoppingBag } from "lucide-react";

type Props = {
  title: string;
  size: string;
  price: number;
  discount?: number;
  categoria?: string;
};

export default function ProductCard({
  title = "Producto de ejemplo",
  size = "Tamaño: 10 x 10 cm",
  price = 50000,
  discount = 50,
  categoria = "Categoría: Tatuaje",
}: Props) {
  const discountedPrice = Math.round(price / (1 - discount / 100));
  return (
    <div className="w-65 rounded-3xl border-2 border-gray-300 p-4 bg-white">

      {/* Imagen */}
      <div className="relative">

        <div className="w-full h-45 bg-gray-300 rounded-2xl" />

        {/* Badge Categoria */}
        {categoria && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {categoria}
          </span>
        )}

      </div>



      {/* Contenido */}
      <div className="mt-4">

        {/* Iconos */}
        <div className="flex justify-between gap-2 mb-2">

          {/* Badge descuento */}
          {discount && (
            <span className={`flex justify-content leading-loose bg-[#CD1E1E] text-white text-xs px-4 rounded-full`}>
              -{discount}%
            </span>
          )}

          <div className="flex gap-2">

            <Heart className="w-6 h-6 cursor-pointer" />

            <ShoppingBag className="w-6 h-6 cursor-pointer" />

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
    </div>
  );
}