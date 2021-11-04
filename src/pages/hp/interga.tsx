import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, HPImage, LocaleText, Subject} from "../../widgets"

export const Interga: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"interga"}/>
      <Abstract id={"interga"}/>
      <HPImage/>
      <LocaleText id={"hp_interga"} extraValues={{
        photo1: "2/24/T--SYSU-CHINA--ihpP1.png",
        photo2: "0/05/T--SYSU-CHINA--ihpP2.png",
        photo3: "6/60/T--SYSU-CHINA--ihpP3.png",
        photo4: "a/ad/T--SYSU-CHINA--ihpP4.png",
        photo5: "4/49/T--SYSU-CHINA--ihpP5.png"
      }}/>
    </VStack>
  </ContentWrapper>
}
