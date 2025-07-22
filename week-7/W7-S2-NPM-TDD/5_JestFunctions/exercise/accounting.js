// VAT Calculator.js

function calculateGross(amount, vatPercentage = 0.2) {
  console.log("calculateGross", vatPercentage);
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }

  return amount + amount * vatPercentage;
}

console.log(calculateGross(100, 0.2))

function calculateNet(amount, vatPercentage = 0.2) {
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }

  // round to 2 decimal places
  return Math.round((amount / (1 + vatPercentage)) * 100) / 100;
}

console.log(calculateNet(100, 0.2))

function calculateVAT(amount, vatPercentage = 0.2) {
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }

  return amount * vatPercentage;
}

module.exports = { calculateGross, calculateNet, calculateVAT };
