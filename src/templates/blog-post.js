import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS } from '@contentful/rich-text-types'
import Layout from '../components/layout'
import ShareBar from '../components/share-bar'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target
      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt={description}
        />
      )
    },
  },
}

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
        <h4>{post.subtitle}</h4>
        <p
          style={{
            display: 'block',
          }}
        >
          {post.publishDate}
        </p>
        <div>
          {
            renderRichText(post.body, options)
          }
        </div>
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
      subtitle
      node_locale
      publishDate(formatString: "MMMM Do, YYYY", locale: $locale)
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData(layout: FULL_WIDTH)
            title
            description
            __typename
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
