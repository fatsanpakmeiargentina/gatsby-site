import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './school.module.css'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { injectIntl } from 'gatsby-plugin-react-intl'
import ShareBar from '../components/share-bar'

const SchoolIndex = ({
  intl,
  location,
  data: {
    allContentfulSchoolSections: {
      edges: schoolSections,
    },
    contentfulSiteMetadata: {
      name,
    },
  },
}) => {
  return (
    <Layout location={location} title={name} intl={intl}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${intl.formatMessage({id: "school.title"})} | ${name}`} />
        <div className={styles.title}>{intl.formatMessage({id: "school.title"})}</div>
        <div className="wrapper">
          <ShareBar shareURL={location.href} title={name} />
          {
            schoolSections.map((section) => (
              <Fragment key={section.node.title}>
                <h1>{section.node.title}</h1>
                {
                  section.node.description.references.map((reference) => (
                    <GatsbyImage
                      key={reference.contentful_id}
                      alt={section.node.title}
                      image={section.node.title === "Linaje" ? reference.big : reference.small}
                    />
                  ))
                }
                {
                  renderRichText(section.node.description)
                }
              </Fragment>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(SchoolIndex)

export const pageQuery = graphql`
  query SchoolQuery($locale: String) {
    allContentfulSchoolSections(sort: {fields: order}, filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          title
          description {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                small: gatsbyImageData(layout: FIXED, width: 250)
                big: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    contentfulSiteMetadata {
      name
    }
  }
`
