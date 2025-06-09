import { Box, Typography, Card } from "@mui/material";
import { styles } from "./Tips.styles";
import iconEating from "../../assets/images/icon-eating.svg";
import iconExercise from "../../assets/images/icon-exercise.svg";
import iconSleep from "../../assets/images/icon-sleep.svg";

export const Tips = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <Box
          component="img"
          src={iconEating}
          alt="Healthy eating icon"
          sx={styles.icon}
        />
        <Typography variant="h3" sx={styles.title}>
          Healthy eating
        </Typography>
        <Typography sx={styles.description}>
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </Typography>
      </Card>

      <Card sx={styles.card}>
        <Box
          component="img"
          src={iconExercise}
          alt="Regular exercise icon"
          sx={styles.icon}
        />
        <Typography variant="h3" sx={styles.title}>
          Regular exercise
        </Typography>
        <Typography sx={styles.description}>
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </Typography>
      </Card>

      <Card sx={styles.card}>
        <Box
          component="img"
          src={iconSleep}
          alt="Adequate sleep icon"
          sx={styles.icon}
        />
        <Typography variant="h3" sx={styles.title}>
          Adequate sleep
        </Typography>
        <Typography sx={styles.description}>
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </Typography>
      </Card>
    </Box>
  );
};
