import AchievementVideo from "@/views/achievementVideo/AchievementVideo"
import Application from "@/views/application/application"
import Home from "@/views/home/home"
import Material from "@/views/material/Material"
import Report from "@/views/report/Report"
import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"

function IndexRouter() {
  return (
    <Switch>
      <Route path={"/home"} component={Home} />
      <Route path={"/application"} component={Application} />
      <Route path={"/report"} component={Report} />
      <Route path={"/material"} component={Material} />
      <Route path={"/achivementVideo"} component={AchievementVideo} />
      <Redirect path={"/"} to="/home" />
    </Switch>
  )
}

export default IndexRouter
