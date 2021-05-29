import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { useIntl } from 'gatsby-plugin-react-intl'
import { LinkGroup } from '../components/links'

const LinksIndex = ({
  location,
  data: {
    allContentfulExtraLinks: {
      group: links,
    },
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
          title={`${intl.formatMessage({id: "links.title"})} | ${name}`}
          htmlAttributes={{
            lang: intl.locale,
          }}
        />
        <div className="wrapper">
        {
          links.map((group) => {
            return (
              <LinkGroup
                key={group.fieldValue}
                intl={intl}
                group={group}
              >
              </LinkGroup>
            )
          })
        }
        </div>
      </div>
    </Layout>
  )
}

export default LinksIndex

export const pageQuery = graphql`
  query LinksQuery($locale: String) {
    allContentfulExtraLinks(
      filter: {node_locale: {eq: $locale}}
      sort: {fields: order}
    ) {
      group(field: type) {
        edges {
          node {
            id
            name
            web
            facebook
            email
            logo {
              gatsbyImageData(layout: FIXED, width: 100)
            }
          }
        }
        fieldValue
      }
    }
    contentfulSiteMetadata {
      name
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
