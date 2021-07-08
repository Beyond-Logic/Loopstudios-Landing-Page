import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarHero from "./components/NavbarHero";
import Interactive from "./components/Interactive";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NavbarHero />
          <Interactive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
