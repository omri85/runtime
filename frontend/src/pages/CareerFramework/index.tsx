import { Route, Switch } from "react-router-dom";
import CareerFrameworkView from "./CareerFrameworkView";
import ChooseSource from "./Wizard/ChooseSource";

export default function CareerFramework() {
  return (
    <Switch>
      <Route path='/framework' component={CareerFrameworkView} />
      <Route path='/' component={ChooseSource} />
    </Switch>
  );
}
