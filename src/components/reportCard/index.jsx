import React, { useState } from "react"
import IconCard from "../iconCard"
import styles from "./index.module.scss"

export default function ReportCard() {
  const [reportList] = useState([
    { icon: "#icon-weibiaoti-2-16", title: "成果形成的背景", path: "/report/bg" },
    { icon: "#icon-weibiaoti-2-18", title: "成果主要内容", path: "/report/content" },
    { icon: "#icon-weibiaoti-2-12", title: "成果的创新点", path: "/report/dot" },
    { icon: "#icon-weibiaoti-2-17", title: "成果的推广应用效果", path: "/report/effect" },
  ])
  return (
    <div className={styles.root}>
      <IconCard list={reportList} title="成果报告" bgColor="#3c9cff" />
    </div>
  )
}
