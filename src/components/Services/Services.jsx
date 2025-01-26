import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    id: 1,
    icon: '🔧',
    title: 'Plumbing',
    description: 'Expert plumbing services for all your needs',
    price: 'Starts at ₹499'
  },
  {
    id: 2,
    icon: '🧹',
    title: 'Cleaning',
    description: 'Professional home cleaning services',
    price: 'Starts at ₹399'
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Electrical',
    description: 'Certified electricians at your service',
    price: 'Starts at ₹599'
  },
  {
    id: 4,
    icon: '🔨',
    title: 'Carpentry',
    description: 'Skilled carpenters for your woodwork',
    price: 'Starts at ₹699'
  }
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>Choose from our wide range of professional services</p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-price">{service.price}</span>
              <button className="book-now-btn">Book Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 