
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import SeatingModelContainer from "./seating/SeatingModelContainer";


const Landing = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


          <SeatingModelContainer />
    </div>
  );
};

export default Landing;
