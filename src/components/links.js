import React from 'react'
import { FacebookIcon, EmailIcon } from 'react-share'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './links.module.css'

export const LinkItem = ({
  item: {
    name,
    web,
    facebook,
    email,
    logo
  },
}) => (
  <div className={styles.linkContainer}>
    <h4>{name}</h4>
    <div className={styles.linkItems}>
      <GatsbyImage
        className={styles.linkLogo}
        alt={name}
        image={getImage(logo)}
      />
      {web &&
        <a target="_blank" rel="noreferrer" href={`${web}`}>
          web
        </a>
      }
      {facebook &&
        <a target="_blank" rel="noreferrer" href={`${facebook}`}>
          <FacebookIcon size={32} round />
        </a>
      }
      {email &&
        <a href={`mailto:${email}`}>
          <EmailIcon size={32} round />
        </a>
      }
    </div>
  </div>
)

export const LinkGroup = ({
  intl,
  group: {
    fieldValue: groupName,
    edges: list,
  },
}) => (
  <>
    <h2>{intl.formatMessage({id: `links.types.${groupName}`})}</h2>
    <div className={styles.linkGroup}>
    {
      list.map((link) => (
        <LinkItem
          key={link.node.name}
          item={link.node}
        />
      ))
    }
    </div>
  </>
)
