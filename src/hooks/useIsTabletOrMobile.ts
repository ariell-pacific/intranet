import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useIsTabletOrMobile() {
  const theme = useTheme();
  const isTableOrMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return isTableOrMobile;
}
