import { Box, Typography, Card } from "@mui/material";
import { styles } from "./TipCard.styles";

type TipCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const TipCard = ({ icon, title, description }: TipCardProps) => {
  return (
    <Card variant="outlined" sx={styles.card}>
      <Box component="img" src={icon} alt={`${title} icon`} sx={styles.icon} />
      <Box sx={styles.content}>
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
};
