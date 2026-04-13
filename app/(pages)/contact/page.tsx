// app/(marketing)/contacto/page.tsx

import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MapPin, Clock } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barranquilla, Colombia",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Sábado · 8am – 7pm",
  },
];

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-8">

        {/* HEADER */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">
            Agenda tu <span className="text-[#CD1E1E]">cita</span>
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Escribime directamente y coordinamos todo por WhatsApp.
          </p>
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-3">
          {info.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              <Icon className="w-5 h-5 text-[#CD1E1E] shrink-0" />
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                  {label}
                </p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WHATSAPP CTA */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Escribime</h2>
          <a
            href="https://wa.me/573052201926?text=Hola%2C%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#CD1E1E] hover:bg-[#b01919] text-white font-medium transition-colors duration-200"
          >
            <BsWhatsapp className="w-5 h-5" />
            Reservar por WhatsApp
          </a>
          
            <a
              href="https://instagram.com/higaink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-[#CD1E1E] dark:hover:border-[#CD1E1E] text-neutral-700 dark:text-neutral-300 font-medium transition-colors duration-200 group"
          >
            <BsInstagram className="w-5 h-5 group-hover:text-[#CD1E1E] transition-colors duration-200" />
            Ver Instagram
          </a>
        </div>

            {/* NOTA */}
            <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center leading-relaxed">
              El mensaje de WhatsApp ya viene pre-cargado para agilizar la
              conversación. Respondemos en menos de 24 horas.
            </p>
      </div>
    </main>
  );
}