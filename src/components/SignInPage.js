import React from "react"; // 'react'
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Session } from "../api/session";

export function SignInPage(props) {
  const { onSignIn } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);
    const signInParams = {
      email: fD.get("email"),
      password: fD.get("password")
    };
    Session.create(signInParams).then(response => {
      if (response.id) {
        onSignIn();
        // Once we are successfully signed in, and the app has a user in our state
        // navigate to '/questions'
        props.history.push("/questions");
      }
    });
  }
  return (
    <main className="Page">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField label="Email" type="email" name="email" />
        </div>
        <div>
          <TextField label="Password" type="password" name="password" />
        </div>
        <PrimaryButton
          iconProps={{ iconName: "Cloud" }}
          text="Sign In"
          type="submit"
        />
      </form>
    </main>
  );
}

// export default SignInPage;
