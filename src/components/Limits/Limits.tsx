import { Box, Typography, Card } from "@mui/material";
import { styles } from "./Limits.styles";
import iconGender from "../../assets/images/icon-gender.svg";
import iconAge from "../../assets/images/icon-age.svg";
import iconMuscle from "../../assets/images/icon-muscle.svg";
import iconPregnancy from "../../assets/images/icon-pregnancy.svg";
import iconRace from "../../assets/images/icon-race.svg";

export const Limits = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        Limitations of BMI
      </Typography>
      <Typography sx={styles.limitDescription}>
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </Typography>

      <Box sx={styles.content}>
        <Box sx={styles.limitsContainer}>
          <Card sx={styles.limitCard}>
            <Box sx={styles.limitContent}>
              <Box
                component="img"
                src={iconGender}
                alt="Gender icon"
                sx={styles.limitIcon}
              />
              <Typography variant="h3" sx={styles.limitTitle}>
                Gender
              </Typography>
            </Box>
            <Typography sx={styles.limitDescription}>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </Typography>
          </Card>

          <Card sx={styles.limitCard}>
            <Box sx={styles.limitContent}>
              <Box
                component="img"
                src={iconAge}
                alt="Age icon"
                sx={styles.limitIcon}
              />
              <Typography variant="h3" sx={styles.limitTitle}>
                Age
              </Typography>
            </Box>
            <Typography sx={styles.limitDescription}>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </Typography>
          </Card>

          <Card sx={styles.limitCard}>
            <Box sx={styles.limitContent}>
              <Box
                component="img"
                src={iconMuscle}
                alt="Muscle icon"
                sx={styles.limitIcon}
              />
              <Typography variant="h3" sx={styles.limitTitle}>
                Muscle
              </Typography>
            </Box>
            <Typography sx={styles.limitDescription}>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </Typography>
          </Card>

          <Card sx={styles.limitCard}>
            <Box sx={styles.limitContent}>
              <Box
                component="img"
                src={iconPregnancy}
                alt="Pregnancy icon"
                sx={styles.limitIcon}
              />
              <Typography variant="h3" sx={styles.limitTitle}>
                Pregnancy
              </Typography>
            </Box>
            <Typography sx={styles.limitDescription}>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </Typography>
          </Card>

          <Card sx={styles.limitCard}>
            <Box sx={styles.limitContent}>
              <Box
                component="img"
                src={iconRace}
                alt="Race icon"
                sx={styles.limitIcon}
              />
              <Typography variant="h3" sx={styles.limitTitle}>
                Race
              </Typography>
            </Box>
            <Typography sx={styles.limitDescription}>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
