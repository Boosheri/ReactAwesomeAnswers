import React from "react";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerDetails } from "./AnswerDetails";

// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
export function QuestionShowPage() {
  return (
    <main>
      <QuestionDetails
        title="What's your favourite colour?"
        body="Red, green, blue, seafoam green, turquoise, etc."
        author={{ full_name: "Bridge Troll" }}
        view_count={100}
        created_at={new Date().toLocaleString()}
      />
      <AnswerDetails
        body="Red."
        author={{ full_name: "King Arthur" }}
        created_at={new Date().toLocaleString()}
      />
    </main>
  );
}
