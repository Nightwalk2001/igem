import {Icon} from "@chakra-ui/react"
import React from "react"
import {IoCaretDownOutline} from "react-icons/io5"

export const ChevronDown: React.FC = () => {
  return <Icon as={IoCaretDownOutline} ml={1} boxSize={3}/>
}