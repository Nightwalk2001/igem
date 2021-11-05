import {Box, HStack, Image, SimpleGrid} from "@chakra-ui/react"
import React from "react"
import {useIntl} from "react-intl"
import Brand1 from "../assets/brand1.webp"
import Brand2 from "../assets/brand2.webp"
import Brand3 from "../assets/brand3.webp"
import Brand4 from "../assets/brand4.webp"
import Brand5 from "../assets/brand5.webp"
import Brand6 from "../assets/brand6.webp"

export const Brand: React.FC = () => {
  const intl = useIntl()

  return <HStack w={"80%"} m={"30px auto"} justify={"space-between"}>
    <Box w={"330px"}>
      {intl.formatMessage({id: "software"})}
    </Box>
    <SimpleGrid columns={3} w={"740px"} h={"250px"} justifyItems={"center"} alignItems={"end"}>
      <Image src={Brand1} w={"170px"} h={"60px"}   draggable={false}/>
      <Image src={Brand2} w={"170px"} h={"58px"}   draggable={false}/>
      <Image src={Brand3} w={"170px"} h={"60px"}   draggable={false}/>
      <Image src={Brand4} w={"170px"} h={"55px"}   draggable={false}/>
      <Image src={Brand5} w={"73px"} h={"73px"}   draggable={false}/>
      <Image src={Brand6} w={"73px"} h={"73px"}   draggable={false}/>
    </SimpleGrid>
  </HStack>
}
