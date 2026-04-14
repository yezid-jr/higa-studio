"use client";

import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import SwitchTheme from "./SwitchTheme";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroPassed, setHeroPassed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (sectionRef.current) {
        const bottom = sectionRef.current.getBoundingClientRect().bottom;
        // El hero terminó de pasar cuando su borde inferior subió por encima del navbar (~48px)
        setHeroPassed(bottom <= 48);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={sectionRef}
        className={`
          relative overflow-hidden
          h-[40vh] sm:h-[60vh] lg:h-[60vh]
          transition-all duration-300
          ${scrolled ? "rounded-b-3xl" : "rounded-none"}
        `}
      >
        <div className="absolute top-6 right-6 z-20">
          <SwitchTheme />
        </div>
        <Image
          src="/imgs/MyTattoos/blackwork-tattoo.webp"
          alt="Blackwork tattoo example"
          fill
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 object-[0%_center]"
        />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-10 text-white">
          <div
            className={`
              transition-all duration-500 ease-in-out origin-bottom-left
              ${scrolled
                ? "opacity-0 translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
              }
            `}
          >
            <h1 className="text-5xl font-semibold">
              Higa<br />
              <span className="text-red-500">Ink</span>
            </h1>

            <p className="mt-3 text-lg">
              Especialista en blackwork y realismo
            </p>


            <a
              href="https://wa.me/573052201926?text=Hola%2C%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center w-fit
                mt-6 px-8 py-3 rounded-lg
                bg-white text-black dark:bg-red-500 dark:text-white
                hover:bg-neutral-800 transition
              "
            >
              Reservar cita
              <BsWhatsapp className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Logo flotante ── */}
      <div
        className={`
          fixed top-0 left-0 z-50
          flex items-center h-12 px-6 pr-[100vw]
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }
          ${heroPassed
            ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm shadow-sm w-full"
            : "bg-transparent w-auto"
          }
        `}
      >
        <h1
          className={`
            text-2xl font-semibold
            transition-colors duration-300
            ${heroPassed
              ? "text-neutral-900 dark:text-white"
              : "text-white drop-shadow-md"
            }
          `}
        >
          Higa<span className="text-red-500">Ink</span>
        </h1>
      </div>
    </>
  );
}