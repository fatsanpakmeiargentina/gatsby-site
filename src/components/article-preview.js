import React from 'react'
import { Link } from 'gatsby-plugin-react-intl'
import { PreviewTitle } from './article-preview.styled'


const ArticlePreview = ({ article }) => (
  <div>
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
    <small>{article.publishDate}</small>
  </div>
)

export default ArticlePreview
