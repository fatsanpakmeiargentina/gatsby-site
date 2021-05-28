import React from 'react'
import {
  EmailIcon,
  FacebookIcon,
} from "react-share"
import InstagranIcon from '../icons/InstagramIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import FlickrIcon from '../icons/FlickrIcon'

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
    <a target="_blank" rel="noreferrer" href={facebook}>
      <FacebookIcon size={32} round />
    </a>
    <a target="_blank" rel="noreferrer" href={instagram}>
      <InstagranIcon size={32} round />
    </a>
    <a target="_blank" rel="noreferrer" href={youtube}>
      <YoutubeIcon size={32} round />
    </a>
    <a target="_blank" rel="noreferrer" href={flickr}>
      <FlickrIcon size={32} round />
    </a>
  </div>
)

export default ContactBar
