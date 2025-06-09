import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    objectFit: "cover",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  resultTitle: {
    color: "text.primary",
    fontFamily: "Inter, sans-serif",
    fontSize: "2rem",
    fontWeight: 600,
  },
  resultDescription: {
    color: "text.secondary",
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
};
