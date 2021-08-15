import React from 'react'
import Container from './container'
import Nav from './nav'
import BaseStyle from './base.styled'

const Template = ({ title, icon, children }) => (
  <>
    <BaseStyle />
    <Nav title={title} icon={icon}/>
    <Container>
      {children}
    </Container>
  </>
)

export default Template
