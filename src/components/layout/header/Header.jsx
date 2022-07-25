import React, { useState } from "react"
import styles from "./index.module.scss"

export default function Header() {
  const [logoUrl] = useState(require("@/components/layout/header/images/logo.jpg").default)

  return (
    <header className={styles.root}>
      <div className="inner">
        <div className="inner-lf">
          <img className="logo" src={logoUrl} alt="logo" />
        </div>
        <div className="inner-rg">
          <div className="motto">团结、勤奋、求实、创新</div>
        </div>
      </div>
    </header>
  )
}
