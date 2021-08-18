import { Route, Switch } from "react-router-dom";
import CareerFrameworkView from "./CareerFrameworkView";
import CareerFrameworksView from "./CareerFrameworkView/CareerFrameworksView";
import CareerPathStage from "./CareerPathStage";
import ChooseSource from "./Wizard/ChooseSource";

export default function CareerFramework() {
  return (
    <Switch>
      <Route
        path='/frameworks/:id/stages/:stageId'
        component={CareerPathStage}
      />
      <Route path='/frameworks/new' component={ChooseSource} />
      <Route path='/frameworks/:id' component={CareerFrameworkView} />
      <Route path='/frameworks' component={CareerFrameworksView} />
    </Switch>
  );
}
