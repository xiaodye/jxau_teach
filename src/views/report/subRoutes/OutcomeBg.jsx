import ArticleContainer from "@/components/articleContainer"
import React from "react"
import { reportBgHtml } from "@/assets/richText/report.js"

export default function OutcomeBg() {
  return <ArticleContainer richTextHtml={reportBgHtml} articleTitle="成果形成的背景" />
}
