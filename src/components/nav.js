import React from 'react'
import { Link } from 'gatsby-plugin-react-intl'
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
        <GatsbyImage
          alt={title}
          image={getImage(icon)}
        />
        <p>
          {title}
        </p>
      </Logo>
    </Nav>
    <Burger />
    {children}
  </>
)

export default Navbar
