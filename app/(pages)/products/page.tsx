import SearchBar from "@/app/components/SearchBar";
import CategoryChips from "@/app/components/filter/FilterBar";
import ProductsGrid from "@/app/components/products-page/ProductGrid";
import { products } from "@/app/data/mockProducts";

export default function Products() {
    return (
        <div className="flex flex-col gap-5 pt-20 px-6">

            <SearchBar />
            <CategoryChips />
            <ProductsGrid products={products}/>
        </div>
    );
}