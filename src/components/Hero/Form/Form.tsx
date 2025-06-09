import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { styles } from "./Form.styles";
import { useState } from "react";
import { HeightInput } from "./HeightInput/HeightInput";
import { WeightInput } from "./WeightInput/WeightInput";

type Unit = "metric" | "imperial";

export const Form = () => {
  const [unit, setUnit] = useState<Unit>("metric");

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value as Unit);
  };

  return (
    <Box component="form" sx={styles.formContainer}>
      <Typography variant="h4" component="h2">
        Enter your details below
      </Typography>
      <RadioGroup
        row
        value={unit}
        onChange={handleUnitChange}
        sx={styles.radioGroup}
      >
        <FormControlLabel
          value="metric"
          control={<Radio />}
          label={<Typography sx={styles.radioLabel}>Metric</Typography>}
        />
        <FormControlLabel
          value="imperial"
          control={<Radio />}
          label={<Typography sx={styles.radioLabel}>Imperial</Typography>}
        />
      </RadioGroup>

      <HeightInput unit={unit} />
      <WeightInput unit={unit} />

      <Box sx={styles.resultSection}>
        <Typography sx={styles.resultTitle}>Welcome!</Typography>
        <Typography sx={styles.resultDescription}>
          Enter your height and weight and you'll see your BMI result here
        </Typography>
      </Box>
    </Box>
  );
};
