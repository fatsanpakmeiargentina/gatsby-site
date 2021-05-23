import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from '../components/layout'
import { injectIntl } from 'gatsby-plugin-react-intl'
import ShareBar from '../components/share-bar'

const BlogPostTemplate = ({
  intl,
  location,
  data: {
    contentfulBlogPost: post,
    contentfulSiteMetadata: {
      name,
    },
  },
}) => (
  <Layout location={location} title={name} intl={intl}>
    <div style={{ background: '#fff' }}>
      <Helmet title={`${post.title} | ${name}`} />
      <div className="wrapper">
        <h1 className="section-headline">{post.title}</h1>
        <p
          style={{
            display: 'block',
          }}
        >
          {post.publishDate}
        </p>
        {
          renderRichText(post.body)
        }
        <ShareBar
          shareURL={location.href}
          title={post.title}
        />
      </div>
    </div>
  </Layout>
)

export default injectIntl(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $locale: String) {
    contentfulBlogPost(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      title
      node_locale
      publishDate(formatString: "MMMM Do, YYYY", locale: $locale)
      body {
        raw
      }
    }
    contentfulSiteMetadata {
      name
    }
  }
`
