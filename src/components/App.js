import React from "react"
import { QuestionShowPage } from "./QuestionShowPage"

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
function App() {
  return (
    <div>
      <QuestionShowPage />
    </div>
  );
}

export { App }
