import { useRef } from 'react';
import SeatingModelContainer from "./seating/SeatingModelContainer";
import "./landing.css";

import { motion } from "motion/react";

const Landing = ({ toggleBackgroundMusic }) => {
  const seatingRef = useRef();
  const nextSectionRef = useRef();

  const handleKnockKnock = () => {
    // Scroll to the next section
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });

    // Activate background music
    toggleBackgroundMusic(true);

    // Animate the model
    if (seatingRef.current) {
      seatingRef.current.startAnimation();
    }
  };

  return (
    <div className='landing'>
      <div className="seating_container">
        <SeatingModelContainer ref={seatingRef} />
      </div>

      {/* Title Text */}
      <motion.h2 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="landing-title">
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

      {/* Placeholder for Next Section */}
      <div ref={nextSectionRef} className="next-section"></div>
    </div>
  );
};

export default Landing;
