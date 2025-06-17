import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  label: {
    fontWeight: 600,
  },
  input: {
    "& input": {
      borderRadius: 3,
    },
  },
};
