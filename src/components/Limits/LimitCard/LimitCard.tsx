import { Box, Typography, Card } from "@mui/material";
import { styles } from "./LimitCard.styles";

type LimitCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const LimitCard = ({ icon, title, description }: LimitCardProps) => {
  return (
    <Card sx={styles.card}>
      <Box component="img" src={icon} alt={`${title} icon`} sx={styles.icon} />
      <Box sx={styles.content}>
        <Typography variant="h3" sx={styles.title}>
          {title}
        </Typography>
        <Typography sx={styles.description}>{description}</Typography>
      </Box>
    </Card>
  );
};
