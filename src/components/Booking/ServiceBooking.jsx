import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculatePrice } from '../../services/pricing';
import './ServiceBooking.css';

function ServiceBooking() {
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    description: '',
    address: '',
    scheduledTime: '',
  });
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingData,
          price,
        }),
      });
      const data = await response.json();
      // Handle successful booking
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  const updatePrice = (serviceType) => {
    const basePrice = {
      'plumbing': 500,
      'cleaning': 400,
      'electrical': 600,
    }[serviceType];

    const price = calculatePrice(basePrice, {
      distance: 5, // This would come from actual location data
      demandMultiplier: 0.2,
      workerRating: 4.5,
    });

    setPrice(price);
  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <h2>Book a Service</h2>
        <select
          onChange={(e) => {
            setBookingData({...bookingData, serviceType: e.target.value});
            updatePrice(e.target.value);
          }}
        >
          <option value="">Select Service</option>
          <option value="plumbing">Plumbing</option>
          <option value="cleaning">Cleaning</option>
          <option value="electrical">Electrical</option>
        </select>
        <textarea
          placeholder="Describe your requirement"
          onChange={(e) => setBookingData({...bookingData, description: e.target.value})}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setBookingData({...bookingData, address: e.target.value})}
        />
        <input
          type="datetime-local"
          onChange={(e) => setBookingData({...bookingData, scheduledTime: e.target.value})}
        />
        <div className="price-display">
          Estimated Price: ₹{price}
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default ServiceBooking; 