import {Box, ChakraProvider, theme} from "@chakra-ui/react"
import {AnimatePresence} from "framer-motion"
import React from "react"
import {IntlProvider} from "react-intl"
import {useSelector} from "react-redux"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {en, zh} from "./i18n"
import {
  Attributions,
  Collaborations,
  Communication,
  Contribution,
  Description,
  Design,
  Education,
  Engineering,
  Home,
  Implementation,
  Interga,
  Members,
  Model,
  Overview,
  Partnership,
  Parts,
  Proof,
  Safety
} from "./pages"
import {State} from "./store"
import {Copyright, Navigation, Notification} from "./widgets"

theme.shadows.outline = "0"

const App = () => {
  const lang: string = useSelector((state: State) => state.locale.lang)

  const message = () => lang === "zh" ? zh : en

  return <AnimatePresence>
    <IntlProvider messages={message()} locale={lang} key={lang}>
      <ChakraProvider theme={theme}>
        <Box className={"root"}>
          <Router>
            <Navigation/>

            <Box className={"main"}>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/project/description"} component={Description}/>
              <Route path={"/project/design"} component={Design}/>
              <Route path={"/project/contribution"} component={Contribution}/>
              <Route path={"/project/safety"} component={Safety}/>
              <Route path={"/project/proof"} component={Proof}/>
              <Route path={"/model"} component={Model}/>
              <Route path={"/parts/parts"} component={Parts}/>
              <Route path={"/parts/engineering"} component={Engineering}/>
              <Route path={"/hp/overview"} component={Overview}/>
              <Route path={"/hp/interga"} component={Interga}/>
              <Route path={"/hp/collaborations"} component={Collaborations}/>
              <Route path={"/hp/partnership"} component={Partnership}/>
              <Route path={"/hp/implementation"} component={Implementation}/>
              <Route path={"/hp/communication"} component={Communication}/>
              <Route path={"/hp/education"} component={Education}/>
              <Route path={"/team/members"} component={Members}/>
              <Route path={"/team/attributions"} component={Attributions}/>
            </Box>

            <Copyright/>
          </Router>
        </Box>

        <Notification/>
      </ChakraProvider>
    </IntlProvider>
  </AnimatePresence>
}

export default App
