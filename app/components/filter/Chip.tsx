"use client";

interface FilterChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  variant?: "default" | "outline";
  children?: React.ReactNode;
}

export default function FilterChip({
  label,
  selected = false,
  onClick,
  variant = "default",
  children,
}: FilterChipProps) {

  return (

    <button
      onClick={onClick}

      className={`
        px-3 py-0.5
        rounded-full
        text-sm
        whitespace-nowrap
        transition-all duration-300
        border-2

        ${
          selected
            ? variant === "outline"
              ? "bg-white text-[#CD1E1E] border-[#CD1E1E]"
              : "bg-[#CD1E1E] text-white border-[#CD1E1E]"
            : "bg-gray-200 text-gray-400 border-transparent hover:bg-gray-300 hover:text-gray-700"
        }
      `}
    >

      { children ? children : label }

    </button>

  );

}