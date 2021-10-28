import {Box} from "@chakra-ui/react"
import React from "react"
import {useIntl} from "react-intl"

type AbstractProps = {
  id: string
}

export const Abstract: React.FC<AbstractProps> = ({id}) => {
  const intl = useIntl()
  return <Box w={720} fontSize={28} textAlign={"center"}>
    {intl.formatMessage({id: `abstract_${id}`})}
  </Box>
}