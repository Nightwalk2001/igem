import {MenuItem} from "@chakra-ui/react"
import React from "react"
import {scroller} from "react-scroll"

type MenuScrollerProps = {
  target: string,
  text: string
}

export const MenuScroller: React.FC<MenuScrollerProps> = ({target, text}) =>
  <MenuItem onClick={() => {
    scroller.scrollTo(target, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50
    })
  }}>
    {text}
  </MenuItem>
