import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { useIntl } from 'gatsby-plugin-react-intl'

const RootIndex = ({
  data: {
    allContentfulBlogPost: {
      edges: posts,
    },
    contentfulSiteMetadata: {
      name,
      icon,
      presentation,
    },
  },
  location,
}) => {
  const intl = useIntl()

  return (
    <Layout location={location} title={name} icon={icon}>
      <div style={{ background: '#fff' }}>
        <Helmet
          title={name}
          htmlAttributes={{
            lang: intl.locale,
          }}
        />
        <div className="wrapper">
          <GatsbyImage
            alt="Presenentation image"
            image={getImage(presentation)}
          />
          <h2 className="section-headline">{intl.formatMessage({id: "misc.recentArticles"})}</h2>
          <ul className="article-list">
            {
              posts.map(({ node }) => (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery($locale: String) {
    allContentfulBlogPost(limit: 3, sort: { fields: [publishDate], order: DESC }, filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          title
          slug
          previewImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          publishDate(formatString: "MMMM Do, YYYY", locale: $locale)
          body {
            raw
          }
          tags
        }
      }
    }
    contentfulSiteMetadata {
      name
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
      presentation {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
