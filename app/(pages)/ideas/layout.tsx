import { FiltersProvider } from "../../hooks/FiltersProvider";

export default function IdeasLayout({
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