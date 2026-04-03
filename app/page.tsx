import AboutMe from "./components/AboutMe";
import GalleryPreview from "./components/GalleryPreview";
import Hero from "./components/Hero";
import NewsSlider from "./components/NewsSlider";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 bg-stone-100">
      <Hero />
      <NewsSlider />
      <GalleryPreview />
      <AboutMe />
    </main>
  );
}
