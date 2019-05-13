import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QuestionIndexPage } from './QuestionIndexPage';
import { QuestionNewPage } from './QuestionNewPage';
import { QuestionShowPage } from './QuestionShowPage';
import { WelcomePage } from './WelcomePage';
import { NavBar } from './NavBar';
import { SignInPage } from './SignInPage';

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
    // this.signInUser = this.signInUser.bind(this);
  }

  // When creating a method that uses the keyword this, sometimes you need to be careful
  // `this` will lose its context when it is "destructured" from its object
  // What we mean by that is when we pass it as a prop to another component
  // like this:
  // <SignInPage onSignIn={this.signInUser} />
  // In the example above, the method is passed as a value to the onSignIn prop of
  // the SignInPage Component.
  // When that function is called within SignInPage, the keyword `this` will have
  // forgotten its context, meaning `this` is undefined
  // You will commonly see an error that says something like:
  // Cannot call function `setState` of undefined
  // In order to address this, you need to make sure that the keyword `this` is bound
  // within the method
  // To do that we can either bind it in the constructor using the `.bind` method
  // Or defined our method like we did below using an arrow function
  signInUser = (user) => {
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <NavBar />
          </header>
          {/* 
            <Route> components inside <Switch> behave differently.
            The first one that matches the URL path is the only
            one that is rendered and the remaining ones are ignored.
          */}
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route
              exact
              path="/sign_in"
              // Anytime you want to render a component that requires a (some) prop(s)
              // and that component is being rendered by a Route component
              // The only way to pass those props to that component
              // is by using a new prop of Route called `render`
              // the render prop takes a function as an argument and returns the component
              // the arguments to that function is an object representing all of the route props
              // Make sure to pass those props on to your component in addition to you
              // specific props
              render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.signInUser} />}
            />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <Route exact path="/questions/new" component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export { App };
