import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-react-intl'
import * as S from './nav.styled'

export const RightNav = (props) => {
  const intl = useIntl()

  return (
    <S.Ul open={props.open}>
      <li>
        <Link to="/school">{intl.formatMessage({id: "school.title"})}</Link>
      </li>
      <li>
        <Link to="/links">{intl.formatMessage({id: "links.title"})}</Link>
      </li>
      <li>
        <Link to="/videos">{intl.formatMessage({id: "videos.title"})}</Link>
      </li>
      <li>
        <Link to="/about">{intl.formatMessage({id: "about.title"})}</Link>
      </li>
      <li>
        <Link to="/blog/">{intl.formatMessage({id: "blog.title"})}</Link>
      </li>
    </S.Ul>
  )
}

export default RightNav
