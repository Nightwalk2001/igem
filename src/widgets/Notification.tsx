import {useColorModeValue} from "@chakra-ui/react"
import React from "react"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const Notification: React.FC = () => {
  const theme = useColorModeValue("light", "dark")

  return <ToastContainer
    position="top-right"
    autoClose={2200}
    hideProgressBar={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme={theme}
    limit={1}
  />
}