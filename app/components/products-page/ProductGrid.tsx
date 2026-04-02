import ProductCard from "./ProductCard";
import { Product } from "../../data/mockProducts";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
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