import React from "react"
import { useHistory } from "react-router-dom"
import styles from "./index.module.scss"

function IconCard(props) {
  const history = useHistory()

  /**
   * 路由跳转
   * @param {string} path 路由path
   */
  const routeJump = (path) => {
    history.push(path)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={styles.header}>
        <div className="header-title" style={{ backgroundColor: props.bgColor }}>
          {props.title}
        </div>
      </div>
      <div className={styles.main}>
        {props.list.map((item, index) => {
          return (
            <div className="report" key={index}>
              <div className="report-icon">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={item.icon}></use>
                </svg>
              </div>
              <div className="report-title" onClick={() => routeJump(item.path)}>
                {item.title}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default IconCard
