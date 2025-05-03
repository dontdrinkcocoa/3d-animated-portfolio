import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MingiModel } from "./MingiModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

const MingiModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage environment="city" intensity={0.5} shadows={false}>
                <MingiModel/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} near={0.1} far={1000} />
        </Suspense>
    </Canvas>
  )
}

export default MingiModelContainer