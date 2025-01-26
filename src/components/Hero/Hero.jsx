import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Connect with Skilled Workers for Your Home Services</h1>
          <p>Find verified professionals for plumbing, cleaning, and more. Support rural workers while getting quality service.</p>
          <div className="hero-cta">
            <button className="primary-btn">Book a Service</button>
            <button className="secondary-btn">Join as Worker</button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/hero-image.svg" alt="Home Services" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero; 