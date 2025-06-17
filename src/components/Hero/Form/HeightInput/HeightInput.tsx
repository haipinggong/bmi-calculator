import { Box, TextField } from "@mui/material";
import { styles } from "./HeightInput.styles";

type HeightInputProps = {
  unit: "metric" | "imperial";
};

export const HeightInput = ({ unit }: HeightInputProps) => {
  return (
    <Box sx={styles.inputGroup}>
      {unit === "metric" ? (
        <TextField
          id="height-metric"
          label="Height: cm"
          placeholder="0"
          type="number"
          sx={styles.input}
        />
      ) : (
        <>
          <TextField
            id="height-imperial-ft"
            label="Height: ft"
            placeholder="0"
            type="number"
            sx={styles.input}
          />
          <TextField
            id="height-imperial-in"
            label="Height: in"
            placeholder="0"
            type="number"
            sx={styles.input}
          />
        </>
      )}
    </Box>
  );
};
