import { Route, Switch } from "react-router-dom";
import CareerFramework from "./CareerFrameworkView/CareerFramework";
import CareerFrameworks from "./CareerFrameworkView";
import CareerPathStage from "./CareerFrameworkView/CareerPathsView/CareerPathStage/CareerPathStage";
import ChooseSource from "./Wizard/ChooseSource";
import CareerFrameworkWizard from "./Wizard";
import CareerPath from "./CareerFrameworkView/CareerPathsView/CareerPath";
import ChooseCareerPathName from "./CareerFrameworkView/CareerPathsView/ChooseCareerPathName";
import ChooseCareerPathSource from "./CareerFrameworkView/CareerPathsView/ChooseCareerPathSource";

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
        component={ChooseCareerPathSource}
      />
      <Route path='/frameworks/:fid/paths/:id' component={CareerPath} />
      <Route path='/frameworks/:id' component={CareerFramework} />
      <Route path='/frameworks' component={CareerFrameworks} />
      <Route path='/' component={CareerFrameworks} />
    </Switch>
  );
}
