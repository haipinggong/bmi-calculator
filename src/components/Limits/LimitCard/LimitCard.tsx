import { Box, Typography, Card } from "@mui/material";
import { styles } from "./LimitCard.styles";

type LimitCardProps = {
  icon: string;
  title: string;
  description: string;
  position: "gender" | "age" | "muscle" | "pregnancy" | "race";
};

export const LimitCard = ({
  icon,
  title,
  description,
  position,
}: LimitCardProps) => {
  return (
    <Card variant="outlined" sx={styles.card} data-position={position}>
      <Box sx={styles.iconContainer}>
        <Box
          component="img"
          src={icon}
          alt={`${title} icon`}
          sx={styles.icon}
        />
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
      </Box>
      <Typography color="text.secondary">{description}</Typography>
    </Card>
  );
};
