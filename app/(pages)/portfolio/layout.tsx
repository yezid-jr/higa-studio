import { FiltersProvider } from "@/app/hooks/FiltersProvider";

export default function PortfolioLayout({
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