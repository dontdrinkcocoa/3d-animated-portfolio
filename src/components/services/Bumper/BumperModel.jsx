import { useGLTF } from '@react-three/drei';

export function BumperModel() {
  const bumper = useGLTF('/BwM3.glb');
  return (
    <group>
      <mesh
        object={bumper.scene}
        castShadow
        receiveShadow
        //rotation-y={Math.PI}
        position={[1, 0, 1]}

      />
    </group>
  );
}

useGLTF.preload('/BwM3.glb');