import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export default function useDetectTabletLandscape() {
  const theme = useTheme();
  const [isTabletLandscape, setIsTabletLandscape] = useState<boolean>(false);

  useEffect(() => {
    const resizeCallback = () => {
      const h = window.innerHeight;
      const w = window.innerWidth;
      const atTabletSize = theme.breakpoints.values.md;
      if (
        window.matchMedia("(orientation: landscape)").matches &&
        h <= atTabletSize &&
        w < 1025
      ) {
        setIsTabletLandscape(true);
      } else {
        setIsTabletLandscape(false);
      }
    };

    window.addEventListener("resize", resizeCallback);

    return () => window.removeEventListener("resize", resizeCallback);
  }, [theme.breakpoints.values.md]);

  return isTabletLandscape;
}
