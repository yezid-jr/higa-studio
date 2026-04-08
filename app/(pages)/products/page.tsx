import SearchBar from "../../components/SearchBar";
import CategoryChips from "../../components/filter/FilterBar";
import ProductsGrid from "../../components/products-page/ProductGrid";
import { products } from "../../data/mockProducts";

export default function Products() {
    return (
        <div className="flex flex-col gap-5 pt-20 px-6">

            <SearchBar />
            <CategoryChips />
            <ProductsGrid products={products}/>
        </div>
    );
}