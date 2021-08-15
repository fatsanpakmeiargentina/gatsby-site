import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useIntl } from 'gatsby-plugin-react-intl'
import Layout from '../components/layout'

const NotFound = ({
  location,
  data: {
    contentfulSiteMetadata: {
      name,
      icon,
    },
  },
}) => {
  const intl = useIntl()

  return (
    <Layout location={location} title={name} icon={icon}>
        <div style={{ background: '#fff' }}>
          <Helmet
            title={`${intl.formatMessage({id: "notFound.title"})} | ${name}`}
            htmlAttributes={{
              lang: intl.locale,
            }}
          />
          <div className="wrapper">
            <h2>{intl.formatMessage({id: "notFound.title"})}</h2>
            <p>{intl.formatMessage({id: "notFound.description"})}</p>
          </div>
        </div>
    </Layout>
  )
}

export default NotFound

export const pageQuery = graphql`
  query NotFoundQuery {
    contentfulSiteMetadata {
      name
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
