import { Route, Switch } from "react-router-dom";
import CareerFramework from "./CareerFrameworkView/CareerFramework";
import CareerFrameworks from "./CareerFrameworkView";
import CareerPathStage from "./CareerPathStage";
import ChooseSource from "./Wizard/ChooseSource";
import CareerFrameworkWizard from "./Wizard";

export default function CareerFrameworkRouter() {
  return (
    <Switch>
      <Route
        path='/frameworks/:id/stages/:stageId'
        component={CareerPathStage}
      />
      <Route path='/frameworks/new' component={CareerFrameworkWizard} />
      <Route path='/frameworks/:id' component={CareerFramework} />
      <Route path='/frameworks' component={CareerFrameworks} />
      <Route path='/' component={CareerFrameworks} />
    </Switch>
  );
}
