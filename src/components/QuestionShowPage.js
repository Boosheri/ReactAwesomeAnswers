import React, { Component } from "react";
import { AnswerDetails } from "./AnswerDetails";
import { AnswerList } from "./AnswerList";
import { QuestionDetails } from "./QuestionDetails";

import questionData from "../questionData";

// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
export class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the `Component` class'
    // constructor with `super` passing it the `props`.
    super(props);

    this.state = {
      question: questionData
      // answers: []
    };
  }

  deleteQuestion() {
    this.setState({
      question: null
    });
  }

  deleteAnswer(id) {
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== id)
      }
    });
  }

  render() {
    if (!this.state.question) {
      return (
        <main className="Page">
          <h2>Question doesn't exist!</h2>
        </main>
      );
    }

    return (
      <main className="Page">
        <QuestionDetails {...this.state.question} />
        <button onClick={() => this.deleteQuestion()}>Delete</button>
        <h2>Answers</h2>
        <AnswerList
          onAnswerDeleteClick={id => this.deleteAnswer(id)}
          answers={this.state.question.answers}
        />
      </main>
    );
  }
}
