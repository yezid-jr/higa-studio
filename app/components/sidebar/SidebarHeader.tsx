import SidebarUser from "./SidebarUser";
import SidebarAuthButtons from "./SidebarAuthButtons";

export default function SidebarHeader() {

  const isLogged = false; // sw to true to see the user info

  return (
    <div className="p-6 border-b">

      {isLogged ? (
        <SidebarUser />
      ) : (
        <SidebarAuthButtons />
      )}

    </div>
  );
}