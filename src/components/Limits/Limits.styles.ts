import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
    padding: (theme) => theme.spacing(8, 3),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  limitsContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      "& > *:last-child": {
        gridColumn: "span 2",
        maxWidth: "50%",
        justifySelf: "center",
      },
    },
  }),
};
