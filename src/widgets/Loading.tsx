import {Center} from "@chakra-ui/react"
import {Token} from "@chakra-ui/styled-system/dist/types/utils"
import * as CSS from "csstype"
import React from "react"
import LoadingAnim from "../assets/loading.json"
import {LottieReact} from "./LottieReact"

type LoadingProps = {
  w?: Token<CSS.Property.Width | number, "sizes">
  h?: Token<CSS.Property.Height | number, "sizes">
}

export const Loading: React.FC<LoadingProps> =
  ({w = "300px", h = "225px"}) => <Center w={w} h={h} mx={"auto"}>
    <LottieReact animation={LoadingAnim}/>
  </Center>
