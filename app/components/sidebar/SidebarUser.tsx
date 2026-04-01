import Image from "next/image";

export default function SidebarUser() {
  return (
    <div className="flex flex-col items-center">

      <div className="w-30 h-30 rounded-full bg-gray-300" >
        <Image
            src="/imgs/profile-avatar-placeholder.png"
            alt="User Avatar"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
        />
      </div>

      <p className="mt-3 font-semibold text-lg">
        Invitado
      </p>

    </div>
  );
}