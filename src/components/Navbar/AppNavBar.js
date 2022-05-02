import React from 'react'
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavLinkHeader,
  NavMenu
} from '../Common/AppNavBarElements'

const AppNavbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/'>Algo-Reach Hackathon</NavLink>
          <NavLink to='/guest'>RSVP</NavLink>
          <NavLink to='/checkin'>Checkin</NavLink>

          <NavLink to='/close'>Close Event </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default AppNavbar

{
  /* <h6
            style={{
              display: 'contents'
            }}
          >
            Algo-Reach
          </h6> */
}
