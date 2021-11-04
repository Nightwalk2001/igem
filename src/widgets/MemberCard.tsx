import {chakra, HStack, Image, VStack} from "@chakra-ui/react"
import React from "react"

type MemberCardProps = {
  url: string
  name: string
  position?: string
  introduction: string
}

export const MemberCard: React.FC<MemberCardProps> =
  ({
     url,
     name,
     position = "Team Member",
     introduction
   }) => <HStack spacing={"100px"} my={"40px"}>
    <Image src={`https://2021.igem.org/wiki/images/${url}`} boxSize={"250px"} borderRadius={"125px"}/>
    <VStack alignItems={"start"}>
      <chakra.div fontSize={"26px"} fontWeight={"semibold"}>{name}</chakra.div>
      <chakra.div fontSize={"22px"}>{position}</chakra.div>
      <chakra.div maxW={"560px"}>{introduction}</chakra.div>
    </VStack>
  </HStack>