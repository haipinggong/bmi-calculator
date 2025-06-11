import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  headerContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 3,
    [theme.breakpoints.up("sm")]: {
      paddingInline: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      paddingInline: 0,
    },
  }),
  title: (theme) => ({
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  }),
  description: (theme) => ({
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  }),
};
