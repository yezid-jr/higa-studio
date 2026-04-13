import ProductCard from "./ProductCard";
import { Product } from "../../data/mockProducts";
import { SearchX } from "lucide-react";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <SearchX
          size={48}
          className="text-neutral-400 dark:text-neutral-500"
        />

        <p className="text-neutral-500 dark:text-neutral-400 text-lg pb-15">
          No se encontraron productos
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          img={product.img}
          title={product.title}
          size={product.size}
          price={product.price}
          discount={product.discount}
          categoria={product.categoria}
        />
      ))}
    </div>
  );
}