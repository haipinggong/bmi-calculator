import { Box, TextField, Typography } from "@mui/material";
import { styles } from "./WeightInput.styles";

type WeightInputProps = {
  unit: "metric" | "imperial";
};

export const WeightInput = ({ unit }: WeightInputProps) => {
  return (
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
  );
};
