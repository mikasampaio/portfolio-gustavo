import React from "react"

import Feedback from "../Feedbacks"
import Footer from "../Footer"
import InPersonService from "../InPersonService"
import Main from "../Main"
import OnlineService from "../OnlineService"
import Plan from "../Plan"
import Who from "../WhoAbout"
import Card from "../Card"
import Planfood from "../Planfood"
import Alert from "../Alert"
import Planning from "../Planning"
import CardValue from "../CardValue"
export default function Home() {
  return (
    <div>
      <Main />
      {/* <Plan /> */}
      <Who />
      <Planfood />
      <Planning />
      <OnlineService />
      <InPersonService />
      <Alert />
      <Feedback />
      <CardValue />
      <Card />
      <Footer />
    </div>
  )
}
