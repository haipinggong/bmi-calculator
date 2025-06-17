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

  // BMI category function
  function getBmiCategory(bmi: number) {
    if (bmi < 18.5) return "underweight";
    if (bmi < 25) return "a healthy weight";
    if (bmi < 30) return "overweight";
    return "obese";
  }

  // Ideal weight range function
  function getIdealWeightRange() {
    if (unit === "metric") {
      const h = parseFloat(height.cm);
      if (!h) return "";
      const meters = h / 100;
      const min = 18.5 * meters * meters;
      const max = 24.9 * meters * meters;
      return `${min.toFixed(1)}kg - ${max.toFixed(1)}kg`;
    } else {
      const ft = parseFloat(height.ft);
      const inch = parseFloat(height.in);
      const totalInches = (ft ? ft : 0) * 12 + (inch ? inch : 0);
      if (!totalInches) return "";
      const minLbs = (18.5 * totalInches * totalInches) / 703;
      const maxLbs = (24.9 * totalInches * totalInches) / 703;
      // Convert lbs to st/lbs
      function toStLbs(lbs: number) {
        const st = Math.floor(lbs / 14);
        const remLbs = Math.round(lbs - st * 14);
        return `${st}st ${remLbs}lbs`;
      }
      return `${toStLbs(minLbs)} - ${toStLbs(maxLbs)}`;
    }
  }

  const bmiValue = calculateBmi();
  const bmiNum = parseFloat(bmiValue);
  const category = bmiValue ? getBmiCategory(bmiNum) : "";
  const idealRange = getIdealWeightRange();

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

      {bmiValue ? (
        <Box sx={styles.resultContainer}>
          <Box sx={styles.result}>
            <Typography variant="body1" component="h3" color="common.white">
              Your BMI is...
            </Typography>
            <Typography variant="h4" component="h3" color="common.white">
              {bmiValue}
            </Typography>
          </Box>

          <Typography variant="body2" color="common.white">
            {`Your BMI suggests you're ${category}. Your ideal weight is between `}
            <Typography
              variant="body2"
              color="common.white"
              component="span"
              sx={styles.idealRange}
            >
              {idealRange}
            </Typography>
          </Typography>
        </Box>
      ) : (
        <Box sx={styles.emptyContainer}>
          <Typography variant="h4" component="h3" color="common.white">
            Welcome!
          </Typography>
          <Typography variant="body2" color="common.white">
            Enter your height and weight and you'll see your BMI result here
          </Typography>
        </Box>
      )}
    </Box>
  );
};
