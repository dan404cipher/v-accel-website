import { useEffect } from "react";

export function usePageTheme(themeClass: string | undefined) {
  useEffect(() => {
    if (!themeClass) {
      return;
    }

    const root = document.documentElement;
    const previousClasses = new Set(root.classList);
    const previousInlineStyle = root.getAttribute("style");

    root.classList.add(themeClass);

    return () => {
      root.classList.remove(themeClass);
      root.className = Array.from(previousClasses).join(" ");

      if (previousInlineStyle === null) {
        root.removeAttribute("style");
      } else {
        root.setAttribute("style", previousInlineStyle);
      }
    };
  }, [themeClass]);
}

