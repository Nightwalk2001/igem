import {chakra, Tooltip, useColorModeValue, VStack} from "@chakra-ui/react"
import React from "react"
import {useHistory} from "react-router-dom"
import {Abstract, ContentWrapper, HPImage, LocaleText, Subject} from "../../widgets"

export const Overview: React.FC = () => {
  const history = useHistory()
  const linkColor = useColorModeValue("#59c9c8", "#8457b0")

  return <ContentWrapper>
    <VStack>
      <Subject id={"overview"}/>
      <Abstract id={"overview"}/>
      <HPImage/>
      <LocaleText
        id={"hp_overview"}
        extraValues={{
          more: (chunks: string) => <Tooltip label={`/hp/${chunks}`} placement={"top"}>
            <chakra.span fontWeight={"semibold"}
                         color={linkColor}
                         _hover={{cursor: "pointer"}}
                         onClick={() => history.push(`/hp/${chunks}`)}>learn more...
            </chakra.span>
          </Tooltip>
        }}
      />
    </VStack>
  </ContentWrapper>
}
