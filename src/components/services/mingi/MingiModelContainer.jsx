import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MingiModel } from "./MingiModel"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

const MingiModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage environment="city">
                <MingiModel/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
    </Canvas>
  )
}

export default MingiModelContainer