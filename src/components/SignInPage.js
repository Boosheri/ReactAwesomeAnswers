import React from 'react'; // 'react'
import { Session } from '../api/session';

export function SignInPage(props) {
  const { onSignIn } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);
    const signInParams = {
      email: fD.get('email'),
      password: fD.get('password'),
    };
    Session.create(signInParams).then((user) => onSignIn(user));
  }
  return (
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </main>
  );
}

// export default SignInPage;
