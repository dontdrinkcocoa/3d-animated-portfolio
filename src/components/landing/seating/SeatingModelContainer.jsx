import { Canvas } from "@react-three/fiber";
import { Suspense, forwardRef, useRef, useImperativeHandle } from "react";
import SeatingModel from "./SeatingModel";
import { OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';

const SeatingModelContainer = forwardRef((props, ref) => {
  const modelRef = useRef();

  useImperativeHandle(ref, () => ({
    startAnimation() {
      if (modelRef.current) {
        modelRef.current.startAnimation();
      }
    }
  }));

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 15, -5]} intensity={0.6} />

      <Suspense fallback="Loading...">
        <Environment
          background={true}
          files={[
            'cubeMap/px.png',
            'cubeMap/nx.png',
            'cubeMap/py.png',
            'cubeMap/ny.png',
            'cubeMap/pz.png',
            'cubeMap/nz.png'
          ]}
          path="/"
        />
        <SeatingModel ref={modelRef} />
        <OrbitControls enableZoom={false} enablePan={false} target={[0, 0.5, 0]} />
      </Suspense>

      <EffectComposer>
        <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.9} height={50} blendFunction={BlendFunction.SCREEN} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </Canvas>
  );
});

export default SeatingModelContainer;
