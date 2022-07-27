import React, { useState } from "react"
import styles from "./index.module.scss"

export default function ReportCard() {
  const [reportList] = useState([
    { icon: "#icon-weibiaoti-2-16", title: "成果形成的背景", path: "/" },
    { icon: "#icon-weibiaoti-2-18", title: "成果主要内容", path: "/" },
    { icon: "#icon-weibiaoti-2-12", title: "成果的创新点", path: "/" },
    { icon: "#icon-weibiaoti-2-17", title: "成果的推广应用效果", path: "/" },
  ])
  return (
    <div className={styles.root}>
      <div className="header">
        <div className="header-title">成果报告</div>
      </div>
      <div className="main">
        {reportList.map((item, index) => {
          return (
            <div className="report" key={index}>
              <div className="report-icon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={item.icon}></use>
                </svg>
              </div>
              <div className="report-title">{item.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
