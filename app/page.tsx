import { redirect } from "next/navigation";
import AboutMe from "./components/AboutMe";
import GalleryPreview from "./components/GalleryPreview";
import Hero from "./components/Hero";
import NewsSlider from "./components/NewsSlider";
import OptionsNav from "./components/OptionsNav";

export default function Home() {
  redirect("/portfolio");
  return (
    <main className="flex flex-col gap-3 bg-stone-100">
      {/* <Hero />
      <OptionsNav />
      <NewsSlider />
      <GalleryPreview />
      <AboutMe /> */}
    </main>
  );
}
