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
    width: "100%",
    padding: 2,
    borderRadius: 1,
    border: "1px solid #E8E8E8",
    "&:focus": {
      outline: "none",
      borderColor: "#345FF6",
    },
  },
};
