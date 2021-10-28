import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, ProjectImage, Subject} from "../../widgets"

export const Proof: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"proof"}/>
      <Abstract id={"proof"}/>
      <ProjectImage/>
      <LocaleText
        id={"proof"}
        extraValues={{
          photo1: "6/6c/T--SYSU-CHINA--proof1.png",
          photo2: "a/ac/T--SYSU-CHINA--proof2.png",
          photo3: "e/ec/T--SYSU-CHINA--proof3.png",
          photo4: "6/67/T--SYSU-CHINA--proof4.png",
          photo5: "3/3d/T--SYSU-CHINA--proof5.png"
        }}
      />
    </VStack>
  </ContentWrapper>
}
