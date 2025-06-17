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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 3,
  },
  inputsContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 3,
    },
  }),
  radioLabel: (theme) => ({
    fontWeight: theme.typography.fontWeightSemiBold,
  }),
  resultContainer: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    padding: 4,
    gap: 3,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderTopRightRadius: 999,
      borderBottomRightRadius: 999,
    },
  }),
  result: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  emptyContainer: (theme) => ({
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
  idealRange: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
  }),
};
