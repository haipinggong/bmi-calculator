import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  heroContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: theme.spacing(4, 3, 0, 3),
    [theme.breakpoints.up("sm")]: {
      paddingInline: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: theme.spacing(18),
      paddingBlock: theme.spacing(11),
      gap: 3,
      alignItems: "flex-start",
    },
  }),
  logo: {
    width: "36.7px",
    height: "36.7px",
  },
  heroContent: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 4,
    },
  }),
};
