"use client";

import { Menu, UserRound, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./../components/sidebar/Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 border-b bg-white">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* Hamburger */}
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-7" />
          </Button>

          {/* Logo */}
          <h1 className="text-2xl font-semibold">
            Higa<span className="text-red-500">Ink</span>
          </h1>

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

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}