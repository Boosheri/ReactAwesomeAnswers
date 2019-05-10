import React, { Component } from "react";
import { setInterval, clearInterval } from "timers";

export class Clock extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     dateTime: new Date()
  //   };
  // }

  // Shortcut for setting a property on `this` during
  // constructor call.

  // We can use this syntax in a class-based component to initialize
  // its `state`.
  state = {
    dateTime: new Date()
  };

  componentDidMount() {
    // This method is called the first time the component is
    // rendered in the DOM. Use it to fetch, add some event listeners,
    // connect to a socket, etc.
    console.log("Clock is mounted!");

    this.intervalId = setInterval(() => {
      this.setState({
        dateTime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    // This method is called before the component is removed from
    // the DOM. Use it to clean up setInterval, setTimeouts, event
    // listeners, etc.
    console.log("Clock is unmounted!");
    clearInterval(this.intervalId);
  }

  render() {
    // You are only allowed to return strings or React elements
    // from expressions in { ... } inside JSX.
    return <span>{this.state.dateTime.toLocaleTimeString()}</span>;
    // return <span>{this.state.dateTime.toLocaleString()}</span>; // For date AND time
  }
}
