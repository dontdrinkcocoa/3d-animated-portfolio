import { Suspense } from 'react';
import SeatingModelContainer from "./seating/SeatingModelContainer";
import "./landing.css";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from '@react-three/drei';
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className='landing'>
      <div className="seating_container">
        <SeatingModelContainer />
      </div>

      {/* Title Text */}
      <motion.h2 initial={{ y: -100, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="landing-title">
            <span>Minki's Place</span>
      </motion.h2>
    </div>
  );
};

export default Landing;
