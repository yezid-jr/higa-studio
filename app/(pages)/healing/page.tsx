"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// ─── CONFIG POR STEP ────────────────────────────────────────────────────────
// Cada step tiene su propio control de imagen.
// objectPosition: mueve la figura dentro del frame ("center center", "center top", "50% 80%", etc.)
// scale: zoom (1 = normal, 1.2 = 20% más grande)
// opacity: visibilidad de la imagen (0–1)

const steps = [
  {
    number: "01",
    phase: "Primeras horas",
    title: "Retira el vendaje",
    time: "2 – 4 horas después",
    description:
      "Retira el vendaje con manos limpias. Si tu tatuador usó film especializado (Saniderm / Dermalize), puede quedarse hasta 24 horas. Humedécelo con agua tibia antes de retirarlo, nunca lo arranques de golpe.",
    warning: "No dejes gasa normal más de 4 horas.",
    image: "/imgs/healing-process/step1.png",
    imgConfig: {
      objectPosition: "center -20%",
      scale: 1.19,
      opacity: 1,
    },
  },
  {
    number: "02",
    phase: "Limpieza",
    title: "Lava suavemente",
    time: "3 veces al día",
    description:
      "Usa agua tibia y jabón neutro. Frota suavemente con los dedos, enjuaga bien y seca con toques suaves.",
    warning: "Nada de esponjas ni paños.",
    image: "/imgs/healing-process/step2.png",
    imgConfig: {
      objectPosition: "center 25%",
      scale: 1.4,
      opacity: 1,
    },
  },
  {
    number: "03",
    phase: "Hidratación",
    title: "Aplica crema",
    time: "Después de lavar",
    description:
      "Aplica una capa fina de crema sin perfume. La piel debe verse hidratada, no grasosa.",
    warning: "No uses vaselina en exceso.",
    image: "/imgs/healing-process/step3.png",
    imgConfig: {
      objectPosition: "center 20%",
      scale: 1.15,
      opacity: 1,
    },
  },
  {
    number: "04",
    phase: "Días 3–7",
    title: "No te rasques",
    time: "Primera semana",
    description:
      "El tatuaje pelará. Es normal. No arranques costras ni rasques la zona.",
    warning: "Rascar = daño permanente.",
    image: "/imgs/healing-process/step4.png",
    imgConfig: {
      objectPosition: "center -62%",
      scale: 1.09,
      opacity: 1,
    },
  },
  {
    number: "05",
    phase: "Semanas 2–4",
    title: "Evita el sol",
    time: "4 semanas",
    description:
      "Protege el tatuaje del sol. Usa ropa o protector solar cuando cicatrice.",
    warning: "El sol decolora la tinta.",
    image: "/imgs/healing-process/step5.png",
    imgConfig: {
      objectPosition: "center center",
      scale: 1.0,
      opacity: 0.6,
    },
  },
  {
    number: "06",
    phase: "Mes 1–3",
    title: "Hidrata siempre",
    time: "Diario",
    description:
      "La piel sigue regenerándose. Mantén hidratación constante.",
    warning: "La piel seca envejece el tatuaje.",
    image: "/imgs/healing-process/step-6.png",
    imgConfig: {
      objectPosition: "center center",
      scale: 1.0,
      opacity: 0.6,
    },
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function Page() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const sections = document.querySelectorAll("[data-step]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(Number(entry.target.getAttribute("data-step")));
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SIDE INDICATOR */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-50">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              document
                .querySelector(`[data-step='${i}']`)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="flex flex-col items-center gap-1 group"
          >
            <span className={`text-xs font-bold transition-all ${active === i ? "text-red-500" : "text-neutral-400"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`rounded-full transition-all ${active === i ? "w-3 h-3 bg-red-500 scale-125" : "w-1.5 h-1.5 bg-neutral-400 group-hover:bg-neutral-500"}`} />
          </button>
        ))}
      </div>

      <main className="text-neutral-900">
        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 bg-neutral-950 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] uppercase"
          >
            Healing
            <br />
            <span className="text-red-500">Process</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-white/50 max-w-sm"
          >
            Cuida tu tatuaje como el arte que es.
          </motion.p>
        </section>

        {/* STEPS */}
        {steps.map((step, i) => (
          <section
            key={i}
            data-step={i}
            className="relative min-h-screen bg-white overflow-hidden"
          >
            {/* IMAGEN DE FONDO */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: step.imgConfig.opacity }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className="absolute inset-0 z-0 pointer-events-none select-none"
            >
              <Image
                src={step.image}
                alt=""
                aria-hidden="true"
                fill
                className="object-contain"
                style={{
                  objectPosition: step.imgConfig.objectPosition,
                  transform: `scale(${step.imgConfig.scale})`,
                  transformOrigin: "center center",
                }}
                priority={i === 0}
                sizes="100vw"
              />
            </motion.div>

            {/* GRADIENTE top — texto legible */}
            <div
              className="absolute inset-x-0 top-0 h-52 z-[1] pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 70%, transparent 100%)",
              }}
            />

            {/* GRADIENTE bottom — texto legible */}
            <div
              className="absolute inset-x-0 bottom-0 h-72 z-[1] pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.6) 55%, transparent 100%)",
              }}
            />

            {/* TEXTO SUPERIOR — anclado arriba */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="absolute top-10 left-0 right-0 z-10 px-6 pt-10"
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-red-500 mb-2">
                {step.phase}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[3.5rem] font-black leading-none text-neutral-900">
                  {step.number}
                </span>
                <div>
                  <h2 className="text-xl font-bold uppercase leading-tight text-neutral-900">
                    {step.title}
                  </h2>
                  <p className="text-xs text-neutral-500 mt-0.5 uppercase tracking-widest">
                    {step.time}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TEXTO INFERIOR — anclado abajo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12"
            >
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="bg-red-50/90 border-l-4 border-red-500 px-4 py-3 rounded-r-lg">
                <p className="text-sm text-red-600">{step.warning}</p>
              </div>
            </motion.div>
          </section>
        ))}

        {/* FINAL CTA */}
        <section className="min-h-[60vh] flex items-center justify-center bg-neutral-950 text-white px-6">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cuida tu tinta, cuida tu historia
            </h2>
            <p className="text-white/50">
              Si notas algo fuera de lo normal, consulta con tu tatuador o médico.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}