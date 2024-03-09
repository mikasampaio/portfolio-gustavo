import React from "react"

import Alert from "../Alert"
import Feedback from "../Feedbacks"
import Footer from "../Footer"
import InPersonService from "../InPersonService"
import Main from "../Main"
import OnlineService from "../OnlineService"
import PlanAndValue from "../PlanAndValue"
import Planning from "../Planning"
import Who from "../WhoAbout"

export default function Home() {
  return (
    <div>
      <Main />
      {/* <Plan /> */}
      <Who />
      <Planning />
      <OnlineService />
      <InPersonService />
      <Alert />
      <Feedback />
      <PlanAndValue/>
      <Footer />
    </div>
  )
}
