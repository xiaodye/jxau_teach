import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./index.module.scss"

export default function NavBar() {
  const history = useHistory()
  const [tabList] = useState([
    { name: "首页", path: "/home" },
    { name: "申请书", path: "/application" },
    { name: "成果报告", path: "/report" },
    { name: "支撑材料", path: "/material" },
    { name: "成果视频", path: "/achivementVideo" },
  ])
  const switchTab = (path) => history.push(path)

  return (
    <nav className={styles.root}>
      <div className="inner">
        <ul className="tab-list">
          {tabList.map((tab) => {
            return (
              <li className="tab-list-item" onClick={() => switchTab(tab.path)} key={tab.name}>
                {tab.name}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
