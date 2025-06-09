import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    padding: "0 3",
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  image: {
    width: "564px",
    height: "533px",
    borderRadius: 2,
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  resultTitle: {
    color: "#253347",
    fontFamily: "Inter",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "-2.4px",
  },
  resultDescription: {
    color: "#5E6E85",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
  },
};
