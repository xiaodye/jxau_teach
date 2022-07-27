import React, { useState } from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"
import OutcomeBg from "./subRoutes/OutcomeBg"
import OutcomeDot from "./subRoutes/OutcomeDot"
import OutcomeContent from "./subRoutes/OutcomeContent"
import OutcomeEffect from "./subRoutes/OutcomeEffect"
import SubRoutesPanel from "@/components/subRoutesPanel"

export default function Report() {
  const [routes] = useState([
    { path: "/report/bg", component: OutcomeBg },
    { path: "/report/content", component: OutcomeContent },
    { path: "/report/dot", component: OutcomeDot },
    { path: "/report/effect", component: OutcomeEffect },
  ])
  const [navList] = useState([
    { icon: React.createElement(UserOutlined), key: "item-1", label: "成果形成的背景", path: "/report/bg" },
    { icon: React.createElement(VideoCameraOutlined), key: "item-2", label: "成果主要内容", path: "/report/content" },
    { icon: React.createElement(UploadOutlined), key: "item-3", label: "成果的创新点", path: "/report/dot" },
    { icon: React.createElement(UserOutlined), key: "item-4", label: "成果的推广应用效果", path: "/report/effect" },
  ])

  return (
    <div className={styles.root}>
      <div className="inner">
        <SubRoutesPanel routes={routes} navList={navList} parentRoute={"/report"} title={"成果报告"} />
      </div>
    </div>
  )
}
