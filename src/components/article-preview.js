import React from 'react'
import { Link } from 'gatsby-plugin-react-intl'

import * as styles from './article-preview.module.css'

const ArticlePreview = ({ article }) => (
  <div>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
  </div>
)

export default ArticlePreview
