// Prompt the user for the student's mark
const mark = parseInt(prompt("Enter student mark (0-100):"));

// Determine the grade based on the mark
let grade;
if (mark >= 80) {
  grade = "A";
} else if (mark >= 60 && mark <= 79) {
  grade = "B";
} else if (mark >= 50 && mark <= 59) {
  grade = "C";
} else if (mark >= 40 && mark <= 49) {
  grade = "D";
} else {
  grade = "E";
}

// Output the grade to the console
console.log(`Student mark is ${mark}, grade is ${grade}.`);
