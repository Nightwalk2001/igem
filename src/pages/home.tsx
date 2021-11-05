import {AspectRatio, Box, chakra, HStack, Image, ListItem, UnorderedList, useColorMode, VStack} from "@chakra-ui/react"
import React, {useEffect} from "react"
import {useIntl} from "react-intl"
import Home1 from "../assets/home1.webp"
import Home2 from "../assets/home2.webp"
import Home3 from "../assets/home3.webp"
import Home4 from "../assets/home4.webp"
import HomeBg from "../assets/home_bg.webp"
import HomePoster from "../assets/home_poster.webp"
import {Brand, Divider, LocaleText} from "../widgets"

const Home: React.FC = () => {
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
      backgroundImage={HomeBg}>
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

      <Image w={"460px"} src={Home1}/>
    </HStack>

    <HStack justify={"space-between"} h={550} my={"40px"} px={"15%"}>
      <Image w={"460px"} src={Home2}/>
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

      <Image w={"460px"} src={Home3}
      />
    </HStack>

    <HStack justify={"space-between"} h={550} my={"40px"} px={"15%"}>
      <Image w={"460px"} src={Home4}/>
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
        poster={HomePoster}
        controls/>
    </AspectRatio>

    <Divider/>

    <Brand/>
  </Box>
}

export default Home
