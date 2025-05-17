import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { SeatingModel } from "./SeatingModel"
import { OrbitControls, Stage, PerspectiveCamera, OrthographicCamera } from "@react-three/drei"

import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'

const SeatingModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage adjustCamera={false} environment={"night"}  shadows= {false}>
                <SeatingModel position={[0, 0, 0]}/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} />
            <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} near={0.1} far={1000} />
        </Suspense>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.9} luminanceSmoothing={0.9} height={100} blendFunction={BlendFunction.SCREEN} />
            <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>        
        
    </Canvas>
  )
}

export default SeatingModelContainer;