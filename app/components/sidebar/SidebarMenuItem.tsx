import Link from "next/link";

type Props = {
  title: string;
  href: string;
  onClick?: () => void;
};

export default function SidebarMenuItem({ title, href, onClick }: Props) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="flex justify-between items-center p-3 rounded hover:bg-gray-100 cursor-pointer text-xl">

      <span>{title}</span>

      <span></span>

    </Link>
  );
}