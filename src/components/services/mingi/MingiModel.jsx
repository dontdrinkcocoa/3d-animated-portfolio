import { useGLTF } from '@react-three/drei';

export function MingiModel() {
  const mingi = useGLTF('/Phone8.glb');
  return (
    <group>
      <mesh
        object={mingi.scene}
        castShadow
        receiveShadow
        //rotation-y={Math.PI}
        position={[2, 0, 2]}

      />
    </group>
  );
}

useGLTF.preload('/Phone8.glb');