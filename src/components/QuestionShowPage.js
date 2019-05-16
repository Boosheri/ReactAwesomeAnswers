import React, { Component } from "react";
import { AnswerList } from "./AnswerList";
import { QuestionDetails } from "./QuestionDetails";
import { Question } from "../api/question";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

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
      question: null
      // answers: []
    };
  }

  componentDidMount() {
    // Components rendered by the <Route> component
    // are passed three props: history, location and match.

    // `match` holds a property that contains a URL's params.
    const id = this.props.match.params.id;

    Question.one(id).then(question => {
      this.setState({
        // question: question
        // ð syntax sugar for ð
        question
      });
    });
  }

  // deleteQuestion() { <-- Prototype method
  // Above is much more efficient, use it whenever possible
  deleteQuestion = () => {
    // <-- Instance method (Method on `this`)
    // This is for less efficient, only use when the method must
    // be passed as a callback and `this` is needed.
    if (window.confirm("Are you sure?")) {
      Question.delete(this.state.question.id).then(data => {
        this.props.history.push(`/questions`);
      });
    }
  };

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

        <div>
          {/* <Link to={`/questions/${this.state.question.id}/edit`}>Edit</Link> */}
          <PrimaryButton
            text="Edit"
            iconProps={{ iconName: "edit" }}
            onClick={() =>
              this.props.history.push(
                `/questions/${this.state.question.id}/edit`
              )
            }
          />

          <PrimaryButton
            text="Delete"
            iconProps={{ iconName: "delete" }}
            onClick={this.deleteQuestion}
          />
        </div>

        <h2>Answers</h2>
        <AnswerList
          onAnswerDeleteClick={id => this.deleteAnswer(id)}
          answers={this.state.question.answers}
        />
      </main>
    );
  }
}
