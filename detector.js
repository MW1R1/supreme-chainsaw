// Prompt the user for the car's speed
const speed = parseInt(prompt("Enter car speed (km/h):"));

// Calculate the number of demerit points
let points = 0;
if (speed <= 70) {
  console.log("Ok");
} else {
  points = Math.floor((speed - 70) / 5);
  console.log(`Points: ${points}`);
}

// Check if license is suspended
if (points >= 12) {
  console.log("License suspended");
}
