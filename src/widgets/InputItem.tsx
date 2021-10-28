import {Box, Input} from "@chakra-ui/react"
import {useField} from "formik"
import React from "react"

export const InputItem = ({...props}) => {
  const [field, meta] = useField(props.name)
  const hasError = !!(meta.touched && meta.error)
  return <Box>
    <Box mb={"5px"}>{props.label}</Box>
    <Input
      variant="filled"
      _focus={{outline: "none"}}
      isInvalid={hasError}
      _invalid={{border: "1px solid red", bg: "red.50"}}
      {...field}
      {...props}
    />
    <Box h="23px" fontFamily="PingFang-SC" fontSize={14} color="red.400">{hasError && meta.error}</Box>
  </Box>
}
