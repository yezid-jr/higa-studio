import CategoryChips from "../../components/filter/FilterBar";
import GalleryGrid from "../../components/GalleryGrid";
import ImageName from "../../components/ImageName";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5 pt-20 px-6">

      <ImageName name="@higa.ink" />

      <CategoryChips />
      <GalleryGrid />

    </div>
  );
}