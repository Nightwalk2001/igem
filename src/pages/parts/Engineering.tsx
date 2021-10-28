import {Icon, Menu, MenuButton, MenuList, VStack} from "@chakra-ui/react"
import React from "react"
import {IoMenu} from "react-icons/io5"
import {Element} from "react-scroll"
import {Abstract, ContentWrapper, LocaleText, MenuScroller, PartsImage, Subject} from "../../widgets"

export const Engineering: React.FC = () => <React.Fragment>
  <ContentWrapper>
    <VStack>
      <Subject id={"engineering"}/>
      <Abstract id={"engineering"}/>
      <PartsImage/>
      <Element name={"overview"}>
        <LocaleText id={"engineering_overview"}/>
      </Element>
      <Element name={"design"}>
        <LocaleText
          id={"engineering_design"}
          extraValues={{
            photo1: "0/05/T--SYSU-CHINA--desiP1.png",
            photo2: "a/a7/T--SYSU-CHINA--enginP2.png",
            photo3: "5/5a/T--SYSU-CHINA--desiP3.png",
            photo4: "b/b6/T--SYSU-CHINA--enginP4.png",
            photo5: "a/a7/T--SYSU-CHINA--design5.png",
            photo6: "3/3f/T--SYSU-CHINA--enginP6.png",
            photo7: "d/d6/T--SYSU-CHINA--enginP7.png",
            photo8: "5/5e/T--SYSU-CHINA--enginP8.png",
            photo9: "7/7e/T--SYSU-CHINA--enginP9.png",
            photo10: "7/7c/T--SYSU-CHINA--enginP11.png"
          }}
        />
      </Element>
      <Element name={"build"}>
        <LocaleText
          id={"engineering_build"}
          extraValues={{
            photo11: "c/c5/T--SYSU-CHINA--enginP10.png",
            photo12: "7/77/T--SYSU-CHINA--enginP12.png",
            photo13: "b/bc/T--SYSU-CHINA--enginP13.png",
            photo14: "5/5a/T--SYSU-CHINA--enginP14.png",
            photo15: "3/3d/T--SYSU-CHINA--enginP15.png",
            photo16: "a/a5/T--SYSU-CHINA--enginP16.png",
            photo17: "2/24/T--SYSU-CHINA--enginP17.png",
            photo18: "8/83/T--SYSU-CHINA--enginP18.png",
            photo19: "6/6e/T--SYSU-CHINA--enginP19.png",
            photo20: "0/01/T--SYSU-CHINA--enginP20.png",
            photo21: "e/e0/T--SYSU-CHINA--enginP22.png",
            photo22: "0/03/T--SYSU-CHINA--enginP21.png",
            photo23: "5/50/T--SYSU-CHINA--enginP23.png",
            photo24: "6/6f/T--SYSU-CHINA--enginP24.png",
            photo25: "f/f2/T--SYSU-CHINA--enginP25.png",
            photo26: "b/b0/T--SYSU-CHINA--enginP26.png",
            photo27: "1/11/T--SYSU-CHINA--enginP27.png"
          }}
        />
      </Element>
      <Element name={"test"}>
        <LocaleText
          id={"engineering_test"}
          extraValues={{
            photo28: "d/d9/T--SYSU-CHINA--enginP28.png",
            photo29: "9/95/T--SYSU-CHINA--enginP29.png",
            photo30: "a/ac/T--SYSU-CHINA--proof2.png",
            photo31: "e/ec/T--SYSU-CHINA--proof3.png",
            photo32: "6/67/T--SYSU-CHINA--proof4.png",
            photo33: "3/3d/T--SYSU-CHINA--proof5.png"
          }}
        />
      </Element>
      <Element name={"other"}>
        <LocaleText id={"engineering_other"}/>
      </Element>
    </VStack>
  </ContentWrapper>
  <Menu placement={"top"}>
    <MenuButton pos={"fixed"} bottom={"50px"} right={"40px"}>
      <Icon as={IoMenu} boxSize={7}/>
    </MenuButton>
    <MenuList w={120} minW={120} maxW={120}>
      <MenuScroller target={"overview"} text={"Overview"}/>
      <MenuScroller target={"design"} text={"Design"}/>
      <MenuScroller target={"build"} text={"Build"}/>
      <MenuScroller target={"test"} text={"Test"}/>
      <MenuScroller target={"other"} text={"Other"}/>
    </MenuList>
  </Menu>
</React.Fragment>

