export const calculatePrice = (basePrice, factors) => {
  let finalPrice = basePrice;
  
  // Distance factor
  finalPrice += factors.distance * 10; // ₹10 per km
  
  // Time of day factor
  const hour = new Date().getHours();
  if (hour < 6 || hour > 22) {
    finalPrice *= 1.5; // 50% premium for late night service
  }
  
  // Demand factor
  finalPrice *= (1 + factors.demandMultiplier);
  
  // Worker rating factor
  finalPrice *= (1 + (factors.workerRating - 3) * 0.1);
  
  return Math.round(finalPrice);
}; 