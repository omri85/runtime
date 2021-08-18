import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CareerFramework from "./CareerFramework";
import UserView from "./UserView";

export default function Content() {
  return (
    <Switch>
      <Route path='/frameworks' component={CareerFramework} />
      <Route path='/' component={UserView} />
    </Switch>
  );
}
