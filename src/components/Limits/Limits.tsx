import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./Limits.styles";
import iconGender from "../../assets/images/icon-gender.svg";
import iconAge from "../../assets/images/icon-age.svg";
import iconMuscle from "../../assets/images/icon-muscle.svg";
import iconPregnancy from "../../assets/images/icon-pregnancy.svg";
import iconRace from "../../assets/images/icon-race.svg";
import patternCurvedLineRight from "../../assets/images/pattern-curved-line-right.svg";
import { LimitCard } from "./LimitCard/LimitCard";

export const Limits = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h3" component="h2" sx={styles.title}>
          Limitations of BMI
        </Typography>
        <Typography color="text.secondary" sx={styles.description}>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </Typography>
      </Box>

      <LimitCard
        icon={iconGender}
        title="Gender"
        description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        position="gender"
      />

      {isLargeScreen && (
        <Box
          component="img"
          src={patternCurvedLineRight}
          alt=""
          data-position="curvedLine"
        />
      )}

      <LimitCard
        icon={iconAge}
        title="Age"
        description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        position="age"
      />

      <LimitCard
        icon={iconMuscle}
        title="Muscle"
        description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        position="muscle"
      />

      <LimitCard
        icon={iconPregnancy}
        title="Pregnancy"
        description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        position="pregnancy"
      />

      <LimitCard
        icon={iconRace}
        title="Race"
        description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        position="race"
      />
    </Box>
  );
};
