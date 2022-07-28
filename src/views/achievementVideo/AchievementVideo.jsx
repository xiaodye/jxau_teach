import React from "react"
import styles from "./index.module.scss"
import videoUrl from "@/assets/video/achievementVideo.mp4"

export default function AchievementVideo() {
  return (
    <div className={styles.root}>
      <div className="inner">
        <div className="inner-lf">
          <div className="title">成果视频</div>
        </div>
        <div className="inner-rg">
          <video src={videoUrl} controls muted autoPlay loop>
            <p>当前浏览器不支持video标签</p>
          </video>
        </div>
      </div>
    </div>
  )
}
