import {Box, HStack, Icon, useColorModeValue, VStack} from "@chakra-ui/react"
import React from "react"
import {BsGithub} from "react-icons/bs"
import {RiBilibiliLine, RiWechatFill} from "react-icons/ri"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {setTarget} from "../store"
import {Divider} from "./Divider"

export const Copyright: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const dividerColor = useColorModeValue("#d4d4d5", "#544e4e")
  const activeColor = useColorModeValue("#59c9c8", "#8457b0")

  const HeaderItem: React.FC<{ children: React.ReactNode | string }> = ({children}) => <Box fontWeight={"bold"}>
    {children}
  </Box>

  const CopyrightItem: React.FC<{ to: string, text: string }> = ({to, text}) => <Box
    _hover={{cursor: "pointer", color: activeColor, textDecoration: "underline"}}
    onClick={() => history.push(to)}
  >
    {text}
  </Box>

  const ModelItem: React.FC<{ target: string, text: string }> = ({target, text}) => <Box
    _hover={{cursor: "pointer", color: activeColor, textDecoration: "underline"}}
    onClick={() => {
      dispatch(setTarget(target))
      history.push("/model")
    }}>
    {text}
  </Box>

  return <React.Fragment>
    <Divider/>
    <Box w={1000} mx={"auto"} mb={"50px"}>
      <HStack justify={"space-between"} alignItems={"start"} pb={"25px"} mb={"25px"}
              borderBottom={`1px solid ${dividerColor}`}>
        <VStack alignItems={"start"}>
          <HeaderItem>Project</HeaderItem>
          <CopyrightItem to={"/project/description"} text={"Description"}/>
          <CopyrightItem to={"/project/design"} text={"Design"}/>
          <CopyrightItem to={"/project/contribution"} text={"Contribution"}/>
          <CopyrightItem to={"/project/safety"} text={"Safety"}/>
          <CopyrightItem to={"/project/proof"} text={"Proof of Concept"}/>
        </VStack>
        <VStack alignItems={"start"}>
          <HeaderItem>Model</HeaderItem>
          <ModelItem target={"overview"} text={"Overview"}/>
          <ModelItem target={"rna"} text={"CircRNA"}/>
          <ModelItem target={"protein"} text={"Fusion Protein"}/>
          <ModelItem target={"enzyme"} text={"Enzyme Distance"}/>
          <ModelItem target={"structure"} text={"Spatial Structure"}/>
        </VStack>
        <VStack alignItems={"start"}>
          <HeaderItem>Parts</HeaderItem>
          <CopyrightItem to={"/parts/parts"} text={"Parts"}/>
          <CopyrightItem to={"/parts/engineering"} text={"Engineering"}/>
        </VStack>
        <VStack alignItems={"start"}>
          <HeaderItem>Human Practice</HeaderItem>
          <CopyrightItem to={"/hp/overview"} text={"Overview"}/>
          <CopyrightItem to={"/hp/interga"} text={"Integrated  Human Practice"}/>
          <CopyrightItem to={"/hp/collaborations"} text={"Collaborations"}/>
          <CopyrightItem to={"/hp/partnership"} text={"Partnership"}/>
          <CopyrightItem to={"/hp/implementation"} text={"Implementation"}/>
          <CopyrightItem to={"/hp/communication"} text={"Communication"}/>
          <CopyrightItem to={"/hp/education"} text={"Education"}/>
        </VStack>
        <VStack alignItems={"start"}>
          <HeaderItem>Team</HeaderItem>
          <CopyrightItem to={"/team/members"} text={"Members"}/>
          <CopyrightItem to={"/team/attributions"} text={"Attributions"}/>
        </VStack>
      </HStack>

      <HStack justify={"space-between"} alignItems={"end"}>
        <VStack alignItems={"start"}>
          <HStack mt={"8px"} mb={"5px"} spacing={"16px"}>
            <Icon as={BsGithub} boxSize={6} _hover={{cursor: "pointer", color: activeColor}}
                  onClick={() => window.open("https://github.com/Nightwalk2001/igem")}/>
            <Icon as={RiWechatFill} boxSize={6} _hover={{cursor: "pointer", color: activeColor}}
                  onClick={() => window.open("https://2021.igem.org/wiki/images/1/11/T--SYSU-CHINA--wechat.png")}/>
            <Icon as={RiBilibiliLine} boxSize={6} _hover={{cursor: "pointer", color: activeColor}}
                  onClick={() => window.open("https://2021.igem.org/wiki/images/0/03/T--SYSU-CHINA--bilibili.png")}/>
          </HStack>

          <Box>Copyright © 2021 IGEM SYSU-CHINA</Box>
        </VStack>

        <Box _hover={{cursor: "pointer", color: activeColor}}
             onClick={() => window.open("http://lifesciences.sysu.edu.cn/")}>
          School of Life Sciences, Sun Yat-sen University
        </Box>
      </HStack>
    </Box>
  </React.Fragment>
}
