import { CareerFrameworkModel } from "../../../models/CareerFrameworkModel";

export type CareerFrameworkWizardType = {
  nextStage: () => void;
  careerFramework: CareerFrameworkModel;
};
