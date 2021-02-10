import React from "react";
import { Route, Switch } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/projects" exact>
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
