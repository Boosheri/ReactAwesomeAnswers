import React from "react";
import { FormErrors } from "./FormErrors";

export const QuestionForm = props => {
  const { errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const formNode = event.currentTarget;
    const formData = new FormData(formNode);

    if (typeof props.onSubmit === "function") {
      props.onSubmit({
        title: formData.get("title"),
        body: formData.get("body")
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <FormErrors forField="title" errors={errors} />
        <input name="title" id="title" />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <FormErrors forField="body" errors={errors} />
        <textarea name="body" id="body" cols="60" rows="4" />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
