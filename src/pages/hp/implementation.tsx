import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, HPImage, LocaleText, Subject} from "../../widgets"

export const Implementation: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"implementation"}/>
      <Abstract id={"implementation"}/>
      <HPImage/>
      <LocaleText
        id={"hp_implementation"}
        extraValues={{
          photo1: "b/b3/T--SYSU-CHINA--implP1.png",
          photo2: "e/e8/T--SYSU-CHINA--implP2.png",
          photo3: "3/38/T--SYSU-CHINA--implP3.png",
          photo4: "2/28/T--SYSU-CHINA--implP4.png",
          photo5: "3/38/T--SYSU-CHINA--implP5.png",
        }}
      />
    </VStack>
  </ContentWrapper>
}
