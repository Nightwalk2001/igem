import {chakra, ChakraProps, Icon, Tooltip, useColorModeValue} from "@chakra-ui/react"
import {motion} from "framer-motion"
import React from "react"
import {IoLink} from "react-icons/io5"
import {FormattedMessage, useIntl} from "react-intl"
import {useHistory} from "react-router-dom"
import {LoadingImage} from "./Images"

type LocaleTextProps = ChakraProps & {
  id: string
  extraValues?: Record<string, React.ReactNode>
}

export const LocaleText: React.FC<LocaleTextProps> =
  ({
     id,
     extraValues,
     ...rest
   }) => {
    const history = useHistory()
    const intl = useIntl()

    const linkColor = useColorModeValue("#59c9c8", "#8457b0")
    return <motion.div animate={{opacity: [0, 1]}} exit={{opacity: [1, 0]}} transition={{duration: 1.5}}>
      <FormattedMessage
        id={id}
        values={{
          first: (chunks: string) => <chakra.div
            m={"16px 0 20px"}
            className={"firstBig"} {...rest}>{chunks}</chakra.div>,
          line: (chunks: string) => <chakra.div
            m={"16px 0 20px"}
            {...rest}>{chunks}</chakra.div>,
          title: (chunks: string) => <chakra.div
            mt={"60px"}
            fontSize={"40px"}
            fontWeight={"bold"}>{chunks}</chakra.div>,
          subtitle: (chunks: string) => <chakra.div
            mt={"38px"}
            fontSize={25}
            fontWeight={"semibold"}>{chunks}</chakra.div>,
          sectitle: (chunks: string) => <chakra.div
            mt={"24px"}
            fontSize={22}>
            {chunks}
          </chakra.div>,
          photo: (chunks: string) => <LoadingImage url={chunks}/>,
          note: (chunks: string) => <chakra.div
            w={"50%"}
            m={"14px auto 26px"}
            pb={"5px"}
            textAlign={"center"}
            borderBottom={"2px solid grey"}
            fontSize={14}>{chunks}</chakra.div>,
          ref: (chunks: string) => <chakra.div fontFamily={"Times New Roman"} fontSize={18}>{chunks}</chakra.div>,
          italic: (chunks: string) => <chakra.span fontStyle={"italic"} fontWeight={"semibold"}>{chunks}</chakra.span>,
          link: (chunks: string) => {
            const arr = (chunks + "").split("=>")
            return <Tooltip label={`https://2021.igem.org/Team:SYSU-CHINA${arr[1]}`} placement={"top"}>
              <chakra.span
                fontWeight={"semibold"}
                mx={"5px"}
                color={linkColor}
                _hover={{cursor: "pointer"}}
                onClick={() => {
                  history.push(arr[1])
                }}>{arr[0]}
              </chakra.span>
            </Tooltip>
          },
          href: (chunks: string) => <Tooltip label={chunks} placement={"top"}>
            <i>
              <Icon
                as={IoLink}
                boxSize={6}
                mx={"5px"}
                fontWeight={"semibold"}
                color={linkColor}
                _hover={{cursor: "pointer"}}
                onClick={() => window.open(chunks)}/>
            </i>
          </Tooltip>,
          open: (chunks: string) => {
            const arr = (chunks + "").split("=>")
            return <Tooltip label={`${arr[1]}`} placement={"top"}>
              <chakra.span
                fontWeight={"semibold"}
                mx={"5px"}
                color={linkColor}
                _hover={{cursor: "pointer"}}
                onClick={() => {
                  window.open(arr[1])
                }}>{arr[0]}
              </chakra.span>
            </Tooltip>
          },
          download: (str: string) => {
            const arr = (str + "").split("=>")
            return <Tooltip label={intl.formatMessage({
              id: "download_tooltip"
            })} placement={"top"}>
              <chakra.span
                mx={"5px"}
                color={linkColor}
                _hover={{cursor: "pointer"}}
                onClick={() => window.open(arr[1])}
              >
                {arr[0]}
              </chakra.span>
            </Tooltip>
          },
          ...extraValues
        }}
      />
    </motion.div>
  }
