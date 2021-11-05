import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, ProjectFigure, Subject} from "../../widgets"

const Contribution: React.FC = () => <ContentWrapper>
  <VStack>
    <Subject id={"contribution"}/>
    <Abstract id={"contribution"}/>
    <ProjectFigure/>
    <LocaleText id={"contribution"}/>
  </VStack>
</ContentWrapper>

export default Contribution