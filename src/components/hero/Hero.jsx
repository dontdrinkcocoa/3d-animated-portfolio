import { animate, stagger } from "motion";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        {/* Title */}
        <motion.h1 
          initial={{ y: -100, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hTitle">
          Hey there,
          <br />
          <span>I'm Minki.</span>
        </motion.h1>

        {/* Awards */}
        <motion.div 
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Excellent Home Protector</motion.h2>
          <motion.p variants={awardVariants}>Art&Tech and AI in Sogang Univ.</motion.p>
          <motion.div variants={awardVariants} className="awardlist">
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>

        {/* Scroll SVG */}
        <motion.a 
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services"
        >
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hSection right">
        {/* FOLLOW */}
        <div className="follow">
          <a href="/"><img src="/facebook.png" alt="" /></a>
          <a href="/"><img src="/youtube.png" alt="" /></a>
          <a href="/"><img src="/instagram.png" alt="" /></a>
          <div className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </div>
        </div>

        {/* BUBBLE */}
        <Speech />

        {/* CERTIFICATE */}
        <motion.div className="certificate"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <img src="/certificate.png" alt="" />
          <div className="certiText">
            <h2>Certificate</h2>
            <p>AI & Tech</p>
          </div>
        </motion.div>

        {/* CONTACT BUTTON (Moved OUTSIDE certificate) */}
        <a href="/#contact" className="contactLink">
          <motion.div className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="skyblue" stroke="#fff" strokeWidth="5" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath"> Contact Me!</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="50%"> Hire Me!</textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="black" strokeWidth="2">
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </a>
      </div>

      <div className="bg">
        {/* 3D */}
        <Canvas>
          <Suspense fallback="Loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;