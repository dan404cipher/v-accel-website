import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeBaseClasses =
  "inline-flex flex-wrap items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20";
const badgeTextClasses =
  "text-xs sm:text-sm md:text-base text-[rgb(26,35,50)] font-semibold text-center sm:text-left";

export type SectionBadgeProps = {
  icon?: LucideIcon;
  label: ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  as?: "div" | "span";
};

export const SectionBadge = ({
  icon: Icon,
  label,
  className = "",
  iconClassName = "",
  textClassName = "",
  as = "div",
}: SectionBadgeProps) => {
  const Component = as === "span" ? "span" : "div";

  return (
    <Component className={`${badgeBaseClasses} ${className}`}>
      {Icon ? (
        <Icon
          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#00B8A9] ${iconClassName}`}
          aria-hidden="true"
        />
      ) : null}
      <span className={`${badgeTextClasses} ${textClassName}`}>{label}</span>
    </Component>
  );
};

