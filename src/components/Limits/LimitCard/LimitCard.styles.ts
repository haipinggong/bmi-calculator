import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 3,
    backgroundColor: (theme) => theme.palette.background.paper,
    borderRadius: 4,
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
  description: {
    color: "#5E6E85",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
  },
};
