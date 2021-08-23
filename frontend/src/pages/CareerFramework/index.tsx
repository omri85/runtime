import { Route, Switch } from "react-router-dom";
import CareerFramework from "./CareerFrameworkView/CareerFramework";
import CareerFrameworks from "./CareerFrameworkView";
import CareerPathStage from "./CareerPathStage";
import ChooseSource from "./Wizard/ChooseSource";
import CareerFrameworkWizard from "./Wizard";
import CareerPath from "./CareerFrameworkView/CareerPathsView/CareerPath";
import ChooseCareerPathName from "./CareerFrameworkView/CareerPathsView/ChooseCareerPathName";

export default function CareerFrameworkRouter() {
  return (
    <Switch>
      <Route
        path='/frameworks/:id/stages/:stageId'
        component={CareerPathStage}
      />
      <Route path='/frameworks/new' component={CareerFrameworkWizard} />
      <Route
        path='/frameworks/:fid/paths/:id/stages'
        component={CareerPathStage}
      />
      <Route
        path='/frameworks/:fid/paths/new'
        component={ChooseCareerPathName}
      />
      <Route path='/frameworks/:fid/paths/:id' component={CareerPath} />
      <Route path='/frameworks/:id' component={CareerFramework} />
      <Route path='/frameworks' component={CareerFrameworks} />
      <Route path='/' component={CareerFrameworks} />
    </Switch>
  );
}
