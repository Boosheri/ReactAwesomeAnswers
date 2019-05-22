import React from "react"
import { NavLink } from "react-router-dom"
import { Persona } from "office-ui-fabric-react/lib/Persona"
import { Clock } from "./Clock"
import { Session } from "../api/session"

export function NavBar(props) {
  const { currentUser, onSignOut } = props
  function handleSignout(event) {
    event.preventDefault()

    Session.destroy().then(() => {
      // ... do something after we destroy session
      onSignOut()
    })
  }

  const avatarUrl =
    currentUser && currentUser.avatars && currentUser.avatars.length > 0
      ? currentUser.avatars[currentUser.avatars.length - 1].url
      : undefined

  let initials

  if (currentUser) {
    initials =
      currentUser.first_name[0].toUpperCase() +
      currentUser.last_name[0].toUpperCase()
  }

  return (
    <nav className="NavBar">
      <Clock />
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
      {/* To conditionally render in React, you can use a ternary operator */}
      {currentUser ? (
        <React.Fragment>
          {/* <-- this is a react fragment that allows you to write 
          multiple components beside each other without wrapping them in a div or some 
          other container. This is so that it doesn't mess up styling/formatting/layout
          And so you don't need to have an arbitrary html element in your NavBar
          The short form for <React.Fragment></React.Fragment> is <></>
        */}
          <NavLink exact to="/questions/new">
            Ask
          </NavLink>

          <a onClick={handleSignout}>Sign Out</a>

          <NavLink exact to={`/users/${currentUser.id}/edit`}>
            {currentUser.full_name}
          </NavLink>
          <Persona imageUrl={avatarUrl} imageInitials={initials} />
        </React.Fragment>
      ) : (
        <>
          <NavLink exact to="/sign_in">
            Sign In
          </NavLink>
          <NavLink exact to="/sign_up">
            Sign Up
          </NavLink>
        </>
      )}
    </nav>
  )
}
