import React, { useState } from "react"
import styles from "./index.module.scss"
import { v4 as uuidv4 } from "uuid"

export default function ApplyCard() {
  const [applyList] = useState([
    { id: uuidv4(), title: "成果预览", path: "/" },
    { id: uuidv4(), title: "成果曾获奖励情况", path: "/" },
    { id: uuidv4(), title: "成果起止时间", path: "/" },
    { id: uuidv4(), title: "成果简介及教学问题", path: "/" },
    { id: uuidv4(), title: "成果解决教学问题的方法", path: "/" },
    { id: uuidv4(), title: "成果的创新点", path: "/" },
    { id: uuidv4(), title: "成果的推广应用效果", path: "/" },
    { id: uuidv4(), title: "主要完成人情况", path: "/" },
    { id: uuidv4(), title: "主要完成单位情况", path: "/" },
    { id: uuidv4(), title: "推荐单位意见", path: "/" },
  ])

  return (
    <div className={styles.root}>
      <div className="header">
        <div className="header-title">申请书</div>
      </div>
      <div className="apply-list">
        {applyList.map((item) => {
          return (
            <div className="apply-list-item" key={item.id}>
              <div className="circle"></div>
              <div className="title">{item.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
