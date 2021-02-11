import React, { useState } from "react";
import { Route, Switch } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyles";
import Nav from "./components/Nav";

function App() {
  const [NavPosition, setNavPosition] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav NavPosition={NavPosition} setNavPosition={setNavPosition} />
      <Switch>
        <Route path="/" exact>
          <HomePage NavPosition={NavPosition} setNavPosition={setNavPosition} />
        </Route>
        <Route path="/projects" exact>
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
