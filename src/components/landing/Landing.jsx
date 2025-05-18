import { Suspense } from 'react';
import SeatingModelContainer from "./seating/SeatingModelContainer";
import "./landing.css";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from '@react-three/drei';


const Landing = () => {
  return (
    
    <div className='landing'>
      <div className="seating_container">
        <SeatingModelContainer positionY={10} /> {/* Adjust this value to move down/up */}
      </div>
    </div>
  );
};

export default Landing;
