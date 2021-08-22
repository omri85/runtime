import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Analytics from "./Analytics";
import CareerFrameworkRouter from "./CareerFramework";
import UserView from "./UserView";

export default function Content() {
  return (
    <Switch>
      <Route path='/frameworks' component={CareerFrameworkRouter} />
      <Route path='/analytics' component={Analytics} />
      <Route path='/' component={UserView} />
    </Switch>
  );
}
