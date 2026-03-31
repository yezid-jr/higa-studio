"use client";

import { Menu, UserRound, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // Ruta Home
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  return (
    <>
      <header
  className={cn(
    "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-4 transition-all duration-300",
    
    !isHome && "bg-white border-b shadow-sm",

    isHome &&
      (scrolled
        ? "bg-white border-b shadow-sm text-black"
        : "bg-transparent border-b border-transparent text-white")
  )}
>

        {/* LEFT */}
        <div className="flex items-center gap-3">

          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-7" />
          </Button>

          <Logo />

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <Button variant="ghost" size="icon">
            <UserRound className="size-7" />
          </Button>

          <Button variant="ghost" size="icon">
            <ShoppingBag className="size-7" />
          </Button>

        </div>

      </header>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}