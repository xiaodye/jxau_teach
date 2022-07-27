import React, { useState } from "react"
import styles from "./index.module.scss"

export default function Footer() {
  const [logoUrl] = useState(require("@/assets/images/logo-jxau.png").default)
  const [cantactList] = useState([
    { key: "联系电话：", value: "0791-83813185" },
    { key: "地址：", value: "江西省南昌市经济技术开发区志敏大道1101号" },
    { key: "邮箱：", value: "nxyjxau@163.com" },
    { key: "版权所有 © ", value: "江西农业大学2022年国家级教学成果奖申报网站" },
  ])
  return (
    <footer className={styles.root}>
      <div className="inner">
        <div className="inner-lf">
          <img src={logoUrl} alt="logo-jxau" />
        </div>
        <div className="inner-rg">
          {cantactList.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                <div className="key">{item.key}</div>
                <div className="value">{item.value}</div>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
