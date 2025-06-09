import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  title: {
    textAlign: "center",
  },
  description: (theme) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
  }),
};
