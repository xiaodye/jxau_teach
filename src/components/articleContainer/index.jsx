import React from "react"
import styles from "./index.module.scss"

export default function ArticleContainer(props) {
  return (
    <div className={styles.root}>
      <div className="article-title">{props.articleTitle}</div>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: props.richTextHtml }}></div>
    </div>
  )
}
