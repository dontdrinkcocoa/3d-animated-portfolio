import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { BumperModel } from "./BumperModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

const BumperModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage environment="city" intensity={1} shadows={false}>
                <BumperModel/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 20, 5]} intensity={2} castShadow />
            <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} near={0.1} far={1000}/>
        </Suspense>
    </Canvas>
  )
}

export default BumperModelContainer