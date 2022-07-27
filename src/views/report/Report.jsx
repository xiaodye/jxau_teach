import React, { useState } from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"
import styles from "./index.module.scss"
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom"
import OutcomeBg from "./subRoutes/OutcomeBg"
import OutcomeDot from "./subRoutes/OutcomeDot"
import OutcomeContent from "./subRoutes/OutcomeContent"
import OutcomeEffect from "./subRoutes/OutcomeEffect"

const { Content, Sider } = Layout

export default function Report() {
  const history = useHistory()
  const location = useLocation()
  const [navList] = useState([
    { icon: React.createElement(UserOutlined), key: "item-1", label: "成果形成的背景", path: "/report/bg" },
    { icon: React.createElement(VideoCameraOutlined), key: "item-2", label: "成果主要内容", path: "/report/content" },
    { icon: React.createElement(UploadOutlined), key: "item-3", label: "成果的创新点", path: "/report/dot" },
    { icon: React.createElement(UserOutlined), key: "item-4", label: "成果的推广应用效果", path: "/report/effect" },
  ])

  /**
   * 切换menu
   * @param {string} detail menu中item相关信息
   */
  const switchSideMenu = (detail) => {
    navList.forEach((item) => {
      if (item.key === detail.key) return history.push(item.path)
    })
  }

  /**
   * 获取当前route对应的menu的key,以便网页刷新可以让menu选中对应的item
   * @returns string
   */
  const getCurrentRouteKey = () => {
    let currentKey = ""
    navList.forEach((item) => {
      if (item.path === location.pathname) return (currentKey = item.key)
    })
    return currentKey
  }

  return (
    <div className={styles.root}>
      <div className="inner">
        <Layout style={{ minHeight: "800px" }}>
          <Sider theme="light" breakpoint="lg" collapsedWidth="0" style={{ border: "1px solid #f0f0f0" }}>
            <div className="title">成果报告</div>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["item-1"]}
              selectedKeys={[getCurrentRouteKey()]}
              items={navList}
              onClick={switchSideMenu}
            />
          </Sider>
          <Content className="article">
            <Switch>
              <Route path={"/report/bg"} component={OutcomeBg} />
              <Route path={"/report/content"} component={OutcomeContent} />
              <Route path={"/report/dot"} component={OutcomeDot} />
              <Route path={"/report/effect"} component={OutcomeEffect} />
              <Redirect path="/report" to={"/report/bg"} />
            </Switch>
          </Content>
        </Layout>
      </div>
    </div>
  )
}
