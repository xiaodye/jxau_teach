import { Carousel } from "antd"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styles from "./index.module.scss"

export default function Swiper() {
  const [imageList] = useState([
    { id: uuidv4(), url: require("./images/01.jpg").default },
    { id: uuidv4(), url: require("./images/02.jpg").default },
    { id: uuidv4(), url: require("./images/03.jpg").default },
    { id: uuidv4(), url: require("./images/04.jpg").default },
  ])

  return (
    <div className={styles.root}>
      <Carousel autoplay>
        {imageList.map((image) => {
          return (
            <div className="image-container" key={image.id}>
              <img src={image.url} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
