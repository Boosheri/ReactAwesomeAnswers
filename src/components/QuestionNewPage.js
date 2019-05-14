import React, { Component } from "react";
import { Question } from "../api/question";
import { Session } from "../api/session";
import { FormErrors } from "./FormErrors";

export class QuestionNewPage extends Component {
  state = {
    errors: []
  };

  createQuestion(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Question.create({
      title: formData.get("title"),
      body: formData.get("body")
    }).then(data => {
      if (!data.errors) {
        // The `history` prop is provide by the <Route>
        // component. It has a bunch of methods to manipulate
        // browser. You can use `push` to direct a user to any
        // page in our app.
        this.props.history.push(`/questions/${data.id}`);
      } else {
        console.log(data.errors);
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

        <FormErrors errors={this.state.errors} />

        <form onSubmit={event => this.createQuestion(event)}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input name="title" id="title" />
          </div>

          <div>
            <label htmlFor="body">Body</label> <br />
            <textarea name="body" id="body" cols="60" rows="4" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    );
  }
}
