import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SeatingModel() {
  const seating = useGLTF('Seating5.glb');
  const modelRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
  if (modelRef.current) {
    const elapsed = clock.getElapsedTime();
    modelRef.current.position.y = -0.4 -Math.sin(elapsed) * 0.2;
    //modelRef.current.rotation.y += 0.01; 
  }
});

  return (
    <group ref={modelRef}>
      <primitive
        object={seating.scene}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('Seating5.glb');
