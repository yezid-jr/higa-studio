import CategoryChips from "../../components/filter/CategoryChips";
import GalleryGrid from "../../components/GalleryGrid";
import ImageName from "../../components/ImageName";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5 pt-6 px-6">

      {/* <ImageName name="@higa.ink" /> */}
      {/* <h2 className="text-gray-500">Estilos</h2> */}
      <CategoryChips />
      <GalleryGrid />

    </div>
  );
}