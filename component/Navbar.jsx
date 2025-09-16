import { NavbarContainer, NavList } from '@/style/CustomBox.style'
import React from 'react'

const Navbar = () => {
  return (
    <NavbarContainer>
      <header>Clunex</header>
      <NavList>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
      </NavList>
    </NavbarContainer>
  )
}

export default Navbar
