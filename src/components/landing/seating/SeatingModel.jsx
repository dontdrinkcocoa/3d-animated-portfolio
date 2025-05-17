import { useGLTF } from '@react-three/drei';

export function SeatingModel() {
  const seating = useGLTF('Seating5.glb');
  return (
    <group>
      <primitive
        object={seating.scene}
        castShadow
        receiveShadow
        //rotation-y={Math.PI}
        position={[0, 0, 0]}

      />
    </group>
  );
}

useGLTF.preload('Seating5.glb');