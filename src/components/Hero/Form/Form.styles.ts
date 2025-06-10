import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  formContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 3,
    padding: 3,
    borderRadius: 4,
    boxShadow: "16px 32px 56px rgba(143, 174, 207, 0.25)",
    [theme.breakpoints.up("sm")]: {
      padding: 4,
      gap: 4,
    },
  }),
  radioGroup: {
    display: "flex",
    gap: 3,
    justifyContent: "space-between",
  },
  radioLabel: (theme) => ({
    fontWeight: theme.typography.fontWeightSemiBold,
  }),
  resultSection: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    padding: 4,
    gap: 3,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      borderTopRightRadius: 999,
      borderBottomRightRadius: 999,
    },
  }),
};
