import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import * as styles from './blog.module.css'
import { injectIntl } from 'gatsby-plugin-react-intl'

const BlogIndex = ({
  intl,
  location,
  data: {
    allContentfulBlogPost: {
      edges: posts,
    },
    contentfulSiteMetadata: {
      name,
    },
  },
}) => {
  return (
    <Layout location={location} title={name} intl={intl}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${intl.formatMessage({id: "blog.title"})} | ${name}`} />
        <div className={styles.title}>{intl.formatMessage({id: "blog.title"})}</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(BlogIndex)

export const pageQuery = graphql`
  query BlogIndexQuery($locale: String) {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          title
          slug
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
    }
  }
`
