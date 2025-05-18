import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SeatingModel } from "./SeatingModel";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';

const SeatingModelContainer = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 15, -5]} intensity={0.6} />

      <Suspense fallback={null}>
        {/* HDRI Background */}
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

        {/* 3D Model */}
        <SeatingModel />

        {/* Camera Configuration - Restored to previous settings */}
        <PerspectiveCamera
          makeDefault
          position={[0, 2, 6]}  // Adjusted to the original position
          fov={50}
          near={0.1}
          far={1000}
        />

        <OrbitControls enableZoom={false} enablePan={false} target={[0, 0.5, 0]} />
      </Suspense>

      <EffectComposer>
        <Bloom 
          mipmapBlur 
          intensity={0.5} 
          luminanceThreshold={0.8} 
          luminanceSmoothing={0.9} 
          height={50} 
          blendFunction={BlendFunction.SCREEN} 
        />
        <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </Canvas>
  );
};

export default SeatingModelContainer;
