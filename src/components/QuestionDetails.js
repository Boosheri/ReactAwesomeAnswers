import React from "react";
// Whenever you use JSX in file, you must do the above
// import otherwise the converted JSX tags into
// React.createElement(...) won't work because
// `React` will be undefined.

export function QuestionDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        By {props.author && props.author.full_name}
      </p>
      <p>
        <small>Seen {props.view_count} time(s)</small> â{" "}
        <small>Created at {props.created_at}</small>
      </p>
    </div>
  );
}
