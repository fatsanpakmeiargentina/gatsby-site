import React from 'react'
import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share"
import InstagramIcon from '../icons/InstagramIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import { ContactBarLink } from './contact-bar.styled'

const ContactBar = ({
  email,
  facebook,
  youtube,
  instagram,
  whatsapp,
}) => (
  <div>
    <ContactBarLink target="_blank" rel="noreferrer" href={`tel:${whatsapp}`}>
      <WhatsappIcon size={32} round />
    </ContactBarLink>
    <ContactBarLink target="_blank" rel="noreferrer" href={`mailto:${email}`}>
      <EmailIcon size={32} round />
    </ContactBarLink>
    <ContactBarLink target="_blank" rel="noreferrer" href={facebook}>
      <FacebookIcon size={32} round />
    </ContactBarLink>
    <ContactBarLink target="_blank" rel="noreferrer" href={instagram}>
      <InstagramIcon size={32} round />
    </ContactBarLink>
    <ContactBarLink target="_blank" rel="noreferrer" href={youtube}>
      <YoutubeIcon size={32} round />
    </ContactBarLink>
  </div>
)

export default ContactBar
