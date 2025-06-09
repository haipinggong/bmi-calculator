import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    border: "none",
  },
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
