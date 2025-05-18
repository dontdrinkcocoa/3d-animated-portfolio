import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { SeatingModel } from "./SeatingModel";
import { OrbitControls, Stage, PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';

const SeatingModelContainer = () => {

  const handleContextLost = (e) => {
    e.preventDefault();
    console.warn("WebGL context lost");
  };

  const handleContextRestored = () => {
    console.log("WebGL context restored");
    window.location.reload();  // Optional: Reload to ensure the scene is properly rendered again
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, []);

  return (
    <Canvas style={{ width: "100vw", height: "100vh"}}>
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

        <Stage adjustCamera={false} environment={null} shadows={true} intensity={0.5} contactShadow={false} receiveShadow={true} castShadow={true}>
          <SeatingModel position={[0, 0, 0]} />
        </Stage>

        <OrbitControls enableZoom={false} enablePan={false} target={[0, 0.5, 0]} />
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} near={0.1} far={1000} />
      </Suspense>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.9} height={50} blendFunction={BlendFunction.SCREEN} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </Canvas>
  );
};

export default SeatingModelContainer;
