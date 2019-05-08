import React from "react";
// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method
// or JSX tags.

// Your React component's names must be in PascalCase. Those whose
// names do not begin with an upper case letter will interpreted
// as plain HTML tag.
function AnswerDetails(props) {
  return (
    <div>
      <p>
        {props.body}
        <br />
        By {props.author.full_name}
        <br />
        <small>Answered {props.created_at}</small>
      </p>
    </div>
  );
}

export { AnswerDetails };
