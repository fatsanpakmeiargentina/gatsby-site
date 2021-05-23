import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import * as styles from './about.module.css'
import { injectIntl } from 'gatsby-plugin-react-intl'
import ContactBar from '../components/contact-bar'

const AboutIndex = ({
  intl,
  location,
  data: {
    contentfulSiteMetadata: {
      name,
      instagram,
      email,
      facebook,
      flickr,
      youTube,
      direction,
    },
  },
}) => {
  return (
    <Layout location={location} title={name} intl={intl}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${intl.formatMessage({id: "about.title"})} | ${name}`} />
        <div className={styles.title}>{intl.formatMessage({id: "about.title"})}</div>
        <div className="wrapper">
          <h2>{intl.formatMessage({id: "about.location.title"})}</h2>
          <p>{intl.formatMessage({id: "about.location.description"})}</p>
          <h2>{intl.formatMessage({id: "about.contactUs.title"})}</h2>
          <p>{intl.formatMessage({id: "about.contactUs.description"})}</p>
          <ContactBar email={email} facebook={facebook} />
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(AboutIndex)

export const pageQuery = graphql`
  query AboutQuery {
    contentfulSiteMetadata {
      name
      instagram
      email
      facebook
      flickr
      youTube
      direction {
        lat
        lon
      }
    }
  }
`
