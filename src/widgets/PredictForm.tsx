import {Box, Button, HStack} from "@chakra-ui/react"
import {Form, Formik} from "formik"
import React from "react"
import {number, object, string} from "yup"
import {InputItem} from "./index"

type ComputeEnzymeParams = {
  channelCount: number,
  substrateCon: number,
  reactTime: number,
  michaelisConstant: string,
  maxRate: string,
  equConstant: string,
  rnaCon: number,
  dissociationCon: string
}

export const PredictForm: React.FC = () => {
  const reg = /^(\d{2,},)*\d+$/

  const testNumber = number().required("this value is required")
  const testString = (t1: string, t2: string) => string().required("this value is required")
    .test(t1, "count should equal to channel", (value, context) => {
      return value?.split(",").length === context.parent.channelCount
    })
    .test(t2, "Only allow numbers and commas", (value) => reg.test(value!!))

  const computeEnzymeQuantity = ({
                                   channelCount,
                                   substrateCon,
                                   reactTime,
                                   michaelisConstant,
                                   maxRate,
                                   equConstant,
                                   rnaCon,
                                   dissociationCon
                                 }: ComputeEnzymeParams) => {
    const conList: number[] = [+substrateCon]
    const equConstantArr = equConstant.split(",").map(i => +i)
    const maxRateArr = maxRate.split(",").map(i => +i)
    const michaelisConstantArr = michaelisConstant.split(",").map(i => +i)
    const dissociationConArr = dissociationCon.split(",").map(i => +i)

    for (let i = 1; i < channelCount; i++)
      conList.push(+(conList[i - 1] * equConstantArr[i - 1]))

    const velocityList: number[] = []
    for (let i = 0; i < channelCount; i++)
      velocityList.push((maxRateArr[i] * conList[i]) / (+michaelisConstantArr[i] + conList[i]))

    const quantityList: number[] = []
    let tmp: number = 0

    for (let i = 0; i < channelCount; i++)
      if (i === 0) {
        tmp = (conList[i] * equConstantArr[i]) / (velocityList[i] * reactTime)
        tmp = (tmp * dissociationConArr[i]) / rnaCon
        quantityList.push(Math.round(tmp))
      } else {
        tmp = (quantityList[i - 1] * equConstantArr[i] * velocityList[i - 1]) / velocityList[i]
        tmp = (tmp * dissociationConArr[i]) / rnaCon
        quantityList.push(Math.round(tmp))
      }

    alert(quantityList)
  }

  return <Box w={800} m={"30px auto"}>
    <Formik
      initialValues={{
        channelCount: 1,
        substrateCon: 0,
        reactTime: 0,
        michaelisConstant: "",
        maxRate: "",
        equConstant: "",
        rnaCon: 0,
        dissociationCon: ""
      }}
      onSubmit={computeEnzymeQuantity}
      validationSchema={object({
        channelCount: testNumber,
        substrateCon: testNumber,
        reactTime: testNumber,
        michaelisConstant: testString("t1", "t2"),
        maxRate: testString("t3", "t4"),
        equConstant: testString("t5", "t6"),
        rnaCon: testNumber,
        dissociationCon: testString("t7", "t8")
      })}
    >
      <Form>
        <HStack justify={"space-around"} spacing={140} w={"100%"}>
          <Box flex={1}>
            <InputItem label={"Number of reaction channels"} name={"channelCount"}
                       placeholder={"Number of reaction channels"}/>
            <InputItem label={"Substrate concentration(mol/L)"} name={"substrateCon"}
                       placeholder={"Substrate concentration(mol/L)"}/>
            <InputItem label={"Expected response time(s)"} name={"reactTime"} placeholder={"Expected response time(s)"}/>
            <InputItem label={"Michaelis constant"} name={"michaelisConstant"} placeholder={"Michaelis constant"}/>
          </Box>
          <Box flex={1}>
            <InputItem label={"Maximum reaction rate"} name={"maxRate"} placeholder={"Maximum reaction rate"}/>
            <InputItem label={"Equilibrium constant"} name={"equConstant"} placeholder={"Equilibrium constant"}/>
            <InputItem label={"rna concentration"} name={"rnaCon"} placeholder={"rna concentration"}/>
            <InputItem label={"rbp dissociation constant"} name={"dissociationCon"} placeholder={"rbp dissociation constant"}/>
          </Box>
        </HStack>
        <Button
          w={"70%"}
          mt={5}
          mx={"15%"}
          type="submit"
          colorScheme={"twitter"}
          letterSpacing="1.5px">
          确认提交
        </Button>
      </Form>
    </Formik>
  </Box>
}
