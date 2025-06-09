import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    marginBottom: 4,
  },
  title: {
    color: "#253347",
    fontFamily: "Inter",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "-2.4px",
  },
  description: {
    color: "#5E6E85",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
  },
};
