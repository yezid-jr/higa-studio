import Logo from "./Logo";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-neutral-primary-soft border-t">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LOGO + DESCRIPCIÓN */}
          <div>

            <Logo />

            <p className="mt-4 text-body text-sm leading-relaxed">
              Estudio de tatuajes especializado en
              <strong> blackwork</strong> y
              <strong> realismo</strong> en Barranquilla.
              Creamos piezas únicas con altos estándares
              de higiene y calidad.
            </p>

          </div>

          {/* NAVEGACIÓN */}
          <div>

            <h3 className="font-semibold text-heading mb-4 uppercase text-sm">
              Navegación
            </h3>

            <ul className="space-y-3 text-body">

              <li>
                <Link href="/" className="hover:text-heading transition">
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-heading transition">
                  Galería
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-heading transition">
                  Sobre mí
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-heading transition">
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* REDES */}
          <div>

            <h3 className="font-semibold text-heading mb-4 uppercase text-sm">
              Sígueme
            </h3>

            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                className="p-2 rounded hover:bg-gray-200 transition"
              >
                <BsInstagram className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                className="p-2 rounded hover:bg-gray-200 transition"
              >
                <BsFacebook className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                className="p-2 rounded hover:bg-gray-200 transition"
              >
                <BsWhatsapp className="w-5 h-5" />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-body">

          <p>
            © {new Date().getFullYear()} Tu Estudio de Tatuajes.
            Todos los derechos reservados.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link href="/privacy" className="hover:text-heading transition">
              Privacidad
            </Link>

            <Link href="/terms" className="hover:text-heading transition">
              Términos
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}