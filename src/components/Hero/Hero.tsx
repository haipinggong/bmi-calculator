import { Box, Typography } from "@mui/material";
import { styles } from "./Hero.styles";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <Box component="section" sx={styles.heroContainer}>
      <Typography variant="h1" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="body1" sx={styles.description}>
        {description}
      </Typography>
    </Box>
  );
};
