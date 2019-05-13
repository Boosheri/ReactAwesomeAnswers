import React from 'react';
import { NavLink } from 'react-router-dom';
import { Clock } from './Clock';

export function NavBar(props) {
  return (
    <nav className="NavBar">
      <Clock />
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions/new">
        Ask
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
      <NavLink exact to="/sign_in">
        Sign In
      </NavLink>
    </nav>
  );
}
