export type Product = {
  id: number;
  img: string | null;
  title: string;
  size: string;
  price: number;
  discount?: number;
  categoria?: string;
};

export const products: Product[] = [
//   {
//     id: 1,
//     img: "/imgs/Products/sobr-natural-product-1.jpg",
//     title: "Camiseta Oversize Negra",
//     size: "Tallas S - XL",
//     price: 45000,
//     discount: 10,
//     categoria: "Nuevo",
//   },
//   {
//     id: 2,
//     img: "",
//     title: "Camiseta Blanca Basic",
//     size: "Tallas S - L",
//     price: 39000,
//     discount: 0,
//     categoria: "Popular",
//   },
//   {
//     id: 3,
//     img: "",
//     title: "Hoodie Urban",
//     size: "Tallas M - XL",
//     price: 89000,
//     discount: 15,
//     categoria: "Oferta",
//   },
];