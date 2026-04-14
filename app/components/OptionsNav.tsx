"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Portafolio", href: "/portfolio" },
  // { label: "Productos", href: "/products" },
  { label: "Sobre mí", href: "/about-me" },
  { label: "Contacto", href: "/contact" },
  { label: "Healing Process", href: "/healing" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[48px] z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">

        <div className="overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="relative flex gap-7 px-6 min-w-max">

            {/* Línea roja deslizante — se mueve entre links con CSS */}
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === "/portfolio" && pathname === "/");
              return (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className={`
                      relative flex items-center whitespace-nowrap
                      text-sm tracking-widest h-12
                      transition-colors duration-300 ease-in-out
                      ${
                        isActive
                          ? "text-[#CD1E1E]"
                          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                      }
                    `}
                  >
                    {item.label}

                    {/* Línea por debajo de cada link, visible solo si activo */}
                    <span
                      className={`
                        absolute bottom-0 left-0 h-0.5 bg-[#CD1E1E]
                        transition-all duration-300 ease-in-out
                        ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>

      </div>
    </nav>
  );
}