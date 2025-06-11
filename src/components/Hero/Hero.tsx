import { Box } from "@mui/material";
import { styles } from "./Hero.styles";
import logo from "../../assets/images/logo.svg";
import { Header } from "./Header/Header";
import { Form } from "./Form/Form";

export const Hero = () => {
  return (
    <Box component="section" sx={styles.heroContainer}>
      <Box
        component="img"
        src={logo}
        alt="BMI Calculator Logo"
        sx={styles.logo}
      />
      <Box sx={styles.heroContent}>
        <Header />
        <Form />
      </Box>
    </Box>
  );
};
