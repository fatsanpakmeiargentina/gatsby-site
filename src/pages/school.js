import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useIntl } from 'gatsby-plugin-react-intl'
import ShareBar from '../components/share-bar'

const SchoolIndex = ({
  location,
  data: {
    allContentfulSchoolSections: {
      edges: schoolSections,
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
          title={`${intl.formatMessage({id: "school.title"})} | ${name}`}
          htmlAttributes={{
            lang: intl.locale,
          }}
        />
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

export default SchoolIndex

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
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
