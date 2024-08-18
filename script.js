function calculateGrade(percentage) {
  //your code here
	const roundedPercentage = Math.round(percentage);

  // Handle non-numeric input or negative percentage
  if (isNaN(roundedPercentage) || roundedPercentage < 0) {
    return 'F';
  }

  // Determine the letter grade based on the rounded percentage
  if (roundedPercentage >= 90) {
    return 'A';
  } else if (roundedPercentage >= 80) {
    return 'B';
  } else if (roundedPercentage >= 70) {
    return 'C';
  } else if (roundedPercentage >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
