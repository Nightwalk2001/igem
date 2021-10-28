import {Button, chakra, ChakraProps, Icon, Tooltip, useColorModeValue} from "@chakra-ui/react"
import copy from "copy-to-clipboard"
import Katex, {KatexOptions} from "katex"
import "katex/dist/katex.min.css"
import React, {useEffect, useRef} from "react"
import {IoCopy} from "react-icons/io5"
import {useIntl} from "react-intl"
import {toast} from "react-toastify"

type LatexProps = ChakraProps & {
  tex: string,
  options?: KatexOptions
}

export const Latex: React.FC<LatexProps> = ({tex, options, ...rest}) => {
  const ref = useRef<HTMLDivElement>(null)
  const Intl = useIntl()

  const bg = useColorModeValue("#f1f3f4", "#283142")
  const iconColor = useColorModeValue("#202124", "#ffffff")

  useEffect(() => {
    if (ref.current) Katex.render(tex, ref.current, options)
  })

  const handleCopy = () => {
    copy(tex)
    toast(Intl.formatMessage({id: "copy_notify"}))
  }

  return <chakra.div
    pos={"relative"}
    my={"20px"}
    py={"26px"}
    textAlign={"center"}
    borderRadius={"5px"}
    bg={bg}
    {...rest}>
    <div ref={ref}/>
    <Tooltip label={Intl.formatMessage({id: "copy_tooltip"})} placement={"top"}>
      <Button
        pos={"absolute"}
        top={"7px"}
        right={"4px"}
        size={"xs"}
        onClick={handleCopy}
        fontFamily={"Jetbrains Mono"}
        fontSize={"sm"}
        fontWeight={"semibold"}
        borderRadius={"3px"}>
        <Icon as={IoCopy} boxSize={3} color={iconColor} mr={"2px"}/>
        {Intl.formatMessage({id: "copy_text"})}
      </Button>
    </Tooltip>
  </chakra.div>
}
