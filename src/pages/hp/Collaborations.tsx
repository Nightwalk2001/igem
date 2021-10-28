import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, HPImage, LocaleText, Subject} from "../../widgets"

export const Collaborations: React.FC = () => {
  return <ContentWrapper>
  <VStack>
    <Subject id={"collaborations"}/>
    <Abstract id={"collaborations"}/>
    <HPImage/>
    <LocaleText
      id={"hp_collaborations"}
      extraValues={{
        photo1: "a/af/T--SYSU-CHINA--colP1.png",
        photo2: "5/58/T--SYSU-CHINA--colP2.png",
        photo3: "c/c1/T--SYSU-CHINA--colP3.png",
        photo4: "5/5b/T--SYSU-CHINA--colP4.png",
        photo5: "5/5f/T--SYSU-CHINA--colP5.png",
        photo6: "7/7c/T--SYSU-CHINA--colP6.png",
        photo7: "9/9d/T--SYSU-CHINA--collP1.png"
      }}
    />
  </VStack>
  </ContentWrapper>
}
