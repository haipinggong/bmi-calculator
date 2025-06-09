import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { styles } from "./Form.styles";
import { useState } from "react";

type Unit = "metric" | "imperial";

export const Form = () => {
  const [unit, setUnit] = useState<Unit>("metric");

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value as Unit);
  };

  return (
    <Box component="form" sx={styles.formContainer}>
      <Typography variant="h2" sx={styles.header}>
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

      <Box sx={styles.inputGroup}>
        <Typography component="label" sx={styles.label}>
          Height
        </Typography>
        <TextField
          fullWidth
          placeholder="0"
          type="number"
          InputProps={{
            endAdornment: (
              <Typography>{unit === "metric" ? "cm" : "ft"}</Typography>
            ),
          }}
          sx={styles.input}
        />
      </Box>

      <Box sx={styles.inputGroup}>
        <Typography component="label" sx={styles.label}>
          Weight
        </Typography>
        <TextField
          fullWidth
          placeholder="0"
          type="number"
          InputProps={{
            endAdornment: (
              <Typography>{unit === "metric" ? "kg" : "st"}</Typography>
            ),
          }}
          sx={styles.input}
        />
      </Box>

      <Box sx={styles.resultSection}>
        <Typography sx={styles.resultTitle}>Welcome!</Typography>
        <Typography sx={styles.resultDescription}>
          Enter your height and weight and you'll see your BMI result here
        </Typography>
      </Box>
    </Box>
  );
};
