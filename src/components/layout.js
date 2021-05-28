import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

const Template = ({ title, icon, children }) => (
  <>
    <Navigation title={title} icon={icon}/>
    <Container>
      {children}
    </Container>
  </>
)

export default Template
