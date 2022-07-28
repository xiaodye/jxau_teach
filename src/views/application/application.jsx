import React, { useState } from "react"
import { BulbOutlined } from "@ant-design/icons"
import SubRoutesPanel from "@/components/subRoutesPanel"
import styles from "./index.module.scss"
import Apply_1_1 from "./subRoutes/apply_1_1"
import Apply_1_2 from "./subRoutes/apply_1_2"
import Apply_1_3 from "./subRoutes/apply_1_3"
import Apply_2_3 from "./subRoutes/apply_2_3"
import Apply_2_1 from "./subRoutes/apply_2_1"
import Apply_2_2 from "./subRoutes/apply_2_2"
import Apply_3_1 from "./subRoutes/apply_3_1"
import Apply_3_2 from "./subRoutes/apply_3_2"
import Apply_3_3 from "./subRoutes/apply_3_3"
import Apply_4_1 from "./subRoutes/apply_4_1"

export default function Application() {
  const [routes] = useState([
    { path: "/application/apply_1_1", component: Apply_1_1 },
    { path: "/application/apply_1_2", component: Apply_1_2 },
    { path: "/application/apply_1_3", component: Apply_1_3 },
    { path: "/application/apply_2_1", component: Apply_2_1 },
    { path: "/application/apply_2_2", component: Apply_2_2 },
    { path: "/application/apply_2_3", component: Apply_2_3 },
    { path: "/application/apply_3_1", component: Apply_3_1 },
    { path: "/application/apply_3_2", component: Apply_3_2 },
    { path: "/application/apply_3_3", component: Apply_3_3 },
    { path: "/application/apply_4_1", component: Apply_4_1 },
  ])
  const [navList] = useState([
    { icon: React.createElement(BulbOutlined), key: "item-1", label: "成果预览", path: "/application/apply_1_1" },
    { icon: React.createElement(BulbOutlined), key: "item-2", label: "成果曾获奖励情况", path: "/application/apply_1_2" },
    { icon: React.createElement(BulbOutlined), key: "item-3", label: "成果起止时间", path: "/application/apply_1_3" },
    { icon: React.createElement(BulbOutlined), key: "item-4", label: "成果简介及教学问题", path: "/application/apply_2_1" },
    { icon: React.createElement(BulbOutlined), key: "item-5", label: "成果解决教学问题的方法", path: "/application/apply_2_2" },
    { icon: React.createElement(BulbOutlined), key: "item-6", label: "成果的创新点", path: "/application/apply_2_3" },
    { icon: React.createElement(BulbOutlined), key: "item-7", label: "成果的推广应用效果", path: "/application/apply_3_1" },
    { icon: React.createElement(BulbOutlined), key: "item-8", label: "主要完成人情况", path: "/application/apply_3_2" },
    { icon: React.createElement(BulbOutlined), key: "item-9", label: "主要完成单位情况", path: "/application/apply_3_3" },
    { icon: React.createElement(BulbOutlined), key: "item-10", label: "推荐单位意见", path: "/application/apply_4_1" },
  ])
  return (
    <div className={styles.root}>
      <div className="inner">
        <SubRoutesPanel routes={routes} navList={navList} parentRoute={"/application"} title={"申请书"} />
      </div>
    </div>
  )
}
