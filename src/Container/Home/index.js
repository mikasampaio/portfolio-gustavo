import React from "react"

import Feedback from "../Feedbacks"
import Footer from "../Footer"
import InPersonService from "../InPersonService"
import Main from "../Main"
import OnlineService from "../OnlineService"
import Who from "../WhoAbout"
import Alert from "../Alert"
import Planning from "../Planning"
import Planning2 from "../Planning2"

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
      <Planning2/>
      <Footer />
    </div>
  )
}
