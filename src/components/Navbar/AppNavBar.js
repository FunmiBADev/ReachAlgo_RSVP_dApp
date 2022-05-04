import React from 'react'
import { Nav, NavLink, NavMenu } from '../Common/AppNavBarElements'

const AppNavbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/'>Algo-Reach Hackathon</NavLink>
          <NavLink to='/create'>Create Event </NavLink>
          <NavLink to='/guest'>RSVP</NavLink>
          <NavLink to='/checkin'>Checkin</NavLink>
          <NavLink to='/close'>Close Event </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default AppNavbar
