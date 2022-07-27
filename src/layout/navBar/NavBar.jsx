import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"

export default function NavBar() {
  const [tabList] = useState([
    { name: "首页", path: "/home" },
    { name: "成果简介", path: "/brief" },
    { name: "成果报告", path: "/report" },
    { name: "申请书", path: "/application" },
    { name: "支撑材料", path: "/material" },
    { name: "成果视频", path: "/achivementVideo" },
  ])

  return (
    <nav className={styles.root}>
      <div className="inner">
        <div className="tab-list">
          {tabList.map((item, index) => {
            return (
              <NavLink className="tab-list-item" activeClassName="tab-list-item-active" to={item.path} key={index}>
                {item.name}
              </NavLink>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
