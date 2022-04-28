import React from 'react'
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu
} from '../Common/AppNavBarElements'

const AppNavbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h6
            style={{
              display: 'contents'
            }}
          >
            Algo-Reach
          </h6>
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to='/create'>Create Event</NavLink>
          <NavLink to='/guest'>RSVP</NavLink>
          <NavLink to='/checkin'>Checkin</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default AppNavbar
