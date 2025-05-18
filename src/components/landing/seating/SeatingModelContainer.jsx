import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { SeatingModel } from "./SeatingModel"
import { OrbitControls, Stage, PerspectiveCamera, OrthographicCamera } from "@react-three/drei"
import { CameraControls, Environment } from '@react-three/drei';

import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'

const SeatingModelContainer = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} castShadow />
        <Suspense fallback='Loading...'>
            <Stage adjustCamera={false} environment={"night"} shadows= {false} intensity={0.5} contactShadow={false} >
                <SeatingModel position={[0, 0, 0]}/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} target0={[0, -1, 0]}/>
            <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} near={0.1} far={1000} />
        </Suspense>
              <Environment
  background={true} // can be true, false or "only" (which only sets the background) (default: false)
  backgroundBlurriness={0} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
  backgroundIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
  backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
  environmentIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
  environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
  files={['public/cubeMap/px.png', 'public/cubeMap/nx.png', 'public/cubeMap/py.png', 'public/cubeMap/ny.png', 'public/cubeMap/pz.png', 'public/cubeMap/nz.png']}
  path="/"
  preset={null}
  scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
  encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
/>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.9} luminanceSmoothing={0.9} height={100} blendFunction={BlendFunction.SCREEN} />
            <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>        
        
    </Canvas>
  )
}

export default SeatingModelContainer;