import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    // padding: "0 1rem",
  },
  image: {
    width: "100%",
    borderRadius: 4,
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    paddingInline: 3,
  },
};
