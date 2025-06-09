import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
    padding: (theme) => theme.spacing(8, 3),
  },
  description: {
    color: (theme) => theme.palette.text.secondary,
  },
  limitsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};
