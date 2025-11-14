import { useEffect } from "react";

export function usePageTheme(themeClass: string | undefined) {
  useEffect(() => {
    if (!themeClass) {
      return;
    }

    const root = document.documentElement;
    root.classList.add(themeClass);

    return () => {
      // Simply remove the theme class without trying to restore previous state
      // This prevents layout shifts and className conflicts
      root.classList.remove(themeClass);
    };
  }, [themeClass]);
}

