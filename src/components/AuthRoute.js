import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthRoute = (props) => {
  // We rename the component variable to Component because
  // we want to make clear that Component is a user defined
  // react component, and is named with PascalCase,
  // same as all user defined react components
  const { isAuthenticated, component: Component, ...routeProps } = props;
  // when destructuring from an object, we can rename property names of the object.
  // So, when in the past we were stuck with a variable named based on the object properties
  // we can rename the variable use the `:`
  // This is being done above to rename the variable `component` to `Component`
  // another example at the bottom of the page

  // routeProps is going to be an object with keys like:
  // path, exact, and anything else a Route Component might require
  // If isAuthenticated is  false...
  if (!isAuthenticated) {
    // redirect users to the sign in page
    return <Redirect to="/sign_in" />;
  } else {
    // Otherwise, allow users to correctly navigate to the page they want
    // this is done by rendering the Route component and passing it all of the props
    //  that it needs
    return <Route {...routeProps} component={Component} />;
  }
};

// Destructuring example
// const object = {
//   name: 'Max',
//   age: 77,
// };

// const { name: firstName, age } = object;
// now I have a variable called firstName, and NOT a variable called name
// name === undefined
// firstName === 'Max'
