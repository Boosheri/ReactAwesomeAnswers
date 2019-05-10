import React from "react";
import { NavLink } from "react-router-dom";
import { Clock } from "./Clock";

export function NavBar(props) {
  return (
    <nav className="NavBar">
      <Clock
        style={{
          marginRight: "auto"
        }}
      />
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
    </nav>
  );
}
