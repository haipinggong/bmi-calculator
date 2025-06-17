import { Box } from "@mui/material";
import { Hero } from "./components/Hero/Hero";
import { YourResults } from "./components/YourResults/YourResults";
import { Tips } from "./components/Tips/Tips";
import { Limits } from "./components/Limits/Limits";

function App() {
  return (
    <Box component="main">
      <Hero />
      <YourResults />
      <Tips />
      <Limits />
    </Box>
  );
}

export default App;
