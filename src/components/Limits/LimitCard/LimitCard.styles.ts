import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  card: {
    display: "flex",
    gap: 3,
    padding: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    boxShadow: "0px 16px 30px 0px rgba(143, 174, 207, 0.25)",
  },
  icon: {
    width: "32px",
    height: "32px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    color: "#253347",
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "-1.2px",
  },
  description: {
    color: "#5E6E85",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
  },
};
