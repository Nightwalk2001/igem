import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, HpFigure, LocaleText, Subject} from "../../widgets"

const Communication: React.FC = () => <ContentWrapper>
  <VStack>
    <Subject id={"communication"}/>
    <Abstract id={"communication"}/>
    <HpFigure/>
    <LocaleText
      id={"hp_communication"}
      extraValues={{
        photo1: "0/04/T--SYSU-CHINA--CommP1.png",
        photo2: "4/4e/T--SYSU-CHINA--CommP2.png",
        photo3: "1/10/T--SYSU-CHINA--partP6.png"
      }}
    />
  </VStack>
</ContentWrapper>

export default Communication