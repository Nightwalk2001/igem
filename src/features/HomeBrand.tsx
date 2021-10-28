import {Box, HStack, Image, SimpleGrid} from "@chakra-ui/react"
import React from "react"
import {useIntl} from "react-intl"

export const HomeBrand: React.FC = () => {
  const intl = useIntl()
  return <HStack w={"80%"} m={"30px auto"} justify={"space-between"}>
    <Box w={"330px"}>
      {intl.formatMessage({id: "software"})}
    </Box>
    <SimpleGrid columns={3} w={"740px"} h={"250px"} justifyItems={"center"} alignItems={"end"}>
      <Image src={"https://2021.igem.org/wiki/images/2/2b/T--SYSU-CHINA--logo1.png"} w={"170px"} h={"60px"}/>
      <Image src={"https://2021.igem.org/wiki/images/c/c7/T--SYSU-CHINA--logo2.png"} w={"170px"} h={"58px"}/>
      <Image
        src={"https://2021.igem.org/wiki/images/thumb/5/50/T--SYSU-CHINA--logo3.png/320px-T--SYSU-CHINA--logo3.png"}
        w={"170px"} h={"60px"}/>
      <Image src={"https://2021.igem.org/wiki/images/4/45/T--SYSU-CHINA--logo6.png"} w={"170px"} h={"55px"}/>
      <Image src={"https://2021.igem.org/wiki/images/6/67/T--SYSU-CHINA--logo5.png"} w={"73px"} h={"73px"}/>
      <Image src={"https://2021.igem.org/wiki/images/1/1b/T--SYSU-CHINA--logo4.png"} w={"73px"} h={"73px"}/>
    </SimpleGrid>
  </HStack>
}
