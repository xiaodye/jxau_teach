import Swiper from "@/layout/swiper/Swiper"
import React from "react"
import styles from "./index.module.scss"

function Home() {
  return (
    <div className={styles.root}>
      <Swiper />
      <main className="inner">home</main>
    </div>
  )
}

export default Home
