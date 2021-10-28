import {Box} from "@chakra-ui/react"
import React from "react"
import {useIntl} from "react-intl"

type SubjectProps = {
  id: string
}

export const Subject: React.FC<SubjectProps> = ({id}) => {
  const intl = useIntl()
  return <Box
    w={600}
    m={"40px 50px  20px"}
    fontSize={64}
    fontWeight={"extrabold"}
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    textAlign={"center"}>
    {intl.formatMessage({id: `subject_${id}`})}
  </Box>
}