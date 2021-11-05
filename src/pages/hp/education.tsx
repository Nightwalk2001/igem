import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, HpFigure, LocaleText, Subject} from "../../widgets"

const Education: React.FC = () => <ContentWrapper>
  <VStack>
    <Subject id={"education"}/>
    <Abstract id={"education"}/>
    <HpFigure/>
    <LocaleText
      id={"hp_education"}
      extraValues={{
        photo1: "0/09/T--SYSU-CHINA--EduP1.png",
        photo2: "7/7c/T--SYSU-CHINA--eduP2-1.png",
        photo3: "0/05/T--SYSU-CHINA--EduP4.png",
        photo4: "5/50/T--SYSU-CHINA--EduP5.png",
        photo5: "1/1e/T--SYSU-CHINA--eduP6.png",
        photo6: "a/ab/T--SYSU-CHINA--eduP7.png",
        photo7: "d/d5/T--SYSU-CHINA--eduP8.png",
        photo8: "2/29/T--SYSU-CHINA--eduP9.png"
      }}/>
  </VStack>
</ContentWrapper>

export default Education