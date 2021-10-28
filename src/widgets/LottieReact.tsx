import {chakra, ChakraProps} from "@chakra-ui/react"
import Lottie from "lottie-web"
import React, {memo, useEffect, useRef} from "react"

type LottieReactProps = ChakraProps | {
  animation: any
}

export const LottieReact: React.FC<LottieReactProps> = memo(({animation, ...rest}) => {
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animationRef.current) Lottie.loadAnimation({
      animationData: animation,
      container: animationRef.current,
      autoplay: true,
      loop: true,
    })
  })

  return <chakra.div ref={animationRef} {...rest}/>
})
