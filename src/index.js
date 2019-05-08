import React from "react";
import ReactDOM from "react-dom";
// To use CSS files in a create-react-app based project,
// import the file as you would a JS file.
// A tool called Webpack will take imported CSS and make it appear
// as a <style /> tag in any page where this JS is used.
import "./index.css";
import { App } from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
