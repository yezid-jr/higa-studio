type Props = {
  title: string;
};

export default function SidebarMenuItem({ title }: Props) {
  return (
    <div className="flex justify-between items-center p-3 rounded hover:bg-gray-100 cursor-pointer">

      <span>{title}</span>

      <span>›</span>

    </div>
  );
}