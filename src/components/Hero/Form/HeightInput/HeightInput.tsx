import { Box, TextField, Typography } from "@mui/material";
import { styles } from "./HeightInput.styles";

type HeightInputProps = {
  unit: "metric" | "imperial";
};

export const HeightInput = ({ unit }: HeightInputProps) => {
  return (
    <Box sx={styles.inputGroup}>
      <Typography component="label" variant="body2" sx={styles.label}>
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
  );
};
