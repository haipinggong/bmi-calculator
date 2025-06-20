import { Box, Typography } from "@mui/material";
import { styles } from "./Header.styles";

export const Header = () => {
  return (
    <Box sx={styles.headerContainer}>
      <Typography variant="h2" component="h1" sx={styles.title}>
        Body Mass Index Calculator
      </Typography>
      <Typography color="text.secondary" sx={styles.description}>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </Typography>
    </Box>
  );
};
