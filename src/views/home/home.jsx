import ApplyCard from "@/components/applyCard"
import BriefCard from "@/components/briefCard"
import IconCard from "@/components/iconCard"
import LinkPanel from "@/components/linkPanel"
import Swiper from "@/layout/swiper/Swiper"
import React, { useState } from "react"
import styles from "./index.module.scss"

function Home() {
  const [reportList] = useState([
    { icon: "#icon-weibiaoti-2-16", title: "成果形成的背景", path: "/report/bg" },
    { icon: "#icon-weibiaoti-2-18", title: "成果主要内容", path: "/report/content" },
    { icon: "#icon-weibiaoti-2-12", title: "成果的创新点", path: "/report/dot" },
    { icon: "#icon-weibiaoti-2-17", title: "成果的推广应用效果", path: "/report/effect" },
  ])
  const [materialList] = useState([
    { icon: "#icon-weibiaoti-2-06", title: "教学成果应用及效果证明材料", path: "/material/evidence" },
    { icon: "#icon-weibiaoti-2-21", title: "鉴定书", path: "/material/testimonial" },
    { icon: "#icon-weibiaoti-2-09", title: "理论探索与研究", path: "/material/outcome" },
    { icon: "#icon-weibiaoti-2-19", title: "相关成果", path: "/material/research" },
    { icon: "#icon-weibiaoti-2-04", title: "影响与推广", path: "/material/spread" },
  ])

  return (
    <div className={styles.root}>
      <Swiper />
      <main className="inner">
        <BriefCard />
        <div className="icon-card">
          <IconCard list={reportList} title="成果报告" bgColor="#3c9cff" />
        </div>
        <ApplyCard />
        <div className="icon-card">
          <IconCard list={materialList} title="材料支撑" bgColor="#19be6b" />
        </div>
      </main>
      <div className="inner-link">
        <LinkPanel />
      </div>
    </div>
  )
}

export default Home
