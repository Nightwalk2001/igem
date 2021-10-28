import {chakra, ChakraProps, useColorModeValue} from "@chakra-ui/react"
import {Token} from "@chakra-ui/styled-system/dist/types/utils"
import * as CSS from "csstype"
import React from "react"

type ContentWrapperProps = ChakraProps & {
  children: React.ReactChild | React.ReactChild[]
  w?: Token<CSS.Property.Width | number, "sizes">
  m?: Token<CSS.Property.Margin | number, "space">
  fontFamily?: Token<CSS.Property.FontFamily, "fonts">
  fontSize?: Token<CSS.Property.FontSize | number, "fontSizes">
  fontWeight?: Token<number | (string & {}), "fontWeights">
  lineHeight?: Token<CSS.Property.LineHeight | number, "lineHeights">
  lightColor?: Token<CSS.Property.Color, "colors">
  darkColor?: Token<CSS.Property.Color, "colors">
}

export const ContentWrapper: React.FC<ContentWrapperProps> =
  ({
     children,
     w = "70%",
     m = "20px auto",
     fontFamily = "GT Walsheim, Work Sans, Helvetica Neue",
     fontSize = 20,
     fontWeight = "normal",
     lineHeight = 1.5,
     lightColor = "#0d0d0d",
     darkColor = "#f8f6f6",
     ...rest
   }) => {
    const color = useColorModeValue(lightColor, darkColor)
    return <chakra.div
      w={w}
      m={m}
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      {...rest}>
      {children}
    </chakra.div>
  }