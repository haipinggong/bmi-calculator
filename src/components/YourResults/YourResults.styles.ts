import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    [theme.breakpoints.up("sm")]: {
      paddingInline: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 9,
    },
    // padding: "0 1rem",
  }),
  image: (theme) => ({
    width: "100%",
    borderRadius: 4,
    [theme.breakpoints.up("sm")]: {
      alignSelf: "flex-end",
      maxWidth: "50%",
    },
  }),
  resultContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    paddingInline: 3,
    [theme.breakpoints.up("sm")]: {
      paddingInline: 0,
      flex: 1,
      paddingBlock: 5,
      alignSelf: "center",
    },
  }),
};
