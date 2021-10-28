import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, PartsImage, Subject} from "../../widgets"

export const Parts: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"parts"}/>
      <Abstract id={"parts"}/>
      <PartsImage/>
      <LocaleText id={"parts"}/>
    </VStack>
  </ContentWrapper>
}
