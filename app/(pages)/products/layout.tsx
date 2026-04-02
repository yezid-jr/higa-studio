import { FiltersProvider } from "@/app/hooks/FiltersProvider";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <FiltersProvider>
      {children}
    </FiltersProvider>

  );
}