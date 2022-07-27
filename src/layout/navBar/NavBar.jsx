import React, { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import styles from "./index.module.scss"

export default function NavBar() {
  const history = useHistory()
  const location = useLocation()
  const [tabList] = useState([
    { name: "首页", path: "/home" },
    { name: "申请书", path: "/application" },
    { name: "成果报告", path: "/report" },
    { name: "支撑材料", path: "/material" },
    { name: "成果视频", path: "/achivementVideo" },
  ])

  /**
   * 切换tab
   * @param {string} path 路由path
   * @param {number} index 当前tab索引
   */
  const switchTab = (path) => history.push(path)

  return (
    <nav className={styles.root}>
      <div className="inner">
        <ul className="tab-list">
          {tabList.map((tab, index) => {
            return (
              <li
                className="tab-list-item"
                style={{ backgroundColor: location.pathname === tab.path ? "#3c9cff" : "transparent" }}
                onClick={() => switchTab(tab.path)}
                key={index}
              >
                {tab.name}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
