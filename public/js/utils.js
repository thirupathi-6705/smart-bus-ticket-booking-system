function calculateFairPrice(distance) {
    if (distance <= 10) {
      return 10;
    } else {
      return distance * 2.5; // Assuming fair price is 10 per kilometer
    }
  }
  
  module.exports = {
    calculateFairPrice
  };
  