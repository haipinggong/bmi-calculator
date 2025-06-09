import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "8rem",
    padding: "0 1rem",
  },
  image: {
    width: "564px",
    height: "533px",
    borderRadius: "35px",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  resultTitle: {
    color: "#253347",
    fontFamily: "Inter, sans-serif",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "-2.5%",
  },
  resultDescription: {
    color: "#5E6E85",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
  },
};
