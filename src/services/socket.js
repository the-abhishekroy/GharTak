import io from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL);

export const initializeSocket = (userId) => {
  socket.emit('initialize', { userId });
};

export const updateWorkerLocation = (location) => {
  socket.emit('updateLocation', location);
};

export const trackWorker = (workerId, callback) => {
  socket.on(`worker-${workerId}-location`, callback);
};

export default socket; 