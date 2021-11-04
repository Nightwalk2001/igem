import {chakra, Image} from "@chakra-ui/react"
import React, {memo} from "react"
import {Loading} from "./Loading"

export const LoadingImage: React.FC<{ url: string }> = memo(({url, ...rest}) => <chakra.img
  src={`https://2021.igem.org/wiki/images/${url}`}
  alt={""}
  fallback={<Loading/>}
  filter={"blur(10px)"}
  maxW={800}
  minH={300}
  m={"45px auto 0"}
  draggable={false}
  {...rest}
/>)

export const ProjectImage: React.FC = () =>
  <Image
    src={"https://2021.igem.org/wiki/images/e/ec/T--SYSU-CHINA--project.png"} py={20}/>

export const PartsImage: React.FC = () =>
  <Image src={"https://2021.igem.org/wiki/images/8/8d/T--SYSU-CHINA--parts.png"}
         py={20}/>

export const HPImage: React.FC = () =>
  <Image src={"https://2021.igem.org/wiki/images/1/11/T--SYSU-CHINA--hp.png"}
         py={20}/>

export const TeamImage: React.FC = () =>
  <Image src={"https://2021.igem.org/wiki/images/1/13/T--SYSU-CHINA--team.png"}
         py={20}/>