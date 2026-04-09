"use client";

import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Fullscreen } from "lucide-react";

export default function Hero() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`
        relative h-screen overflow-hidden
        sm:h-[80vh] lg:h-[60vh]
        transition-all duration-300
        ${scrolled ? "rounded-b-3xl" : "rounded-none"}
      `}
    >

      <Image
        src={"/imgs/MyTattoos/Blackwork-tattoo.webp"}
        alt="Blackwork tattoo example"
        fill={true}
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 object-[0%_center]"
      />

      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-24 text-white">

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Tatuajes en Barranquilla
        </h1>

        <p className="mt-3 text-lg">
          Especialista en blackwork y realismo
        </p>

        <a
          href="https://wa.me/573052201926"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center 
            mt-6 
            bg-black 
            text-white
            px-8
            py-3 
            rounded-lg
            hover:bg-neutral-800
            transition
          "
        >
          Reservar cita
          <BsWhatsapp className="w-5 h-5 ml-3" />
        </a>

      </div>

    </section>
  );
}