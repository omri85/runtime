import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CareerFramework from "./CareerFramework";

export default function Content() {
  return (
    <Router>
      <Route path='/' component={CareerFramework} />
    </Router>
  );
}
