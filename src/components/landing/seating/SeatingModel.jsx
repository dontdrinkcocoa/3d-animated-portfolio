import { useGLTF } from '@react-three/drei';
import { useRef, forwardRef, useImperativeHandle } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SeatingModel = forwardRef((props, ref) => {
  const seating = useGLTF('Seating5.glb');
  const modelRef = useRef();
  const clock = new THREE.Clock();
  let isAnimating = false;
  let animationProgress = 0;

  useImperativeHandle(ref, () => ({
    startAnimation() {
      isAnimating = true;
      animationProgress = 0;
    }
  }));

  useFrame(() => {
    if (isAnimating) {
      animationProgress += 0.02;
      if (modelRef.current) {
        modelRef.current.position.y -= 0.02;
        modelRef.current.rotation.y += 0.05;

        if (animationProgress >= 1) {
          isAnimating = false;
        }
      }
    }
  });

  return (
    <group ref={modelRef}>
      <primitive object={seating.scene} castShadow receiveShadow />
    </group>
  );
});

useGLTF.preload('Seating5.glb');

export default SeatingModel;
