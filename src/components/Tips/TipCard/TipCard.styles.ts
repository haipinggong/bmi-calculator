import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  card: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    border: "none",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      gap: 5,
    },
  }),
  icon: {
    width: "64px",
    height: "64px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
};
