import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
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
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </BrowserRouter>
  );
}

export { App };
