export default function Hero() {
  return (
    <section className="relative h-screen rounded-b-lg overflow-hidden sm:h-[80vh] lg:h-[60vh]">

      <img
        src="imgs/MyTattoos/Blackwork-tattoo.webp"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 object-[0%_center]"
      />

      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-24 text-white">

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Tatuajes en Barranquilla
        </h1>

        <p className="mt-3 text-lg">
          Especialista en blackwork y realismo
        </p>

        <button className="mt-6 bg-black px-6 py-3 rounded-lg">
          Reservar cita
        </button>

      </div>

    </section>
  );
}