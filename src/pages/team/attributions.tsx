import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, Subject, TeamFigure} from "../../widgets"

const Attributions: React.FC = () => <ContentWrapper>
  <VStack>
    <Subject id={"attributions"}/>
    <Abstract id={"attributions"}/>
    <TeamFigure/>
    <LocaleText id={"attributions"}/>
  </VStack>
</ContentWrapper>

export default Attributions