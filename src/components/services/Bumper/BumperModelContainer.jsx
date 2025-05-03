import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { BumperModel } from "./BumperModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'

const BumperModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage environment="city" intensity={1} shadows={false}>
                <BumperModel/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            <ambientLight intensity={0.6} />
            <pointLight position={[-5, -2, -3]} intensity={2}/>
            <directionalLight position={[5, 50, 5]} intensity={1} castShadow />
            <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} near={0.1} far={1000}/>
        </Suspense>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.9} luminanceSmoothing={0.9} height={100} blendFunction={BlendFunction.ADD} />
            <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>
    </Canvas>
  )
}

export default BumperModelContainer