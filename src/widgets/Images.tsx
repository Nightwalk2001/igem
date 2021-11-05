import {chakra, Image} from "@chakra-ui/react"
import React, {memo} from "react"
import HpImage from "../assets/hp.webp"
import ModelImage from "../assets/model.webp"
import PartsImage from "../assets/parts.webp"
import ProjectImage from "../assets/project.webp"
import TeamImage from "../assets/team.webp"
import {Loading} from "./Loading"

export const LoadingImage: React.FC<{ url: string }> = memo(({url, ...rest}) => <chakra.img
  src={`https://2021.igem.org/wiki/images/${url}`}
  alt={""}
  fallback={<Loading/>}
  maxW={800}
  minH={300}
  m={"45px auto 0"}
  draggable={false}
  {...rest}
/>)

export const ProjectFigure: React.FC = () => <Image src={ProjectImage} py={20}   draggable={false}/>

export const ModelFigure: React.FC = () => <Image src={ModelImage} py={20}   draggable={false}/>

export const PartsFigure: React.FC = () => <Image src={PartsImage} py={20}   draggable={false}/>

export const HpFigure: React.FC = () => <Image src={HpImage} py={20}   draggable={false}/>

export const TeamFigure: React.FC = () => <Image src={TeamImage} py={20}   draggable={false}/>
