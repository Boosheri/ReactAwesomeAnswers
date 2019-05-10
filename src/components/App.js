import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { Clock } from "./Clock";
import { WelcomePage } from "./WelcomePage";

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
function App() {
  return (
    <BrowserRouter>
      <div>
        <Clock />
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </BrowserRouter>
  );
}

export { App };
