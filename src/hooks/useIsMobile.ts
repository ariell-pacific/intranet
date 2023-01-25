import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useIsMobile() {
  const theme = useTheme();
  const height = window.innerHeight;
  const mobileSize = theme.breakpoints.values.sm;
  const mobileLandscape = window.matchMedia("(orientation: landscape)").matches;
  const isMobile =
    useMediaQuery(theme.breakpoints.down("sm")) ||
    (mobileLandscape && height <= mobileSize);
  return isMobile;
}
