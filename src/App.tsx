import {Box, ChakraProvider, theme} from "@chakra-ui/react"
import {AnimatePresence, motion} from "framer-motion"
import React, {lazy, Suspense} from "react"
import {IntlProvider} from "react-intl"
import {useSelector} from "react-redux"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {en, zh} from "./i18n"
import {State} from "./store"
import {Copyright, Navigation, Notification} from "./widgets"

const Home = lazy(() => import("./pages/home"))
const Description = lazy(() => import("./pages/project/description"))
const Design = lazy(() => import("./pages/project/design"))
const Contribution = lazy(() => import("./pages/project/contribution"))
const Safety = lazy(() => import("./pages/project/safety"))
const Proof = lazy(() => import("./pages/project/proof"))
const Model = lazy(() => import("./pages/model"))
const Parts = lazy(() => import("./pages/parts/parts"))
const Engineering = lazy(() => import("./pages/parts/engineering"))
const Collaborations = lazy(() => import("./pages/hp/collaborations"))
const Communication = lazy(() => import("./pages/hp/communication"))
const Education = lazy(() => import("./pages/hp/education"))
const Implementation = lazy(() => import("./pages/hp/implementation"))
const Interga = lazy(() => import("./pages/hp/interga"))
const Overview = lazy(() => import("./pages/hp/overview"))
const Partnership = lazy(() => import("./pages/hp/partnership"))
const Attributions = lazy(() => import("./pages/team/attributions"))
const Members = lazy(() => import("./pages/team/members"))

theme.shadows.outline = "0"

const TransitionRouter: React.FC<{ path: string, component: React.ComponentType }> = ({path, component}) => <motion.div
  animate={{opacity: [0, 1]}} transition={{duration: 2}}>
  <Route exact path={path} component={component}/>
</motion.div>

const App = () => {
  const lang: string = useSelector((state: State) => state.locale.lang)

  const message = () => lang === "zh" ? zh : en

  return <AnimatePresence>
    <IntlProvider messages={message()} locale={lang} key={lang}>
      <ChakraProvider theme={theme}>
        <Box className={"root"}>
          <Router>
            <Navigation/>

            <Suspense fallback={null}>
              <div className={"main"}>
                <TransitionRouter path={"/"} component={Home}/>
                <TransitionRouter path={"/project/description"} component={Description}/>
                <TransitionRouter path={"/project/design"} component={Design}/>
                <TransitionRouter path={"/project/contribution"} component={Contribution}/>
                <TransitionRouter path={"/project/safety"} component={Safety}/>
                <TransitionRouter path={"/project/proof"} component={Proof}/>
                <TransitionRouter path={"/model"} component={Model}/>
                <TransitionRouter path={"/parts/parts"} component={Parts}/>
                <TransitionRouter path={"/parts/engineering"} component={Engineering}/>
                <TransitionRouter path={"/hp/overview"} component={Overview}/>
                <TransitionRouter path={"/hp/interga"} component={Interga}/>
                <TransitionRouter path={"/hp/collaborations"} component={Collaborations}/>
                <TransitionRouter path={"/hp/partnership"} component={Partnership}/>
                <TransitionRouter path={"/hp/implementation"} component={Implementation}/>
                <TransitionRouter path={"/hp/communication"} component={Communication}/>
                <TransitionRouter path={"/hp/education"} component={Education}/>
                <TransitionRouter path={"/team/members"} component={Members}/>
                <TransitionRouter path={"/team/attributions"} component={Attributions}/>
              </div>
            </Suspense>

            <Copyright/>
          </Router>
        </Box>

        <Notification/>
      </ChakraProvider>
    </IntlProvider>
  </AnimatePresence>
}

export default App
