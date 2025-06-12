import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  headerContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 3,
    [theme.breakpoints.up("sm")]: {
      paddingInline: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: 0,
      alignSelf: "center",
    },
  }),
  title: (theme) => ({
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  }),
  description: (theme) => ({
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  }),
};
