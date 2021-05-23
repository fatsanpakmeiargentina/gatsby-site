import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

const Template = ({ title, intl, children }) => (
  <>
    <Navigation title={title} intl={intl} />
    <Container>
      {children}
    </Container>
  </>
)

export default Template
