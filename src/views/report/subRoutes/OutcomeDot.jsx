import React from "react"
import { reportDotHtml } from "@/assets/richText/report.js"
import ArticleContainer from "@/components/articleContainer"

export default function OutcomeDot() {
  return <ArticleContainer richTextHtml={reportDotHtml} articleTitle="成果创新点" />
}
