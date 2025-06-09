import { Typography } from "@mui/material";
import { styles } from "./Header.styles";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <>
      <Typography variant="h1" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="body1" sx={styles.description}>
        {description}
      </Typography>
    </>
  );
};
