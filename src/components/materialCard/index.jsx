import React, { useState } from "react"
import styles from "./index.module.scss"

export default function MaterialCard() {
  const [materialList] = useState([
    { icon: "#icon-weibiaoti-2-06", title: "教学成果应用及效果证明材料", path: "/" },
    { icon: "#icon-weibiaoti-2-21", title: "鉴定书", path: "/" },
    { icon: "#icon-weibiaoti-2-09", title: "理论探索与研究", path: "/" },
    { icon: "#icon-weibiaoti-2-19", title: "相关成果", path: "/" },
    { icon: "#icon-weibiaoti-2-04", title: "影响与推广", path: "/" },
  ])
  return (
    <div className={styles.root}>
      <div className="header">
        <div className="header-title">支撑材料</div>
      </div>
      <div className="main">
        {materialList.map((item, index) => {
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
