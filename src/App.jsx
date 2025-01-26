import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import WorkerDashboard from './pages/WorkerDashboard';
import ServiceBooking from './components/Booking/ServiceBooking';
import Login from './components/Auth/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          <Route path="/book-service" element={<ServiceBooking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
