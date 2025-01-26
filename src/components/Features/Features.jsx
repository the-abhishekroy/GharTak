import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    id: 1,
    icon: '🎯',
    title: 'Dynamic Pricing',
    description: 'Transparent pricing based on job complexity and worker expertise'
  },
  {
    id: 2,
    icon: '📍',
    title: 'Real-time Tracking',
    description: 'Track your worker\'s location and arrival time in real-time'
  },
  {
    id: 3,
    icon: '⭐',
    title: 'Verified Workers',
    description: 'All workers are thoroughly verified and skilled in their trade'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Rural Employment',
    description: 'Supporting rural workers by connecting them to urban opportunities'
  }
];

function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Ghartak</h2>
          <p>Experience the difference with our unique features</p>
        </motion.div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features; 