import SidebarMenuItem from "./SidebarMenuItem";

export default function SidebarMenu() {
  return (
    <nav className="p-4 space-y-2">

      <SidebarMenuItem title="Portfolio" />
      <SidebarMenuItem title="Tattoos" />
      <SidebarMenuItem title="Categories" />
      <SidebarMenuItem title="Healing Process" />

    </nav>
  );
}