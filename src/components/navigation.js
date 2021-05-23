import React from 'react'
import { Link } from 'gatsby-plugin-react-intl'
import * as styles from './navigation.module.css'
import Language from './language.js'

const Navigation = ({ title, intl }) => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">{title}</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/school">{intl.formatMessage({id: "school.title"})}</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/links">{intl.formatMessage({id: "links.title"})}</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/media">{intl.formatMessage({id: "media.title"})}</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about">{intl.formatMessage({id: "about.title"})}</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">{intl.formatMessage({id: "blog.title"})}</Link>
      </li>
      <li className={styles.navigationItem}>
        <Language />
      </li>
    </ul>
  </nav>
)

export default Navigation
