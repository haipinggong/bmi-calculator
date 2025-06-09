import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#345FF6",
    },
    secondary: {
      main: "#253347",
    },
    text: {
      primary: "#253347",
      secondary: "#5E6E85",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    error: {
      main: "#FF6B6B",
    },
    success: {
      main: "#4CAF50",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export type Theme = typeof theme;
