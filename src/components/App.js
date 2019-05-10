import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { QuestionNewPage } from "./QuestionNewPage";
import { QuestionShowPage } from "./QuestionShowPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        {/* 
          <Route> components inside <Switch> behave differently.
          The first one that matches the URL path is the only
          one that is rendered and the remaining ones are ignored.
        */}
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/questions" component={QuestionIndexPage} />
          <Route exact path="/questions/new" component={QuestionNewPage} />
          <Route path="/questions/:id" component={QuestionShowPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { App };
