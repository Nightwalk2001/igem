import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, ProjectFigure,  Subject} from "../../widgets"

const Design: React.FC = () => <ContentWrapper>
  <VStack>
    <Subject id={"design"}/>
    <Abstract id={"design"}/>
    <ProjectFigure/>
    <LocaleText
      id={"design"}
      extraValues={{
        photo1: "0/05/T--SYSU-CHINA--desiP1.png",
        photo2: "9/98/T--SYSU-CHINA--desiP2.png",
        photo3: "5/5a/T--SYSU-CHINA--desiP3.png",
        photo4: "5/55/T--SYSU-CHINA--desiP4.png",
        photo5: "thumb/a/a7/T--SYSU-CHINA--design5.png/490px-T--SYSU-CHINA--design5.png",
        photo6: "f/f9/T--SYSU-CHINA--desiP7.png",
        photo7: "0/0b/T--SYSU-CHINA--desiP8.png",
        photo8: "0/05/T--SYSU-CHINA--desiP9.png",
        photo9: "9/97/T--SYSU-CHINA--desiP10.png",
        photo10: "3/33/T--SYSU-CHINA--desiP11.png"
      }}
    />
  </VStack>
</ContentWrapper>

export default Design