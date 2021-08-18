import { Route, Switch } from "react-router-dom";
import OneOnOneAnalyticsView from "./OneOnOneAnalyticsViews";

export default function Analytics() {
  return (
    <Switch>
      <Route path='/analytics/oneOnOne' component={OneOnOneAnalyticsView} />
    </Switch>
  );
}
