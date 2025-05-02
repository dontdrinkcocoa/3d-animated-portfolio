import { MeshDistortMaterial, Sphere } from "@react-three/drei"


const Shape = () => {
  return (
    <>
        <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#f272c8"
                attach="material"
                distort={0.5} // Strength of distortion
                speed={2} // Speed of distortion
            />
        </Sphere>
        <ambientLight intensity={1.5} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
    </>
  )
}

export default Shape