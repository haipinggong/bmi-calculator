import { Hero } from "./components/Hero/Hero";
import { YourResults } from "./components/YourResults/YourResults";
import { Tips } from "./components/Tips/Tips";
import { Limits } from "./components/Limits/Limits";

function App() {
  return (
    <>
      <Hero
        title="Body Mass Index Calculator"
        description="Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being."
      />
      <YourResults />
      <Tips />
      <Limits />
    </>
  );
}

export default App;
