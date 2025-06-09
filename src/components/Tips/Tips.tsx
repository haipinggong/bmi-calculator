import { Box } from "@mui/material";
import { styles } from "./Tips.styles";
import iconEating from "../../assets/images/icon-eating.svg";
import iconExercise from "../../assets/images/icon-exercise.svg";
import iconSleep from "../../assets/images/icon-sleep.svg";
import { TipCard } from "./TipCard/TipCard";

export const Tips = () => {
  return (
    <Box sx={styles.container}>
      <TipCard
        icon={iconEating}
        title="Healthy eating"
        description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
      />

      <TipCard
        icon={iconExercise}
        title="Regular exercise"
        description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
      />

      <TipCard
        icon={iconSleep}
        title="Adequate sleep"
        description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
      />
    </Box>
  );
};
