import ArticleContainer from "@/components/articleContainer"
import React from "react"
import { reportContentHtml } from "@/assets/richText/report.js"

export default function OutcomeContent() {
  return <ArticleContainer richTextHtml={reportContentHtml} articleTitle="成果主要内容" />
}
