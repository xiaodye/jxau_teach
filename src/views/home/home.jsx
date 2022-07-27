import ApplyCard from "@/components/applyCard"
import BriefCard from "@/components/briefCard"
import LinkPanel from "@/components/linkPanel"
import MaterialCard from "@/components/materialCard"
import ReportCard from "@/components/reportCard"
import Swiper from "@/layout/swiper/Swiper"
import React from "react"
import styles from "./index.module.scss"

function Home() {
  return (
    <div className={styles.root}>
      <Swiper />
      <main className="inner">
        <BriefCard />
        <ReportCard />
        <ApplyCard />
        <MaterialCard />
      </main>
      <div className="inner-link">
        <LinkPanel />
      </div>
    </div>
  )
}

export default Home
