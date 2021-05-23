import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import * as styles from './links.module.css'
import { injectIntl } from 'gatsby-plugin-react-intl'
import { LinkGroup } from '../components/links'

const LinksIndex = ({
  intl,
  location,
  data: {
    allContentfulExtraLinks: {
      group: links,
    },
    contentfulSiteMetadata: {
      name,
    },
  },
}) => (
  <Layout location={location} title={name} intl={intl}>
    <div style={{ background: '#fff' }}>
      <Helmet title={`${intl.formatMessage({id: "links.title"})} | ${name}`} />
      <div className={styles.title}>{intl.formatMessage({id: "links.title"})}</div>
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

export default injectIntl(LinksIndex)

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
    }
  }
`
