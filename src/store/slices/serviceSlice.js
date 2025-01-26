import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    {
      id: 1,
      name: 'Plumbing',
      description: 'Expert plumbing services for all your needs',
      basePrice: 499,
      icon: '🔧'
    },
    {
      id: 2,
      name: 'Cleaning',
      description: 'Professional home cleaning services',
      basePrice: 399,
      icon: '🧹'
    },
    {
      id: 3,
      name: 'Electrical',
      description: 'Certified electricians at your service',
      basePrice: 599,
      icon: '⚡'
    },
    {
      id: 4,
      name: 'Carpentry',
      description: 'Skilled carpenters for your woodwork',
      basePrice: 699,
      icon: '🔨'
    }
  ],
  loading: false,
  error: null
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    updateService: (state, action) => {
      const index = state.services.findIndex(service => service.id === action.payload.id);
      if (index !== -1) {
        state.services[index] = action.payload;
      }
    },
    deleteService: (state, action) => {
      state.services = state.services.filter(service => service.id !== action.payload);
    }
  }
});

export const { setServices, addService, updateService, deleteService } = serviceSlice.actions;
export default serviceSlice.reducer; 