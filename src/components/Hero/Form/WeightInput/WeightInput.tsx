import { Box, TextField } from "@mui/material";
import { styles } from "./WeightInput.styles";

type WeightInputProps = {
  unit: "metric" | "imperial";
};

export const WeightInput = ({ unit }: WeightInputProps) => {
  return (
    <Box sx={styles.inputGroup}>
      {unit === "metric" ? (
        <TextField
          id="weight-metric"
          label="Weight: kg"
          placeholder="0"
          type="number"
          sx={styles.input}
        />
      ) : (
        <>
          <TextField
            id="weight-imperial-st"
            label="Weight: st"
            placeholder="0"
            type="number"
            sx={styles.input}
          />
          <TextField
            id="weight-imperial-lbs"
            label="Weight: lbs"
            placeholder="0"
            type="number"
            sx={styles.input}
          />
        </>
      )}
    </Box>
  );
};
