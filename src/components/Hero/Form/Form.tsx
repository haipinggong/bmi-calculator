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

type HeightState = {
  cm: string;
  ft: string;
  in: string;
};

type WeightState = {
  kg: string;
  st: string;
  lbs: string;
};

export const Form = () => {
  const [unit, setUnit] = useState<Unit>("metric");
  const [height, setHeight] = useState<HeightState>({ cm: "", ft: "", in: "" });
  const [weight, setWeight] = useState<WeightState>({
    kg: "",
    st: "",
    lbs: "",
  });

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value as Unit);
  };

  // BMI calculation function
  function calculateBmi() {
    if (unit === "metric") {
      const h = parseFloat(height.cm);
      const w = parseFloat(weight.kg);
      if (!h || !w) return "";
      // height in meters
      const meters = h / 100;
      if (meters === 0) return "";
      return (w / (meters * meters)).toFixed(2);
    } else {
      // imperial: ft/in for height, st/lbs for weight
      const ft = parseFloat(height.ft);
      const inch = parseFloat(height.in);
      const st = parseFloat(weight.st);
      const lbs = parseFloat(weight.lbs);
      // convert height to inches
      const totalInches = (ft ? ft : 0) * 12 + (inch ? inch : 0);
      // convert weight to lbs
      const totalLbs = (st ? st : 0) * 14 + (lbs ? lbs : 0);
      if (!totalInches || !totalLbs) return "";
      return ((totalLbs * 703) / (totalInches * totalInches)).toFixed(2);
    }
  }

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

      <Box sx={styles.inputsContainer}>
        <HeightInput unit={unit} value={height} onChange={setHeight} />
        <WeightInput unit={unit} value={weight} onChange={setWeight} />
      </Box>

      <Box sx={styles.resultSection}>
        <Typography variant="h4" component="h3" color="common.white">
          {calculateBmi() ? `Your BMI: ${calculateBmi()}` : "Welcome!"}
        </Typography>
        <Typography variant="body2" color="common.white">
          {calculateBmi()
            ? "This is your calculated Body Mass Index."
            : `Enter your height and weight and you'll see your BMI result here`}
        </Typography>
      </Box>
    </Box>
  );
};
