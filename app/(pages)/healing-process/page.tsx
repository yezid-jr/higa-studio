"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    phase: "Primeras horas",
    title: "Retira el vendaje",
    time: "2–4 hrs después",
    description:
      "Retira el vendaje con manos limpias. Si tu tatuador usó film especializado (Saniderm / Dermalize), puede quedarse hasta 24 horas. Humedécelo con agua tibia antes de retirarlo, nunca lo arranques de golpe.",
    warning: "No dejes gasa normal más de 4 horas.",
  },
  {
    number: "02",
    phase: "Limpieza",
    title: "Lava suavemente",
    time: "3 veces al día",
    description:
      "Usa agua tibia y jabón neutro sin fragancia. Frota con la yema de los dedos en círculos suaves. Enjuaga bien y seca dando toquecitos con papel limpio — nunca frotar.",
    warning: "Nada de esponjas ni paños de tela.",
  },
  {
    number: "03",
    phase: "Hidratación",
    title: "Aplica crema",
    time: "Tras cada lavado",
    description:
      "Aplica una capa muy fina de crema cicatrizante sin perfume (Bepanthen, Hustle Butter). La piel debe verse hidratada, no brillosa ni grasienta. Menos es más.",
    warning: "Vaselina pura puede atrapar bacterias.",
  },
  {
    number: "04",
    phase: "Días 3–7",
    title: "No te rasques",
    time: "Primera semana",
    description:
      "El tatuaje pelará como quemadura solar. Es normal. Si pica, da golpecitos suaves con la palma. Arrancar costras puede sacar tinta y arruinar el diseño para siempre.",
    warning: "Rascarse = manchas blancas permanentes.",
  },
  {
    number: "05",
    phase: "Semanas 2–4",
    title: "Protege del sol",
    time: "Al menos 4 semanas",
    description:
      "El sol decolora la tinta nueva de forma irreversible. Cúbrelo con ropa o aplica SPF 50+ una vez cicatrizado. Evita piscinas, mar, jacuzzi y bañera por 3–4 semanas.",
    warning: "Sol en tatuaje fresco = colores apagados para siempre.",
  },
  {
    number: "06",
    phase: "Mes 1–3",
    title: "Hidratación permanente",
    time: "Rutina diaria",
    description:
      "Aunque parezca curado por fuera, las capas profundas siguen regenerándose hasta 3 meses. Hidrata a diario con loción sin fragancia para mantener colores vivos y líneas nítidas.",
    warning: "La piel seca envejece el tatuaje prematuramente.",
  },
];

const doList = [
  "Lavarte las manos antes de tocar el tatuaje",
  "Usar ropa suelta y de algodón sobre la zona",
  "Mantener el área hidratada y limpia",
  "Consultar a tu tatuador ante cualquier signo inusual",
];

const dontList = [
  "Rascarte ni arrancar la piel que pela",
  "Exponerte al sol directo sin protección",
  "Sumergirte en piscinas, mar o bañera",
  "Usar cremas con perfume, alcohol o retinol",
];

export default function CuidadoTatuajePage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white max-w-lg mx-auto px-5 py-15">

      {/* HERO */}
      <div className="relative overflow-hidden bg-neutral-900 rounded-xl mt-5 px-6 pt-9 pb-8">
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-red-600 opacity-10" />
        <p className="text-xs font-medium tracking-widest uppercase text-red-500 mb-2">
          Guía de cuidado
        </p>
        <h1 className="text-5xl leading-none tracking-wide text-white mb-3">
          HEALING<br />
          <span className="text-red-500">PROCESS</span>
        </h1>
        <p className="text-sm font-light text-white/50 leading-relaxed max-w-65">
          Tu tatuaje merece los mismos cuidados que el arte que representa.
        </p>
        <span className="absolute bottom-5 right-5 bg-red-600 text-white text-xs font-medium tracking-wider px-3 py-1.5 rounded-full">
          6 pasos
        </span>
      </div>

      {/* STEPS */}
      <div className="flex items-center gap-3 pt-7 pb-3">
        <span className="text-xl font-bold uppercase tracking-widest whitespace-nowrap">Los pasos</span>
        <span className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="flex flex-col gap-2.5">
        {steps.map((step, i) => {
          const open = activeStep === i;
          return (
            <div
              key={i}
              onClick={() => setActiveStep(open ? null : i)}
              className={`rounded-xl overflow-hidden cursor-pointer border-[1.5px] transition-colors duration-200 ${
                open ? "bg-white border-neutral-900" : "bg-neutral-100 border-transparent"
              }`}
            >
              <div className="flex items-center gap-3.5 px-4 py-4">
                <span className={`text-3xl leading-none min-w-9 font-bold transition-colors ${open ? "text-red-500" : "text-neutral-300"}`}>
                  {step.number}
                </span>
                <div className="flex-1">
                  <p className={`text-[10px] font-medium tracking-[0.2em] uppercase mb-0.5 transition-colors ${open ? "text-red-500" : "text-neutral-400"}`}>
                    {step.phase}
                  </p>
                  <p className="text-lg font-bold uppercase tracking-wide leading-tight text-neutral-900">
                    {step.title}
                  </p>
                  <p className="text-[11px] font-light text-neutral-400 mt-0.5">{step.time}</p>
                </div>
                <svg
                  className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-72" : "max-h-0"}`}>
                <div className="px-4 pb-4 flex flex-col gap-2.5">
                  <div className="h-px bg-neutral-200" />
                  <p className="text-sm font-light leading-relaxed text-neutral-700">
                    {step.description}
                  </p>
                  <div className="flex items-start gap-2 bg-red-50 border-l-[3px] border-red-500 px-3 py-2.5 rounded-r-lg">
                    <svg className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <p className="text-xs text-red-500 leading-relaxed">{step.warning}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RULES */}
      <div className="flex items-center gap-3 pt-7 pb-3">
        <span className="text-xl font-bold uppercase tracking-widest whitespace-nowrap">Reglas clave</span>
        <span className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="flex flex-col gap-2.5 pb-10">
        {/* Do */}
        <div className="bg-neutral-100 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-neutral-900 flex-shrink-0" />
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-900">Sí debes hacer</span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {doList.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-light text-neutral-700 leading-snug">
                <span className="w-4 h-4 rounded-full bg-neutral-900 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 5l2.5 2.5L8 3" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Don't */}
        <div className="bg-neutral-100 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">No debes hacer</span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {dontList.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-light text-neutral-700 leading-snug">
                <span className="w-4 h-4 rounded-full bg-red-50 border border-red-400 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-red-500" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 2l6 6M8 2l-6 6" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer note */}
        <div className="bg-neutral-900 rounded-xl p-5 flex gap-3.5 items-start mt-1">
          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className="text-sm font-light text-white/60 leading-relaxed">
            Si notas enrojecimiento excesivo, calor, pus o fiebre,{" "}
            <strong className="font-medium text-white">consulta a tu tatuador o médico</strong> de inmediato.
          </p>
        </div>
      </div>

    </main>
  );
}