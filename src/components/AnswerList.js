import React from "react";
import { AnswerDetails } from "./AnswerDetails";

export function AnswerList(props) {
  const { answers } = props;

  return (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: 0
      }}
    >
      {answers.map(answer => (
        <li key={answer.id}>
          {/* <AnswerDetails
            body={answer.body}
            author={answer.author}
            created_at={answer.created_at}
          /> */}
          {/*
            In JSX, you can use the spread operator
            to pass properties of an object as props to the React element
          */}
          <AnswerDetails
            onDeleteClick={props.onAnswerDeleteClick}
            {...answer}
          />
        </li>
      ))}
    </ul>
  );
}
