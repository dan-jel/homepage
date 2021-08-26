import React from "react";
import { Route, Switch } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import HomePageDe from "./pages/HomePageDe";
import HomePageEng from "./pages/HomePageEng";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <HomePageDe />
        </Route>
        <Route path="/eng" exact>
          <HomePageEng />
        </Route>
        <Route path="/projects" exact>
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
