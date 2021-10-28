import {IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react"
import React from "react"
import {IoMoon, IoSunny} from "react-icons/io5"
import {useLocation} from "react-router-dom"
import {toast} from "react-toastify"

export const ColorSwitch = () => {
  const {toggleColorMode} = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(IoSunny, IoMoon)
  const location = useLocation()

  const handleColorChange = () => {
    if (location.pathname === "/") toast("出于展示效果考虑，首页不支持深色模式")
    else toggleColorMode()
  }

  return <IconButton
    size="sm"
    fontSize="lg"
    aria-label={`Switch to ${text} mode`}
    variant="ghost"
    color="current"
    marginLeft={2}
    onClick={handleColorChange}
    icon={<SwitchIcon/>}
  />
}