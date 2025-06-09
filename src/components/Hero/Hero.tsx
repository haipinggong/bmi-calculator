import { Box } from "@mui/material";
import { styles } from "./Hero.styles";
import logo from "../../assets/images/logo.svg";
import { Header } from "./Header/Header";
import { Form } from "./Form/Form";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <Box component="section" sx={styles.heroContainer}>
      <Box
        component="img"
        src={logo}
        alt="BMI Calculator Logo"
        sx={styles.logo}
      />
      <Header title={title} description={description} />
      <Form />
    </Box>
  );
};
