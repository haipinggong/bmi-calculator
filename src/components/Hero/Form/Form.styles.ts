import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    padding: 3,
    borderRadius: 4,
  },
  radioGroup: {
    display: "flex",
    gap: 3,
    justifyContent: "space-between",
  },
  radioLabel: (theme) => ({
    fontWeight: theme.typography.fontWeightSemiBold,
  }),
  resultSection: {
    backgroundColor: "#345FF6",
    borderRadius: 2,
    padding: 3,
    marginTop: 3,
  },
  resultTitle: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "-1.2px",
    marginBottom: 2,
  },
  resultDescription: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    opacity: 0.8,
  },
};
