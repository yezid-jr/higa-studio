import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* FOTO */}
        {/* <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">

          <Image
            src="/imgs/about-me.jpg"
            alt="Tattoo artist trabajando"
            fill
            className="object-cover grayscale"
          />

        </div> */}

        {/* TEXTO */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Sobre mí
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Soy un tatuador especializado en estilos <span className="">blackwork</span> 
            y <span className="font-semibold">realismo</span>, ubicado en Barranquilla. 
            Mi enfoque es crear piezas únicas que representen la identidad 
            y personalidad de cada cliente.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Trabajo con altos estándares de higiene, materiales de calidad 
            profesional y atención personalizada, garantizando que cada 
            tatuaje sea una experiencia segura y memorable.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Mi objetivo es transformar tus ideas en arte permanente, 
            cuidando cada detalle desde el diseño hasta el resultado final.
          </p>

        </div>

      </div>

    </section>
  );
}