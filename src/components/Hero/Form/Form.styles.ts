import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  header: {
    color: "#253347",
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "-1.2px",
    marginBottom: 3,
  },
  radioGroup: {
    display: "flex",
    gap: 2,
    marginBottom: 3,
  },
  radioLabel: {
    color: "#253347",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 600,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
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
