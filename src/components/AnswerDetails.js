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
        {/* 
          Using the "style" prop on a base HTML component
          will modify in the style attribute (inline styles.)
        */}
        <small
          style={{
            color: "red",
            fontStyle: "italic"
          }}
        >
          By {props.author.full_name}
        </small>
        <br />
        <small>Answered {props.created_at}</small>
      </p>
      <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>
    </div>
  );
}

export { AnswerDetails };
