import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-react-intl'
import * as styles from './navigation.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Navigation = ({ title, icon }) => {
  const intl = useIntl()

  return (
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">
            <div className={styles.logo}>
              <GatsbyImage
                alt={title}
                image={getImage(icon)}
              />
              {title}
            </div>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/school">{intl.formatMessage({id: "school.title"})}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/links">{intl.formatMessage({id: "links.title"})}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/videos">{intl.formatMessage({id: "videos.title"})}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about">{intl.formatMessage({id: "about.title"})}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">{intl.formatMessage({id: "blog.title"})}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
