import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, ProjectFigure, Subject} from "../../widgets"

const Safety: React.FC = () =>  <ContentWrapper>
  <VStack>
    <Subject id={"safety"}/>
    <Abstract id={"safety"}/>
    <ProjectFigure/>
    <LocaleText id={"safety"} extraValues={{
      photo1: "7/7b/T--SYSU-CHINA--safetyP1.png",
      photo2: "3/30/T--SYSU-CHINA--safetyP2-1.png",
      photo3: "1/11/T--SYSU-CHINA--safetyP4.png",
      photo4: "a/a1/T--SYSU-CHINA--safetyP5.png",
      photo5: "1/10/T--SYSU-CHINA--safetyP6.png"
    }}/>
  </VStack>
</ContentWrapper>

export default Safety
