"use client";

import { Menu, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 border-b bg-white">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo */}
          <h1 className="text-xl font-semibold">
            Higa<span className="text-red-500">Ink</span>
          </h1>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <ShoppingBag className="w-5 h-5" />
          </Button>

        </div>

      </header>

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}