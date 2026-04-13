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
              ? "bg-white dark:bg-transparent text-[#CD1E1E] border-[#CD1E1E]"
              : "bg-[#CD1E1E] text-white border-[#CD1E1E]"
            : `bg-neutral-200 dark:bg-neutral-800
               text-neutral-400 dark:text-neutral-400
               border-transparent
               hover:bg-neutral-300 dark:hover:bg-neutral-700
               hover:text-neutral-700 dark:hover:text-neutral-200`
        }
      `}
    >
      {children ? children : label}
    </button>
  );
}