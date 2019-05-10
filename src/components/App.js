import React from "react";
import { QuestionShowPage } from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { Clock } from "./Clock";


// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
function App() {
  return (
    <div>
        <Clock />
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
}

export { App };
