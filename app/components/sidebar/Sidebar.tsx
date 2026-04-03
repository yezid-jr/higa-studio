"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function Sidebar({ open, setOpen }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);
  
  return (

    <Drawer
      open={open}
      onOpenChange={setOpen}
      direction="left"
    >

      <DrawerContent className="w-64 p-0 bg-stone-100">

        <DrawerHeader className="hidden">

          <DrawerTitle>
            Navigation Menu
          </DrawerTitle>

        </DrawerHeader>

        {/* TU SIDEBAR NORMAL */}
        <div className="h-screen text-black flex flex-col">

          <SidebarHeader />

          <SidebarMenu />

        </div>

      </DrawerContent>

    </Drawer>

  );
}