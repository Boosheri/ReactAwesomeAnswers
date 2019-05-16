import React, { Component } from "react";
import { Question } from "../api/question";
import { QuestionForm } from "./QuestionForm";

export class QuestionNewPage extends Component {
  state = {
    errors: []
  };

  createQuestion(params) {
    Question.create(params).then(data => {
      if (!data.errors) {
        // The `history` prop is provide by the <Route>
        // component. It has a bunch of methods to manipulate
        // browser. You can use `push` to direct a user to any
        // page in our app.
        this.props.history.push(`/questions/${data.id}`);
      } else {
        this.setState({
          errors: data.errors
        });
      }
    });
  }

  render() {
    return (
      <main className="Page">
        <h1>Ask a Question</h1>

        {/* <FormErrors errors={this.state.errors} /> */}

        <QuestionForm
          errors={this.state.errors}
          onSubmit={params => this.createQuestion(params)}
        />
      </main>
    );
  }
}
