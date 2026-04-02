import CategoryChips from "@/app/components/filter/FilterBar";
import GalleryGrid from "@/app/components/GalleryGrid";
import ImageName from "@/app/components/ImageName";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5 pt-20 px-6">

      <ImageName name="@higa.ink" />

      <CategoryChips />
      <GalleryGrid />

    </div>
  );
}