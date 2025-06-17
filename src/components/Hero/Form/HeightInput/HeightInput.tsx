import { Box, TextField } from "@mui/material";
import { styles } from "./HeightInput.styles";

type HeightInputProps = {
  unit: "metric" | "imperial";
  value: { cm: string; ft: string; in: string };
  onChange: (value: { cm: string; ft: string; in: string }) => void;
};

export const HeightInput = ({ unit, value, onChange }: HeightInputProps) => {
  return (
    <Box sx={styles.inputGroup}>
      {unit === "metric" ? (
        <TextField
          id="height-metric"
          label="Height: cm"
          placeholder="0"
          type="number"
          sx={styles.input}
          value={value.cm}
          onChange={(e) => onChange({ ...value, cm: e.target.value })}
        />
      ) : (
        <>
          <TextField
            id="height-imperial-ft"
            label="Height: ft"
            placeholder="0"
            type="number"
            sx={styles.input}
            value={value.ft}
            onChange={(e) => onChange({ ...value, ft: e.target.value })}
          />
          <TextField
            id="height-imperial-in"
            label="Height: in"
            placeholder="0"
            type="number"
            sx={styles.input}
            value={value.in}
            onChange={(e) => onChange({ ...value, in: e.target.value })}
          />
        </>
      )}
    </Box>
  );
};
