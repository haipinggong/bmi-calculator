import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "grid",
    gap: 2,
    padding: (theme) => theme.spacing(8, 3),
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      paddingInline: 5,
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateAreas: `
        "title title title title"
        "gender gender age age"
        "muscle muscle pregnancy pregnancy"
        ". race race ."
      `,
      "& > *:first-child": {
        gridArea: "title",
      },
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: 18,
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateAreas: `
        "title title title . gender gender"
        ". . age age muscle muscle"
        ". pregnancy pregnancy race race ."
      `,
    },
  }),
  titleContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginBottom: 5,
    [theme.breakpoints.up("sm")]: {
      gridColumn: "span 4",
    },
  }),
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
};
