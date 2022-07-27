import React, { useState } from "react"
import styles from "./index.module.scss"

export default function LinkPanel() {
  const [linkList] = useState([{ url: "http://www.jxau.edu.cn", name: "江西农业大学" }])
  return (
    <div className={styles.root}>
      <div className="header">
        <div className="header-title">友情链接</div>
      </div>
      <ul className="link-list">
        {linkList.map((item, index) => {
          return (
            <li className="link-list-item" key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
