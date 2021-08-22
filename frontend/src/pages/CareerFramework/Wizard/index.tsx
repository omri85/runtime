import { useState } from "react";
import { CareerFrameworkModel } from "../../../models/CareerFrameworkModel";
import ChooseFrameworkName from "./ChooseFrameworkName";
import ChooseSource from "./ChooseSource";

export default function CareerFrameworkWizard() {
  const [stage, setStage] = useState(1);
  const nextStage = () => setStage(stage + 1);
  const careerFramework = new CareerFrameworkModel();

  switch (stage) {
    case 1:
      return (
        <ChooseSource nextStage={nextStage} careerFramework={careerFramework} />
      );
    case 2:
      return (
        <ChooseFrameworkName
          nextStage={nextStage}
          careerFramework={careerFramework}
        />
      );
    default:
      return <div></div>;
  }
}
