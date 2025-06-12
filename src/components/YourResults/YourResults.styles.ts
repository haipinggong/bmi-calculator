import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      paddingInline: 5,
      gap: 9,
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: theme.spacing(18),
    },
  }),
  image: (theme) => ({
    maxWidth: "100%",
    borderRadius: 4,
    [theme.breakpoints.up("sm")]: {
      alignSelf: "end",
    },
    [theme.breakpoints.up("lg")]: {
      alignSelf: "center",
    },
  }),
  resultContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    paddingInline: 3,
    [theme.breakpoints.up("sm")]: {
      paddingInline: 0,
      flex: 1,
      paddingBlock: 5,
      alignSelf: "center",
    },
  }),
};
