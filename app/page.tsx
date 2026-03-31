import GalleryPreview from "./components/GalleryPreview";
import Hero from "./components/Hero";
import NewsSlider from "./components/NewsSlider";

export default function Home() {
  return (
    // <div className="flex flex-col items-center w-full max-w-6xl mx-auto">

    //   <NewsSlider />
      
    //   <div>
    //     <h1 className="text-4xl font-bold mb-4">Tatuate Ahora</h1>
    //     <p className="text-lg text-gray-600 mb-8">
    //       Descubre tu estilo único con nuestros tatuajes personalizados. ¡Agenda tu cita hoy y lleva tu arte a la piel!
    //     </p>
    //     <button className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
    //       Agenda tu cita
    //     </button>
    //   </div>

    // </div>
    <main className="flex flex-col gap-3">
      <Hero />
      <NewsSlider />
      <GalleryPreview />
    </main>
  );
}

const tattoos = [
        "/imgs/MyTattoos/anime-tattoo.webp",
        "/imgs/MyTattoos/blackwork-tattoo.webp",
        "/imgs/MyTattoos/dark-tattoo.webp",
        "/imgs/MyTattoos/flash-tattoo.webp",
    ];
