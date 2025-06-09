import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  header: {
    color: "text.primary",
    fontFamily: "Inter, sans-serif",
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  radioGroup: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  radioLabel: {
    color: "text.primary",
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    fontWeight: 600,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    color: "text.primary",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  input: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "background.paper",
      "& fieldset": {
        borderColor: "primary.main",
      },
      "&:hover fieldset": {
        borderColor: "primary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary.main",
      },
    },
  },
  button: {
    borderRadius: "12px",
    padding: "1rem",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 600,
  },
  resultSection: {
    backgroundColor: "primary.main",
    borderRadius: "16px",
    padding: "2rem",
    color: "white",
  },
  resultTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  resultDescription: {
    fontSize: "0.875rem",
    opacity: 0.8,
  },
};
