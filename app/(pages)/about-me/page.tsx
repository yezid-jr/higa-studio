import { Icon } from "lucide-react";
import Image from "next/image";
import { BsWhatsapp, BsInstagram, BsTiktok } from "react-icons/bs";

const stats = [
  { label: "Clientes", value: "+200" },
  { label: "Años", value: "3" },
  { label: "Rating", value: "5.0" },
];

const styles = [
  "Blackwork",
  "Realismo",
  "Geométrico",
  "Fineline",
  "Acuarela",
  "Neotradicional",
];

const socials = [
  {
    label: "Instagram",
    handle: "@higaink",
    href: "https://instagram.com/higaink",
    icon: BsInstagram,
  },
  {
    label: "TikTok",
    handle: "@higaink",
    href: "https://tiktok.com/@higaink",
    icon: BsTiktok,
  },
  {
    label: "WhatsApp",
    handle: "+57 305 220 1926",
    href: "https://wa.me/573052201926",
    icon: BsWhatsapp,
  },
];

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-10">

        {/* FOTO + NOMBRE */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-[#CD1E1E] ring-offset-2 ring-offset-white dark:ring-offset-neutral-950">
            <Image
              src="/imgs/Placeholders/profile-avatar-placeholder.png"
              alt="Foto de perfil"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 tracking-widest uppercase">
              Barranquilla · Col
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              <span className="text-2xl font-semibold text-[#CD1E1E]">
                {stat.value}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* BIO */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Mi historia</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
            Llevo más de 3 años convirtiendo ideas en arte permanente. Empecé
            de manera autodidacta y con el tiempo fui perfeccionando mi técnica.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
            El blackwork y el realismo son mis
            especialidades, pero disfruto explorar todos los estilos.
          </p>
        </div>

        {/* ESTILOS */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Estilos</h2>
          <div className="flex flex-wrap gap-2">
            {styles.map((style) => (
              <span
                key={style}
                className="px-3 py-1 rounded-full text-sm border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900"
              >
                {style}
              </span>
            ))}
          </div>
        </div>

        {/* REDES */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Encuéntrame en</h2>
          <div className="flex flex-col gap-2">
            {socials.map(({ label, handle, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#CD1E1E] dark:hover:border-[#CD1E1E] transition-colors duration-200 group"
              >
                <Icon className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-[#CD1E1E] transition-colors duration-200" />
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}