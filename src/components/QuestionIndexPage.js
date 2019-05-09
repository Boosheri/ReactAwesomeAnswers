import React, { Component } from "react";
import data from "../questionsData";

export class QuestionIndexPage extends Component {
  render() {
    return (
      <main className="Page">
        <h2>Questions</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {data.map(question => (
            <li key={question.id}>
              <a href="">{question.title}</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
