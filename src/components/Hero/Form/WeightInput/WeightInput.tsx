import { Box, TextField } from "@mui/material";
import { styles } from "./WeightInput.styles";

type WeightInputProps = {
  unit: "metric" | "imperial";
  value: { kg: string; st: string; lbs: string };
  onChange: (value: { kg: string; st: string; lbs: string }) => void;
};

export const WeightInput = ({ unit, value, onChange }: WeightInputProps) => {
  return (
    <Box sx={styles.inputGroup}>
      {unit === "metric" ? (
        <TextField
          id="weight-metric"
          label="Weight: kg"
          placeholder="0"
          type="number"
          sx={styles.input}
          value={value.kg}
          onChange={(e) => onChange({ ...value, kg: e.target.value })}
        />
      ) : (
        <>
          <TextField
            id="weight-imperial-st"
            label="Weight: st"
            placeholder="0"
            type="number"
            sx={styles.input}
            value={value.st}
            onChange={(e) => onChange({ ...value, st: e.target.value })}
          />
          <TextField
            id="weight-imperial-lbs"
            label="Weight: lbs"
            placeholder="0"
            type="number"
            sx={styles.input}
            value={value.lbs}
            onChange={(e) => onChange({ ...value, lbs: e.target.value })}
          />
        </>
      )}
    </Box>
  );
};
