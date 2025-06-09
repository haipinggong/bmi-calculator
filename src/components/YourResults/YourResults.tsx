import { Box, Typography } from "@mui/material";
import { styles } from "./YourResults.styles";
import manEating from "../../assets/images/image-man-eating.webp";

export const YourResults = () => {
  return (
    <Box sx={styles.container}>
      <Box
        component="img"
        src={manEating}
        alt="Man eating healthy food"
        sx={styles.image}
      />
      <Box sx={styles.resultContainer}>
        <Typography variant="h2" sx={styles.resultTitle}>
          What your BMI result means
        </Typography>
        <Typography sx={styles.resultDescription}>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </Typography>
      </Box>
    </Box>
  );
};
