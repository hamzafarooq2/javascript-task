const prompt = require("prompt-sync")();

var fare = prompt("Enter amount of fare: ");
var flight_delay = prompt("Enter flight delayed time in minutes: ");

function calculate_refund(fare, flight_delay) {
  if (flight_delay <= 30) {
    return "No refund for 30 minutes time delay";
  } else if (flight_delay > 30 && flight_delay <= 120) {
    return "This is your 10% refund: $" + (10 / 100) * fare; // 10% refund, capped at $100
  } else if (flight_delay > 120 && flight_delay <= 300) {
    return "This is your 20% refund: $" + (20 / 100) * fare; // 20% refund, capped at $100
  } else if (flight_delay > 300) {
    return "This is your 50% refund: $" + (50 / 100) * fare; // 50% refund, capped at $100
  } else {
    return -1;
  }
}

const customer_refund = calculate_refund(fare, flight_delay);
console.log(customer_refund);
