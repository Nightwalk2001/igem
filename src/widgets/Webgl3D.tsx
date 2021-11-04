import {Center, chakra} from "@chakra-ui/react"
import {OrbitControls, useGLTF} from "@react-three/drei"
import {Canvas, useFrame} from "@react-three/fiber"
import React, {memo, Suspense, useEffect, useRef, useState} from "react"
import LoadingAnim from "../assets/loading.json"
import {LottieReact} from "./LottieReact"

type WebGLProps = {
  url: string
  hovered: boolean
}

const WebGL: React.FC<WebGLProps> = ({url, hovered}) => {
  const gltf = useGLTF(url)

  const ref = useRef()

  useEffect(() => {
  })

  useFrame(() => {
    if (!hovered) (ref.current as any).rotation.x
      = (ref.current as any).rotation.y
      += 0.003
  })

  return <mesh ref={ref}>
    <primitive object={gltf.scene} position={[0, -1, 0]} scale={3.5} dispose={null}/>
  </mesh>
}

export const Webgl3D: React.FC<{ url: string }> = memo(({url}) => {
  const [hovered, setHovered] = useState(false)

  const Loading = <Center w={300} h={300} mx={"auto"}>
    <LottieReact animation={LoadingAnim}/>
  </Center>

  return <Suspense fallback={Loading}>
    <chakra.div w={750} h={400} m={"50px auto"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
      <Canvas camera={{position: [0, window.innerWidth / window.innerHeight, 5]}}>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
        <pointLight position={[-10, -10, -10]}/>
        <WebGL url={url} hovered={hovered}/>
        <OrbitControls/>
      </Canvas>
    </chakra.div>
  </Suspense>
})
