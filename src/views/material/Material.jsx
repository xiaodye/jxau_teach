import React, { useState } from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined, BulbOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"
import SubRoutesPanel from "@/components/subRoutesPanel"
import Evidence from "./subRoutes/evidence"
import Testimonial from "./subRoutes/testimonial"
import Outcome from "./subRoutes/outcome"
import Research from "./subRoutes/research"
import Spread from "./subRoutes/spread"

export default function Material() {
  const [routes] = useState([
    { path: "/material/evidence", component: Evidence },
    { path: "/material/testimonial", component: Testimonial },
    { path: "/material/outcome", component: Outcome },
    { path: "/material/research", component: Research },
    { path: "/material/spread", component: Spread },
  ])
  const [navList] = useState([
    { icon: React.createElement(UserOutlined), key: "item-1", label: "教学成果应用及证明材料", path: "/material/evidence" },
    { icon: React.createElement(VideoCameraOutlined), key: "item-2", label: "鉴定书", path: "/material/testimonial" },
    { icon: React.createElement(UploadOutlined), key: "item-3", label: "理论探索与研究", path: "/material/outcome" },
    { icon: React.createElement(BulbOutlined), key: "item-4", label: "相关成果", path: "/material/research" },
    { icon: React.createElement(BulbOutlined), key: "item-5", label: "影响与推广", path: "/material/spread" },
  ])

  return (
    <div className={styles.root}>
      <div className="inner">
        <SubRoutesPanel routes={routes} navList={navList} parentRoute={"/material"} title={"支撑材料"} />
      </div>
    </div>
  )
}
