import {AspectRatio, Box, chakra, HStack, Image, ListItem, UnorderedList, useColorMode, VStack} from "@chakra-ui/react"
import React, {useEffect} from "react"
import {useIntl} from "react-intl"
import {Brand, Divider, LocaleText} from "../widgets"

export const Home: React.FC = () => {
  const {colorMode, setColorMode} = useColorMode()
  const intl = useIntl()

  useEffect(() => {
    if (colorMode === "dark") setColorMode("light")
  })

  return <Box
    fontFamily={"Work Sans"}
    fontSize={"34px"}
    fontWeight={"semibold"}
    letterSpacing={"wide"}
  >
    <VStack
      justify={"center"}
      h={400}
      backgroundImage={"https://2021.igem.org/wiki/images/e/e6/T--SYSU-CHINA--home-titlebackground.png"}>
      <Box
        fontSize={"52px"}
        fontWeight={"extrabold"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        CircRNA Assembly FacTory
      </Box><br/>
      <Box fontSize={"30px"} maxW={"700px"} textAlign={"center"}>Using circRNA as scaffold to unite the enzyme
        together</Box>
    </VStack>

    <HStack justify={"space-between"} h={550} my={"40px"} px={"15%"}>
      <Box maxW={"450px"} ml={"100px"}>
        <LocaleText
          id={"home1"}
          extraValues={{
            h: (chunks: string) => <chakra.h2 pl={"9px"} color={"#5e6570"}>{chunks}</chakra.h2>,
            u: (chunks: any) => <UnorderedList>{chunks}</UnorderedList>,
            l: (chunks: string) => <ListItem fontSize={"18px"} my={"17px"} color={"#697a89"}>{chunks}
            </ListItem>
          }}
        />
      </Box>

      <Image
        w={"460px"}
        src={"https://2021.igem.org/wiki/images/1/1b/T--SYSU-CHINA--home2.png"}/>
    </HStack>

    <HStack justify={"space-between"} h={550} my={"40px"} px={"15%"}>
      <Image
        w={"460px"}
        src={"https://2021.igem.org/wiki/images/3/3f/T--SYSU-CHINA--home1.png"}/>
      <Box maxW={"450px"} mr={"150px"}>
        <LocaleText
          id={"home2"}
          extraValues={{
            h: (chunks: string) => <chakra.h2 pl={"9px"} color={"#5e6570"}>{chunks}</chakra.h2>,
            u: (chunks: any) => <UnorderedList>{chunks}</UnorderedList>,
            l: (chunks: string) => <ListItem fontSize={"18px"} my={"17px"} color={"#697a89"}>{chunks}
            </ListItem>
          }}
        />
      </Box>
    </HStack>

    <HStack justify={"space-between"} h={550} my={"40px"} px={"15%"}>
      <Box maxW={"450px"} ml={"100px"}>
        <LocaleText
          id={"home3"}
          extraValues={{
            h: (chunks: string) => <chakra.h2 pl={"9px"} color={"#5e6570"}>{chunks}</chakra.h2>,
            u: (chunks: any) => <UnorderedList>{chunks}</UnorderedList>,
            l: (chunks: string) => <ListItem fontSize={"18px"} my={"17px"} color={"#697a89"}>{chunks}
            </ListItem>
          }}
        />
      </Box>

      <Image
        w={"460px"}
        src={"https://2021.igem.org/wiki/images/5/59/T--SYSU-CHINA--home3.png"}
      />
    </HStack>

    <HStack justify={"space-between"} h={550} my={"40px"} px={"15%"}>
      <Image
        w={"460px"}
        src={"https://2021.igem.org/wiki/images/9/98/T--SYSU-CHINA--home4.png"}/>
      <Box maxW={"450px"} mr={"250px"}>
        <LocaleText
          id={"home4"}
          extraValues={{
            h: (chunks: string) => <chakra.h2 pl={"9px"} color={"#5e6570"}>{chunks}</chakra.h2>,
            u: (chunks: any) => <UnorderedList>{chunks}</UnorderedList>,
            l: (chunks: string) => <ListItem fontSize={"18px"} my={"17px"} color={"#697a89"}>{chunks}
            </ListItem>
          }}
        />
      </Box>
    </HStack>

    <Divider/>
    <Box w={"820px"} mx={"auto"} textAlign={"center"}>
      {intl.formatMessage({id: "video"})}
    </Box>

    <AspectRatio w={"960px"} h={"540px"} m={"70px auto 100px"}>
      <video
        src={"https://2021.igem.org/wiki/images/4/4d/T--SYSU-CHINA--.home.mp4"}
        poster={"https://2021.igem.org/wiki/images/5/5b/T--SYSU-CHINA--poster.jpg"}
        controls/>
    </AspectRatio>

    <Divider/>

    <Brand/>
  </Box>
}
