import React from "react"
import PropTypes from "prop-types"
import { Layout, Menu } from "antd"
import styles from "./index.module.scss"
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom"

const { Content, Sider } = Layout

function SubRoutesPanel(props) {
  const { routes, navList, parentRoute, title } = props
  const history = useHistory()
  const location = useLocation()

  /**
   * 切换menu
   * @param {string} detail menu中item相关信息
   */
  const switchSideMenu = (detail) => {
    navList.forEach((item) => {
      if (item.key === detail.key) {
        history.push(item.path)
        window.scrollTo(0, 0)
      }
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
    <Layout className={styles.root}>
      <Sider theme="light" breakpoint="lg" collapsedWidth="0" style={{ border: "1px solid #f0f0f0" }}>
        {/* 栏目标题 */}
        <div className="title">{title}</div>

        {/* 侧边栏 */}
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
        {/* 二级路由 */}
        <Switch>
          {routes.map((route) => {
            return <Route path={route.path} component={route.component} key={route.path} />
          })}
          <Redirect path={parentRoute} to={routes[0].path} />
        </Switch>
      </Content>
    </Layout>
  )
}

// 类型校验
SubRoutesPanel.prototype = {
  routes: PropTypes.array.isRequired,
  navList: PropTypes.array.isRequired,
  parentRoute: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SubRoutesPanel
