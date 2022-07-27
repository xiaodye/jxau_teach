import React from "react"
import styles from "./index.module.scss"

export default function ArticleContainer(props) {
  return (
    <div className={styles.root}>
      <div className="article-title">
        <span>{props.articleTitle}</span>
      </div>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: props.richTextHtml }}></div>
    </div>
  )
}
