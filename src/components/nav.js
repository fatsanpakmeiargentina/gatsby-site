import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Nav,
  Logo,
} from './nav.styled'

import Burger from './burger'

export const Navbar = ({
  title,
  icon,
  children,
}) => (
  <>
    <Nav>
      <Logo>
        <a href="/">
          <GatsbyImage
            alt={title}
            image={getImage(icon)}
          />
        </a>
        <a href="/">
          <p>
            {title}
          </p>
        </a>
      </Logo>
    </Nav>
    <Burger />
    {children}
  </>
)

export default Navbar
