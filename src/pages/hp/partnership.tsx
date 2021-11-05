import {VStack} from "@chakra-ui/react"
import React from "react"
import {Abstract, ContentWrapper, HpFigure, LocaleText, Subject} from "../../widgets"

const Partnership: React.FC = () => {
  return <ContentWrapper>
    <VStack>
      <Subject id={"partnership"}/>
      <Abstract id={"partnership"}/>
      <HpFigure/>
      <LocaleText
        id={"hp_partnership"}
        extraValues={{
          photo1: "b/b9/T--SYSU-CHINA--partP1.png",
          photo2: "5/55/T--SYSU-CHINA--partP2.png",
          photo3: "7/7a/T--SYSU-CHINA--partP3.png",
          photo4: "e/e5/T--SYSU-CHINA--partP4.png",
          photo5: "5/51/T--SYSU-CHINA--partP5.png",
          photo6: "1/10/T--SYSU-CHINA--partP6.png",
          photo7: "f/fa/T--SYSU-CHINA--partP7.png",
          photo8: "2/2e/T--SYSU-CHINA--partP8.png",
          pdb: null
          // <Webgl3D mtl={`rna.mtl.txt`} obj={`rna.obj.txt`}/>
        }}
      />
    </VStack>
  </ContentWrapper>
}

export default Partnership