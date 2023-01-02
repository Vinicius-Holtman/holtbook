import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const theme = useTheme()
export const colors = tokens(theme.palette.mode)