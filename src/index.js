import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method
// or JSX tags.

// Your React component's names must be in PascalCase. Those whose
// names do not begin with an upper case letter will interpreted
// as plain HTML tag.
function AnswerDetails() {
  return (
    <div>
      <p>
        Red. <br />
        By Ulises Wisozk <br />
        <small>Answered 2 days ago</small>
      </p>
    </div>
  );
}

function QuestionDetails() {
  return (
    <div>
      <h2>What is your favourite color?</h2>
      <p>
        Red, green, blue, magenta, etc. <br />
        By Bridge Troll
      </p>
      <p>
        <small>Seen 10 time(s)</small> â <small>Created 10 days ago</small>
      </p>
    </div>
  );
}

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
function App() {
    return (
      <div>
        <QuestionDetails />
        <AnswerDetails />
      </div>
    );
  }
  
ReactDOM.render(<AnswerDetails />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
