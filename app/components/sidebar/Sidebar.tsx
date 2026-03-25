import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      
      <SidebarHeader />

      <SidebarMenu />
      
    </div>
  );
}