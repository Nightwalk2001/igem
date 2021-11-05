import {chakra, useColorModeValue, VStack} from "@chakra-ui/react"
import React from "react"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {setTarget} from "../../store"
import {Abstract, ContentWrapper, LocaleText, ProjectFigure,  Subject} from "../../widgets"

 const Description: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const linkColor = useColorModeValue("#59c9c8", "#8457b0")

  return <ContentWrapper>
    <VStack>
      <Subject id={"description"}/>
      <Abstract id={"description"}/>
      <ProjectFigure/>
      <LocaleText
        id={"description"}
        extraValues={{
          photo1: "1/16/T--SYSU-CHINA--descP1.png",
          photo2: "b/b6/T--SYSU-CHINA--descP2.png",
          photo3: "4/4c/T--SYSU-CHINA--descP3.png",
          jump: (str: string) => <chakra.span
            fontWeight={"semibold"}
            display={"inline-block"}
            mx={"6px"}
            color={linkColor}
            _hover={{cursor: "pointer"}}
            onClick={() => {
              dispatch(setTarget("platform"))
              history.push("/model")
            }}>
            {str}
          </chakra.span>
        }}
      />
    </VStack>
  </ContentWrapper>
}

export default Description