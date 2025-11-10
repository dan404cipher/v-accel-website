import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "main";
  className?: string;
  children: ReactNode;
};

export function Container({ as: Component = "div", className, children }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}

