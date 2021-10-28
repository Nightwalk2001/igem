import {
  Box,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react"
import React from "react"
import {IoLanguage, IoLogoGithub} from "react-icons/io5"
import {useIntl} from "react-intl"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {switchToEn, switchToZh} from "../store"
import {ChevronDown} from "./ChevronDown"
import {ColorSwitch} from "./ColorSwitch"

export const Navigation: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const intl = useIntl()
  const bg = useColorModeValue("white", "#1a202c")

  const NavigationItem: React.FC<{ to: string, text: string }> = ({to, text}) => <MenuItem
    onClick={() => history.push(to)}>
    {text}
  </MenuItem>

  return <Box
    w={"100%"}
    pos={"sticky"}
    top={"0px"}
    zIndex={3}
    my={"15px"}
    bg={bg}
  >
    <HStack
      justify={"space-between"}
      w={1000}
      mx={"auto"}
      py={"10px"}
    >
      <HStack justify={"space-between"} flex={1} minw={500} maxW={650}>
        <Tooltip label={intl.formatMessage({id: "home_tooltip"})} placement={"bottom"}>
          <Image
            src={"https://2021.igem.org/wiki/images/thumb/7/7d/T--SYSU-CHINA--logo.png/320px-T--SYSU-CHINA--logo.png"}
            h={"45px"}
            _hover={{cursor: "pointer"}}
            onClick={() => history.push("/")}
          />
        </Tooltip>

        <Menu placement={"bottom"}>
          <MenuButton>
            Project
            <ChevronDown/>
          </MenuButton>
          <MenuList minW={144} maxW={160} textAlign={"center"}>
            <NavigationItem to={"/project/description"} text={"Description"}/>
            <NavigationItem to={"/project/design"} text={"Design"}/>
            <NavigationItem to={"/project/contribution"} text={"Contribution"}/>
            <NavigationItem to={"/project/safety"} text={"Safety"}/>
            <NavigationItem to={"/project/proof"} text={"Proof of Concept"}/>
          </MenuList>
        </Menu>

        <Box _hover={{cursor: "pointer"}} onClick={() => history.push("/model")}>
          Model
        </Box>

        <Menu placement={"bottom"}>
          <MenuButton>
            Parts
            <ChevronDown/>
          </MenuButton>
          <MenuList minW={100} maxW={120} textAlign={"center"}>
            <NavigationItem to={"/parts/parts"} text={"Parts"}/>
            <NavigationItem to={"/parts/engineering"} text={"Engineering"}/>
          </MenuList>
        </Menu>

        <Menu placement={"bottom"}>
          <MenuButton>
            Human Practice
            <ChevronDown/>
          </MenuButton>
          <MenuList minW={140} maxW={160} textAlign={"center"}>
            <NavigationItem to={"/hp/overview"} text={"Overview"}/>
            <NavigationItem to={"/hp/interga"} text={"Integrated  Human Practice"}/>
            <NavigationItem to={"/hp/collaborations"} text={"Collaborations"}/>
            <NavigationItem to={"/hp/partnership"} text={"Partnership"}/>
            <NavigationItem to={"/hp/implementation"} text={"Implementation"}/>
            <NavigationItem to={"/hp/communication"} text={"Communication"}/>
            <NavigationItem to={"/hp/education"} text={"Education"}/>
          </MenuList>
        </Menu>

        <Menu placement={"bottom"}>
          <MenuButton>
            Team
            <ChevronDown/>
          </MenuButton>
          <MenuList minW={100} maxW={120} textAlign={"center"}>
            <NavigationItem to={"/team/members"} text={"Members"}/>
            <NavigationItem to={"/team/attributions"} text={"Attributions"}/>
          </MenuList>
        </Menu>

      </HStack>

      <HStack justify={"space-between"} spacing={5} maxW={150}>

        <Menu placement={"bottom"}>
          <MenuButton>
            <Icon
              as={IoLanguage}
              boxSize={5}
              _hover={{color: "#61e1d2"}}
            />
          </MenuButton>
          <MenuList minW={100} maxW={120} textAlign={"center"}>
            <MenuItem onClick={() => dispatch(switchToZh())}>中文简体</MenuItem>
            <MenuItem onClick={() => dispatch(switchToEn())}>English</MenuItem>
          </MenuList>
        </Menu>

        <Icon
          as={IoLogoGithub}
          boxSize={5}
          _hover={{color: "#61e1d2"}}
          onClick={() => window.open("www.baidu.com")}
        />

        <ColorSwitch/>
      </HStack>
    </HStack>
  </Box>
}
