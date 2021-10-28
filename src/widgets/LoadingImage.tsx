import {ChakraProps, Image} from "@chakra-ui/react"
import React, {memo} from "react"
import {Loading} from "./Loading"

type LoadingImageProps = ChakraProps & {
  url: string
}

export const LoadingImage: React.FC<LoadingImageProps> = memo(({url, ...rest}) => <Image
  src={`https://2021.igem.org/wiki/images/${url}`}
  fallback={<Loading/>}
  maxW={800}
  minH={300}
  m={"45px auto 0"}
  draggable={false}
  {...rest}
/>)
