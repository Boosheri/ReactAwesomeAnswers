import React, { Component } from "react";
import { AnswerDetails } from "./AnswerDetails";
import { AnswerList } from "./AnswerList";
import { QuestionDetails } from "./QuestionDetails";

import questionData from "../questionData";

// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
export class QuestionShowPage extends Component {
  render() {
    return (
      <main className="Page">
        <QuestionDetails
          title="What's your favourite colour?"
          body="Red, green, blue, seafoam green, turquoise, etc."
          author={{ full_name: "Bridge Troll" }}
          view_count={100}
          created_at={new Date().toLocaleString()}
        />
        <h2>Answers</h2>
        <AnswerList answers={questionData.answers} />
      </main>
    );
  }
}
