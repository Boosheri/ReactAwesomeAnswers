import React, { Component } from "react";
import { QuestionForm } from "./QuestionForm";
import { Question } from "../api/question";

export class QuestionEditPage extends Component {
  state = {
    loading: true,
    question: null,
    errors: []
  };

  updateQuestion = params => {
    const { question } = this.state;
    Question.update(question.id, params).then(data => {
      if (data.errors) {
        this.setState({ errors: data.errors });
      } else {
        this.props.history.push(`/questions/${question.id}`);
      }
    });
  };

  loadQuestion() {
    Question.one(this.props.match.params.id)
      .then(question => {
        this.setState({
          question,
          loading: false
        });
        console.log(question);
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.loadQuestion();
  }

  render() {
    const { errors, loading, question } = this.state;

    if (loading) {
      return (
        <main className="Page">
          <h1>Loading...</h1>
        </main>
      );
    }

    return (
      <main className="Page">
        <h1>Edit Question</h1>
        <QuestionForm
          data={question}
          errors={errors}
          onSubmit={this.updateQuestion}
        />
      </main>
    );
  }
}
