import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, Subject, TeamImage} from "../../widgets"

export const Attributions: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"attributions"}/>
      <Abstract id={"attributions"}/>
      <TeamImage/>
      <LocaleText id={"attributions"}/>
    </VStack>
  </ContentWrapper>
}