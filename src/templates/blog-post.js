import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from '../components/layout'
import ShareBar from '../components/share-bar'

const BlogPostTemplate = ({
  location,
  data: {
    contentfulBlogPost: post,
    contentfulSiteMetadata: {
      name,
      icon,
    },
  },
}) => (
  <Layout location={location} title={name} icon={icon}>
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

export default BlogPostTemplate

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
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
