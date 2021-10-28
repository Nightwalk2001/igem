import {VStack} from "@chakra-ui/react"
import React from "react"
import {MemberCard} from "../../features"
import {Abstract, ContentWrapper, LocaleText, Subject, TeamImage} from "../../widgets"

export const Members: React.FC = () => {
  return <ContentWrapper>
   <VStack>
     <Subject id={"members"}/>
     <Abstract id={"members"}/>
     <TeamImage/>
   </VStack>
    <LocaleText id={"members"}/>
    <MemberCard url={"4/45/T--SYSU-CHINA--memP1.png"}
                name={"Rui Zhang"}
                position={"Team PI"}
                introduction={`PI of our team, The "Hundred Talents Plan" of Sun Yat-sen University introduced talents, doctor of Philosophy, professor, doctoral supervisor.Majors in: high-throughput sequencing, bioinformatics and molecular and cell biology.`}/>

    <MemberCard
      url={"f/fd/T--SYSU-CHINA--memP2.png"}
      name={"Jin Xu"}
      position={"Team PI"}
      introduction={`Second PI of our team, The "Hundred Talents Plan" of Sun Yat-sen University introduced talents, doctor of Philosophy, professor, doctoral supervisor.Majors in: neuron biology, bioinformatics and genetics.`}/>

    <MemberCard
      url={"a/a8/T--SYSU-CHINA--memP3.png"}
      name={"Yating Yu"}
      introduction={`Here comes a Junior who sometimes acts like a primary scholar. Hi everyone, I am Yating, a lively girl from Biotechnology Base Class, School of Life Sciences, Sun Yat-sen University.`}
      position={"Team Leader"}/>
    <MemberCard
      url={"2/22/T--SYSU-CHINA--memP4.png"}
      name={"Bingnan Zhao"}
      introduction={`Hello, I am Zhao Bingnan and feel happy to join the iGEM family! Talking about synthetic biology and perform experiment to realize my ideas can make me inexhaustible.`}
      position={"Team Leader"}/>

    <MemberCard
      url={"2/28/T--SYSU-CHINA--memP5.png"}
      name={"Hui Luo"}
      introduction={`I am luohui,25 years old.I received my Bachelor degree in Jinlin university in 2018.Now I am studying for PhD majoring in cell biology in Sun Yat-Sen university.I am open-minded,quick in thought and very fond of bioscience.`}
      position={"Team Instructor"}/>

    <MemberCard
      url={"b/b3/T--SYSU-CHINA--memP6.png"}
      name={"Sijun Li"}
      introduction={`Crazy for Case Closed!`}/>

    <MemberCard
      url={"1/1a/T--SYSU-CHINA--memP7.png"}
      name={"Jingyuan Bian"}
      introduction={`I am Jingyuan from School of Life Science, Sun Yat-Sen University, a naive optimist.`}/>

    <MemberCard
      url={"4/4d/T--SYSU-CHINA--memP8.png"}
      name={"Wanlin Chen"}
      introduction={`I'm Chen Wanlin from SYSU. So glad to work hard with you all!`}/>

    <MemberCard
      url={"e/eb/T--SYSU-CHINA--memP9.png"}
      name={"Sisi Yin"}
      introduction={`The end is always good, if it's not good, it's not the end！`}/>

    <MemberCard
      url={"a/a6/T--SYSU-CHINA--memP10.png"}
      name={"Yining Huang"}
      introduction={`I'm Yining from medical school, a girl who is willing to discover new fields and embrace challenges! Thank my team for giving me this opportunity!`}/>

    <MemberCard
      url={"a/ab/T--SYSU-CHINA--memP11.png"}
      name={"Jingjing Liang"}
      introduction={`Hi!I'm Liang Jingjing and I'm mainly responsible for some of illustrations of this project! Hope that you like my design of these "little witches"!`}/>

    <MemberCard
      url={"/c/c8/T--SYSU-CHINA--memP12.png"}
      name={"Xuming Zeng"}
      introduction={`The ultimate triumph of science.`}/>

    <MemberCard
      url={"9/99/T--SYSU-CHINA--memP13.png"}
      name={"Zhiqin Chen"}
      introduction={`I'm ZhiQin Chan from SYSU-CHINA. Join us to enjoy a magical journey of circRNA!`}/>

    <MemberCard
      url={"1/13/T--SYSU-CHINA--memP14.png"}
      name={"Zhiwei Wang"}
      introduction={`Full stack and machine learning developer.Either a Disney villain or a Disney princess, depending on the day`}/>

    <MemberCard
      url={"0/0f/T--SYSU-CHINA--memP15.png"}
      name={"Qing Dong"}
      introduction={`My name is Dong Qing and I come from the School of Life Sciences, Sun Yat-sen University. My motto is "characters determine destiny"`}/>

    <MemberCard
      url={"d/d0/T--SYSU-CHINA--memP16.png"}
      name={"Jialin Zou"}
      introduction={`Zou Jialin, a boy who wants to be a panda in the next life…`}/>

    <MemberCard
      url={"5/5c/T--SYSU-CHINA--memP17.png"}
      name={"Jiajun Ling"}
      introduction={`Sidekick, for now. Faithful participant, yet never stay in contact in time.`}/>

    <MemberCard
      url={"a/a8/T--SYSU-CHINA--memP18.png"}
      name={"Yaxuan Wu"}
      introduction={`As a beginner in biology, I have been deeply attracted by synthetic biology. In the world of life science, there are too many mysteries for me to explore.`}/>

    <MemberCard
      url={"3/3f/T--SYSU-CHINA--memP19.png"}
      name={"Jiaxue Chen"}
      position={"Team Advisor"}
      introduction={`Imaginative, creative and enjoys playing with different colors, shapes and patterns.`}/>
  </ContentWrapper>
}
