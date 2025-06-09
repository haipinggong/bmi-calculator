import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 5,
    padding: (theme) => theme.spacing(6, 3),
  },
};
