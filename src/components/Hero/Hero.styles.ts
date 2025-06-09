import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
    bgcolor: "background.paper",
  },
  title: {
    color: "text.primary",
    fontFamily: "Inter, sans-serif",
    fontSize: "2.25rem",
    marginBottom: "1rem",
  },
  description: {
    color: "text.secondary",
    fontFamily: "Inter, sans-serif",
    fontSize: "1.125rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
};
