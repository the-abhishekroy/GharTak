import { motion } from 'framer-motion';
import './WorkerSection.css';

function WorkerSection() {
  const workers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      profession: 'Plumber',
      rating: 4.8,
      jobs: 124,
      image: '/worker1.jpg'
    },
    {
      id: 2,
      name: 'Amit Singh',
      profession: 'Electrician',
      rating: 4.9,
      jobs: 156,
      image: '/worker2.jpg'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      profession: 'Cleaner',
      rating: 4.7,
      jobs: 98,
      image: '/worker3.jpg'
    }
  ];

  return (
    <section className="worker-section">
      <div className="worker-container">
        <motion.div 
          className="worker-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Top Workers</h2>
          <p>Meet our skilled professionals ready to help you</p>
        </motion.div>

        <div className="worker-grid">
          {workers.map((worker, index) => (
            <motion.div 
              key={worker.id}
              className="worker-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="worker-image">
                <img src={worker.image} alt={worker.name} />
              </div>
              <div className="worker-info">
                <h3>{worker.name}</h3>
                <p className="profession">{worker.profession}</p>
                <div className="worker-stats">
                  <span className="rating">
                    ⭐ {worker.rating}
                  </span>
                  <span className="jobs">
                    {worker.jobs} Jobs Done
                  </span>
                </div>
                <button className="hire-btn">Hire Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkerSection; 