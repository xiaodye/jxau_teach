import React, { useState } from "react"
import IconCard from "../iconCard"
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
      <IconCard list={materialList} title="材料支撑" bgColor="#19be6b" />
    </div>
  )
}
