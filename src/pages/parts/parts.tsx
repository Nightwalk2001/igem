import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, PartsFigure, Subject} from "../../widgets"

const Parts: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"parts"}/>
      <Abstract id={"parts"}/>
      <PartsFigure/>
      <LocaleText id={"parts"}/>
    </VStack>
  </ContentWrapper>
}

export default Parts