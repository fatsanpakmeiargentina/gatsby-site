import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { useIntl } from 'gatsby-plugin-react-intl'
import ContactBar from '../components/contact-bar'
import IframeResizer from 'iframe-resizer-react'


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
      cfDirection,
    },
  },
}) => {
  const intl = useIntl()

  return (
    <Layout location={location} title={name} icon={icon}>
      <div style={{ background: '#fff' }}>
        <Helmet
          title={`${intl.formatMessage({id: "about.title"})} | ${name}`}
          htmlAttributes={{
            lang: intl.locale,
          }}
        />
        <div className="wrapper">
          <h2>{intl.formatMessage({id: "about.location.title"})}</h2>
          <p>{intl.formatMessage({id: "about.location.description"})}</p>
          <p>{intl.formatMessage({id: "about.location.laPlataHeadquarter"})}</p>
          <IframeResizer
            width="100%"
            height="500"
            src={`http://maps.google.com/maps?q=${direction.lat},${direction.lon}&z=16&output=embed`}
          />
          <p>{intl.formatMessage({id: "about.location.cfHeadquarter"})}</p>
          <IframeResizer
            width="100%"
            height="500"
            src={`http://maps.google.com/maps?q=${cfDirection.lat},${cfDirection.lon}&z=16&output=embed`}
          />
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
      cfDirection {
        lat
        lon
      }
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
