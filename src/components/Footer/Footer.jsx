import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ghartak</h3>
          <p>Connecting urban homes with skilled rural workers</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/worker-registration">Join as Worker</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Cleaning</li>
            <li>Carpentry</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@ghartak.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address: Mumbai, India</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Ghartak. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 