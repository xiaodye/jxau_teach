import ArticleContainer from "@/components/articleContainer"
import React from "react"
import styles from "./index.module.scss"
import { briefHtml } from "@/assets/richText/brief.js"

export default function Brief() {
  return (
    <div className={styles.root}>
      <div className="inner">
        <div className="inner-lf">
          <div className="title">成果简介</div>
        </div>
        <div className="inner-rg">
          <ArticleContainer richTextHtml={briefHtml} articleTitle="以课堂教学改革为突破口的一流本科教育川大实践" />
        </div>
      </div>
    </div>
  )
}
