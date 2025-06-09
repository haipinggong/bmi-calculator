import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontWeightSemiBold: number;
  }
  interface TypographyVariantsOptions {
    fontWeightSemiBold: number;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeightSemiBold: 600,
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "4rem",
      lineHeight: "110%",
      letterSpacing: "-0.2rem",
      fontWeight: theme.typography.fontWeightSemiBold,
    },
    h2: {
      fontSize: "3rem",
      lineHeight: "110%",
      letterSpacing: "-0.15rem",
      fontWeight: theme.typography.fontWeightSemiBold,
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "110%",
      letterSpacing: "-0.1rem",
      fontWeight: theme.typography.fontWeightSemiBold,
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "120%",
      letterSpacing: "-0.075rem",
      fontWeight: theme.typography.fontWeightSemiBold,
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "120%",
      letterSpacing: "-0.0625rem",
      fontWeight: theme.typography.fontWeightSemiBold,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "150%",
      letterSpacing: 0,
      fontWeight: theme.typography.fontWeightRegular,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "150%",
      letterSpacing: 0,
      fontWeight: theme.typography.fontWeightRegular,
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
  },
});

export default theme;
