import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, LocaleText, ProjectImage, Subject} from "../../widgets"

export const Contribution: React.FC = () => {
  return <ContentWrapper>
   <VStack>
     <Subject id={"contribution"}/>
     <Abstract id={"contribution"}/>
     <ProjectImage/>
     <LocaleText id={"contribution"}/>
   </VStack>
  </ContentWrapper>
}
