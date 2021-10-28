import {Box, useColorModeValue} from "@chakra-ui/react"
import React from "react"

export const Divider: React.FC = () => {
  const dividerColor = useColorModeValue("#d4d4d5", "#544e4e")
  return <Box w={"100%"} h={"1px"} my={"45px"} bg={dividerColor}/>
}
