import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MingiModel } from "./MingiModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

const MingiModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage environment="city" intensity={0.5} shadows={false}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={25} />
                <MingiModel/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
    </Canvas>
  )
}

export default MingiModelContainer