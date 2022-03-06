import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-react-intl'
import { PreviewTitle, PreviewBody } from './article-preview.styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"


const ArticlePreview = ({ article }) => {
  const intl = useIntl()
  return (
    <div>
      <PreviewTitle>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </PreviewTitle>
      <GatsbyImage
        image={getImage(article.previewImage)}
        alt={article.title}
      />
      <small>{article.publishDate}</small>
      <PreviewBody>
        {
          renderRichText(article.body)
        }
      </PreviewBody>
      <Link to={`/blog/${article.slug}`}>{intl.formatMessage({id: "misc.readMore"})}</Link>
    </div>
  )
}

export default ArticlePreview
