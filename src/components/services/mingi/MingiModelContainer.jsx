import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MingiModel } from "./MingiModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'

const MingiModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage shadows={false}>
                <MingiModel position={[0, 50, 0]}/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            <PerspectiveCamera makeDefault position={[5, 5, -5]} fov={50} near={0.1} far={1000} />
        </Suspense>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.3} luminanceThreshold={0.9} luminanceSmoothing={0.9} height={100} blendFunction={BlendFunction.SCREEN} />
            <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>        
        
    </Canvas>
  )
}

export default MingiModelContainer