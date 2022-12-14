import React from "react"
import styles from "./index.module.scss"
import { briefHtml } from "@/assets/richText/brief.js"

export default function BriefCard() {
  return (
    <div className={styles.root}>
      <div className="header">
        <div className="header-title">ๆๆ็ฎไป</div>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: briefHtml }}></div>
    </div>
  )
}
