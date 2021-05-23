import React from 'react'
import {
  EmailIcon,
  FacebookIcon,
} from "react-share"

const ContactBar = ({
  email,
  facebook,
  youtube,
  instagram,
  flickr,
}) => (
  <div>
    <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
      <EmailIcon size={32} round />
    </a>
    <a target="_blank" rel="noreferrer" href={`${facebook}`}>
      <FacebookIcon size={32} round />
    </a>
  </div>
)

export default ContactBar
