import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  heroContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: theme.spacing(4, 3, 0, 3),
  }),
  logo: {
    width: "36.7px",
    height: "36.7px",
  },
};
