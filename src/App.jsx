// Import necessary hooks and assets
import { useState, useRef } from 'react';
import { lazy } from 'react';


const Landing = lazy(() => import('./components/landing/Landing'));
const Hero = lazy(() => import('./components/hero/Hero'));
const Services = lazy(() => import('./components/services/Services'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/contact/Contact'));

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/background.mp3'));

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='container'>
      <div className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '🔊' : '🔇'}
      </div>
      <section id="#home">
        <Landing />
      </section>
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <Portfolio />
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
