import SidebarMenuItem from "./SidebarMenuItem";

export default function SidebarMenu() {
  return (
    <nav className="p-4 space-y-2">

      <SidebarMenuItem title="Home" href="/" />
      <SidebarMenuItem title="Portfolio" href="/portfolio" />
      <SidebarMenuItem title="Products" href="/products" />
      <SidebarMenuItem title="Categories" href="/categories"/>
      <SidebarMenuItem title="Healing Process" href="/healing-process"/>

    </nav>
  );
}