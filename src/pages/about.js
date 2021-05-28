import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import * as styles from './about.module.css'
import { useIntl } from 'gatsby-plugin-react-intl'
import ContactBar from '../components/contact-bar'

const AboutIndex = ({
  location,
  data: {
    contentfulSiteMetadata: {
      name,
      icon,
      instagram,
      email,
      facebook,
      flickr,
      youtube,
      direction,
    },
  },
}) => {
  const intl = useIntl()

  return (
    <Layout location={location} title={name} icon={icon}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${intl.formatMessage({id: "about.title"})} | ${name}`} />
        <div className="wrapper">
          <h2>{intl.formatMessage({id: "about.location.title"})}</h2>
          <p>{intl.formatMessage({id: "about.location.description"})}</p>
          <h2>{intl.formatMessage({id: "about.contactUs.title"})}</h2>
          <p>{intl.formatMessage({id: "about.contactUs.description"})}</p>
          <ContactBar
            email={email}
            facebook={facebook}
            flickr={flickr}
            youtube={youtube}
            instagram={instagram}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutQuery {
    contentfulSiteMetadata {
      name
      instagram
      email
      facebook
      flickr
      youtube
      direction {
        lat
        lon
      }
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
