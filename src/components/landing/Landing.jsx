import { useRef } from 'react';
import SeatingModelContainer from "./seating/SeatingModelContainer";
import "./landing.css";
import { motion } from "framer-motion";

const Landing = () => {
  const nextSectionRef = useRef();

  const handleKnockKnock = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='landing'>
      {/* 3D Model and Environment */}
      <div className="seating_container">
        <SeatingModelContainer />
      </div>

      {/* Title Text */}
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="landing-title"
      >
        Minki's Place
      </motion.h2>

      {/* Knock Knock Button */}
      <motion.button 
        className="knock-knock-btn"
        onClick={handleKnockKnock}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Knock, Knock
      </motion.button>

      {/* Next Section */}
      <div ref={nextSectionRef} className="next-section"></div>
    </div>
  );
};

export default Landing;
