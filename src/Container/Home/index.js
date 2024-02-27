import React from "react"

import Feedback from "../Feedbacks"
import Footer from "../Footer"
import InPersonService from "../InPersonService"
import Main from "../Main"
import OnlineService from "../OnlineService"
import Who from "../WhoAbout"
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
      <Footer />
    </div>
  )
}
