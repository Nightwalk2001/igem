import {Box, Icon, Image, Menu, MenuButton, MenuList, VStack} from "@chakra-ui/react"
import React, {useEffect} from "react"
import {IoMenu} from "react-icons/io5"
import {useDispatch, useSelector} from "react-redux"
import {Element, scroller} from "react-scroll"
import {EnzymeLineChart, FormLineChart, ModelForm} from "../features"
import {clearTarget, State} from "../store"
import {ContentWrapper, Latex, LocaleText, MenuScroller, Webgl3D} from "../widgets"

export const Model: React.FC = () => {
  const dispatch = useDispatch()
  const target = useSelector((state: State) => state.ui.target)

  useEffect(() => {
    if (target) {
      scroller.scrollTo(target, {
        duration: 1100,
        delay: 100,
        smooth: true,
        offset: -50
      })
      dispatch(clearTarget())
    }
  })

  return <React.Fragment>
    <ContentWrapper>
      <VStack>
        <Box w={600} m={"40px 50px  20px"} fontSize={64} fontWeight={"bold"}
             bgGradient="linear(to-l, #7928CA, #FF0080)"
             bgClip="text"
             textAlign={"center"}>Introduce Model</Box>
        <Box w={720} fontSize={28} textAlign={"center"}>
          Experimental design mainly includes three key points: circrna, fusion protein and multi enzyme reaction
        </Box>
        <Image src={"https://2021.igem.org/wiki/images/8/82/T--SYSU-CHINA--model.png "} py={20}/>

        <VStack w={"80%"} mx={"auto"}>
          <Element name={"overview"}>
            <LocaleText id={"model_overview"}/>
          </Element>

          <Element name={"rna"}>
            <LocaleText
              id={"model_rna"}
              extraValues={{
                formula1: <Latex
                  tex={"(E \\cdot \\mathrm{D})_{1}+2 \\mathrm{GTP} \\stackrel{K_{d}}{\\rightleftharpoons}(E \\cdot \\mathrm{D})_{1} \\cdot \\mathrm{GTP} \\cdot \\mathrm{GTP} \\stackrel{k_{+}}{\\rightleftharpoons{k}}(E \\cdot \\mathrm{D})_{2} \\cdot \\mathrm{pppGpG}"}/>,
                formula2: <Latex
                  tex={"\\text { Observed rate }=\\left(k_{+} *[\\mathrm{GTP}]^{2}\\right)\\left(K_{d}+[\\mathrm{GTP}]^{2}\\right)+k_{-}"}/>,
                formula3: <Latex
                  tex={"{\\LARGE k_{\\mathrm{obs}}=\\frac{k_{\\mathrm{pol}}[\\mathrm{NTP}]}{K_{d}+[\\mathrm{NTP}]}}"}/>,
                photo1: "2/27/T--SYSU-CHINA--model1.png",
                photo2: "7/7e/T--SYSU-CHINA--model2.png"
              }}/>
          </Element>
          <Element name={"protein"}>
            <LocaleText
              id={"model_protein"}
              extraValues={{
                formula1: <Latex
                  tex={"{\\Large \\mathrm{R}+\\mathrm{nP} \\stackrel{\\mathrm{k}}{\\leftrightarrow} \\mathrm{nPR}}"}/>,
                formula2: <Latex
                  tex={"{\\small [R_t ]=[R_f ]+[nPR](E \\cdot \\mathrm{D})_{1}+2 \\mathrm{GTP} \\stackrel{K_{d}}{\\rightleftharpoons}(E \\cdot \\mathrm{D})_{1} \\cdot \\mathrm{GTP} \\cdot \\mathrm{GTP} \\stackrel{k_{+}}{\\rightleftharpoons{k}}(E \\cdot \\mathrm{D})_{2} \\cdot \\mathrm{pppGpG}}"}/>,
                formula3: <Latex tex={`{\\large \\begin{array}{l}
{\\left[\\mathrm{R}_{\\mathrm{t}}\\right]=\\left[\\mathrm{R}_{\\mathrm{f}}\\right]+[\\mathrm{nPR}]} \\\\
{\\left[\\mathrm{P}_{\\mathrm{t}}\\right]=\\left[\\mathrm{P}_{\\mathrm{f}}\\right]+[\\mathrm{nPR}]}
\\end{array}} `}/>,
                formula4: <Latex tex={`{\\large \\begin{array}{l}
{\\left[\\mathrm{R}_{\\mathrm{f}}\\right]=\\left[\\mathrm{R}_{\\mathrm{t}}\\right]-[\\mathrm{nPR}]} \\\\
{\\left[\\mathrm{P}_{\\mathrm{f}}\\right]=\\left[\\mathrm{P}_{\\mathrm{t}}\\right]-\\mathrm{n}[\\mathrm{nPR}]}
\\end{array}} `}/>,
                formula5: <Latex
                  tex={`\\frac{d[n P R]}{d t}=k_{o n}\\left(\\left[R_{t}\\right]-[n P R]\\right)\\left(\\left[P_{t}\\right]-n[n P R]\\right)^{n}-k_{o f f}[n P R]`}/>,
                formula6: <Latex
                  tex={`\\int \\frac{1}{k_{o n}\\left(\\left[R_{t}\\right]-[n P R]\\right)\\left(\\left[P_{t}\\right]-n[n P R]\\right)^{n}-k_{o f f}[n P R]} d[n P R]=\\int d t`}/>,
                formula7: <Latex tex={`{\\large \\mathrm{B}=\\mathrm{c}[\\mathrm{nPR}]} `}/>,
                formula8: <Latex tex={`{\\large K_{d}=\\frac{k_{\\text {off }}}{k_{\\text {on }}}} `}/>,
                formula9: <Latex tex={`{\\large \\begin{array}{c}
{S_{0} \\stackrel{\\mathrm{E}_{1}}{\\leftrightarrow} \\mathrm{s}_{1}} _{(1)} \\\\
K_{1}=\\frac{\\left[S_{1}\\right]}{\\left[S_{0}\\right]} _{(2)}
\\end{array}} `}/>,
                formula10: <Latex tex={`{\\large \\begin{array}{l}
\\mathrm{n}_{1} V_{m 1} t=S_{1} \\\\
{S_{1}=K_{1} S_{0}} _{(3)} \\\\
\\mathrm{n}_{1}=\\frac{S_{0} K_{1}}{V_{m 1} t} _{(4)}
\\end{array}} `}/>,
                formula11: <Latex tex={`{\\large \\begin{array}{c}
S_{2}=\\mathrm{n}_{2} V_{m 2} t _{(5)} \\\\
K_{2}=\\frac{\\left[S_{2}\\right]}{\\left[S_{1}\\right]} _{(6)} \\\\
\\mathrm{n}_{2}=\\frac{K_{2} n_{1} V_{m 1}}{V_{m 2}} _{(7)}
\\end{array}} `}/>,
                formula12: <Latex tex={`{\\large V_{0}=\\frac{V_{\\max }[S]}{K_{m}+[S]} _{(8)}} `}/>,
                formula13: <Latex tex={`{\\large RNA+RBP \\Leftrightarrow R \\cdot P _{(9)}} `}/>,
                formula14: <Latex tex={`{\\large \\begin{array}{c}
K_{\\mathrm{d}}=\\frac{[R N A][R B P]}{[R \\cdot P]} _{(10)} \\\\
n^{\\prime}=\\frac{n K_{\\mathrm{d}}}{[R N A]} _{(11)}
\\end{array}} `}/>,
                form: <Element name={"platform"}>
                  <ModelForm/>
                </Element>
              }}/>
          </Element>
          <Element name={"enzyme"}>
            <LocaleText id={"model_enzyme"}
                        extraValues={{
                          formula1: <Latex
                            tex={`{\\large \\mathrm{J}=-\\mathrm{D} \\frac{\\partial \\mathrm{C}}{\\partial \\mathrm{x}}} `}/>,
                          formula2: <Latex tex={`{\\large \\frac{J^{\\prime}}{t}=D \\frac{C_{0}-C_{1}}{x}} `}/>,
                          formula3: <Latex tex={`{\\large C_{1}=-\\frac{x J^{\\prime}}{D t}+C_{0}} `}/>,
                          chart: <Box h={"500px"} mx={"auto"}>
                            <FormLineChart/>
                          </Box>,
                          canvas2D: <React.Fragment>
                            <Image
                              src={"https://2021.igem.org/wiki/images/9/9f/T--SYSU-CHINA--1.gif"}
                              w={"800px"}
                              mx={"auto"}/>
                            <Box h={"500px"} mx={"auto"}>
                              <EnzymeLineChart/>
                            </Box>
                          </React.Fragment>
                        }}/>
          </Element>
          <Element name={"structure"}>
            <LocaleText id={"model_structure"} extraValues={{
              rna: <Webgl3D
                url={"https://github.com/Nightwalk2001/igem/blob/f6dcb4bd26a4ce68d2bfda8936a4a9920bdacf8c/public/rna.glb"}/>,
              protein1: <Webgl3D
                url={"https://github.com/Nightwalk2001/igem/blob/f6dcb4bd26a4ce68d2bfda8936a4a9920bdacf8c/public/protein1.glb"}/>,
              protein2: <Webgl3D
                url={"https://github.com/Nightwalk2001/igem/blob/f6dcb4bd26a4ce68d2bfda8936a4a9920bdacf8c/public/protein2.glb"}/>
            }}/>
          </Element>
        </VStack>
      </VStack>
    </ContentWrapper>

    <Menu placement={"top"}>
      <MenuButton pos={"fixed"} bottom={"50px"} right={"40px"}>
        <Icon as={IoMenu} boxSize={7}/>
      </MenuButton>
      <MenuList w={160} minW={160} maxW={160}>
        <MenuScroller target={"overview"} text={"Overview"}/>
        <MenuScroller target={"rna"} text={"CircRNA"}/>
        <MenuScroller target={"protein"} text={"Fusion Protein"}/>
        <MenuScroller target={"enzyme"} text={"Enzyme Distance"}/>
        <MenuScroller target={"structure"} text={"Spatial Structure"}/>
      </MenuList>
    </Menu>

  </React.Fragment>
}
