import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 3,
    backgroundColor: (theme) => theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: "16px 32px 56px rgba(143, 174, 207, 0.25)",
    gridArea: "var(--position)",
  },
  iconContainer: {
    display: "flex",
    gap: 2,
    alignItems: "center",
  },
  icon: {
    width: "32px",
    height: "32px",
  },
};
